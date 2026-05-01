'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(100, 'Company must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
})

type FormData = z.infer<typeof formSchema>

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-black-2 pt-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-primary flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-display font-medium text-[28px] leading-[1.2] text-frost-white mb-4">
              Message Sent
            </h3>
            <p className="font-body font-normal text-[16px] leading-[1.7] text-sage-mid mb-8">
              We'll get back to you within 24 hours.
            </p>
            <Button
              variant="section-cta"
              onClick={() => {
                setIsSuccess(false)
                reset()
              }}
            >
              Send another message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black-2 pt-[60px] pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[60px]">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-medium text-[20px] leading-[1.4] text-frost-white mb-6">
              Send us a message
            </h3>

            {error && (
              <div className="mb-6 p-4 rounded-card bg-red-danger/10 border border-red-danger">
                <p className="text-red-danger text-[14px]">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Input
                id="name"
                label="Name"
                placeholder="John Doe"
                error={errors.name?.message}
                register={register('name')}
              />

              <Input
                id="company"
                label="Company"
                placeholder="Acme Inc."
                error={errors.company?.message}
                register={register('company')}
              />

              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="john@company.com"
                error={errors.email?.message}
                register={register('email')}
              />

              <Textarea
                id="message"
                label="Message"
                placeholder="What's your biggest operational bottleneck?"
                rows={5}
                error={errors.message?.message}
                register={register('message')}
              />

              <Button
                type="submit"
                variant="form-submit"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Right: Cal.com Embed */}
          <div className="lg:col-span-2 border-l border-[#1E2E26] pl-0 lg:pl-[60px]">
            <h3 className="font-body font-medium text-[16px] text-sage-mid mb-4">
              Or pick a time directly
            </h3>
            <div className="rounded-card border border-border-dark overflow-hidden">
              <iframe
                src={process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com'}
                className="w-full h-[600px]"
                loading="lazy"
                title="Schedule a call"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
