import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { contactSchema } from '@/lib/validators/contact'

// Lazy initialize Resend client
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured. Email sending will be skipped.')
    return null
  }
  const { Resend } = require('resend')
  return new Resend(apiKey)
}

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const HOUR_MS = 60 * 60 * 1000
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + HOUR_MS })
    return { allowed: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: MAX_REQUESTS - record.count }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting (from x-forwarded-for header)
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0] ?? 'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Send email via Resend
    const resend = getResendClient()
    if (resend) {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL_TO || 'hello@yourdomain.com'],
        subject: `New Contact Form Submission from ${validated.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #00FF88; padding: 20px; border-radius: 8px 8px 0 0; }
                .header h1 { margin: 0; color: #001A0D; font-size: 24px; }
                .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
                .value { background: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
                .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">Name</span>
                    <div class="value">${validated.name}</div>
                  </div>
                  <div class="field">
                    <span class="label">Company</span>
                    <div class="value">${validated.company}</div>
                  </div>
                <div class="field">
                  <span class="label">Email</span>
                  <div class="value">${validated.email}</div>
                </div>
                <div class="field">
                  <span class="label">Message</span>
                  <div class="value" style="white-space: pre-wrap;">${validated.message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from the Agentack contact form.</p>
                <p>Reply directly to this email to respond to ${validated.email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: validated.email,
      })
    } else {
      // Log that email was skipped but still return success (for development)
      console.log('Email sending skipped (no API key configured)')
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    // Handle Resend API errors
    if (error instanceof Error) {
      console.error('Contact form error:', error)
      return NextResponse.json(
        {
          error: 'Failed to send message',
          message: error.message,
        },
        { status: 500 }
      )
    }

    // Handle unknown errors
    console.error('Unknown contact form error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'An unexpected error occurred',
      },
      { status: 500 }
    )
  }
}
