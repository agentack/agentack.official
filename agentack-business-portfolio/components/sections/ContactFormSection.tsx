'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLanguage } from '@/lib/i18n/context'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const formSchema = (nameMin: string, nameMax: string, companyRequired: string, companyMax: string, emailInvalid: string, messageMin: string, messageMax: string) => z.object({
  name: z
    .string()
    .min(2, nameMin)
    .max(100, nameMax),
  company: z
    .string()
    .min(1, companyRequired)
    .max(100, companyMax),
  email: z
    .string()
    .email(emailInvalid),
  message: z
    .string()
    .min(10, messageMin)
    .max(2000, messageMax),
})

type FormData = z.infer<ReturnType<typeof formSchema>>

export function ContactFormSection() {
  const { t } = useLanguage()
  const schema = formSchema(
    t.sections.contactForm.nameMin,
    t.sections.contactForm.nameMax,
    t.sections.contactForm.companyRequired,
    t.sections.contactForm.companyMax,
    t.sections.contactForm.emailInvalid,
    t.sections.contactForm.messageMin,
    t.sections.contactForm.messageMax,
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
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
        setError(result.message || t.sections.contactForm.errorGeneric)
      }
    } catch (err) {
      setError(t.sections.contactForm.errorNetwork)
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
              {t.sections.contactForm.successHeading}
            </h3>
            <p className="font-body font-normal text-[16px] leading-[1.7] text-sage-mid mb-8">
              {t.sections.contactForm.successSubtext}
            </p>
            <Button
              variant="section-cta"
              onClick={() => {
                setIsSuccess(false)
                reset()
              }}
            >
              {t.sections.contactForm.sendAnother}
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
              {t.sections.contactForm.heading}
            </h3>

            {error && (
              <div className="mb-6 p-4 rounded-card bg-red-danger/10 border border-red-danger">
                <p className="text-red-danger text-[14px]">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Input
                id="name"
                label={t.sections.contactForm.nameLabel}
                placeholder={t.sections.contactForm.namePlaceholder}
                error={errors.name?.message}
                register={register('name')}
              />

              <Input
                id="company"
                label={t.sections.contactForm.companyLabel}
                placeholder={t.sections.contactForm.companyPlaceholder}
                error={errors.company?.message}
                register={register('company')}
              />

              <Input
                id="email"
                label={t.sections.contactForm.emailLabel}
                type="email"
                placeholder={t.sections.contactForm.emailPlaceholder}
                error={errors.email?.message}
                register={register('email')}
              />

              <Textarea
                id="message"
                label={t.sections.contactForm.messageLabel}
                placeholder={t.sections.contactForm.messagePlaceholder}
                rows={5}
                error={errors.message?.message}
                register={register('message')}
              />

              <Button
                type="submit"
                variant="form-submit"
                isLoading={isSubmitting}
              >
                {isSubmitting ? t.sections.contactForm.sending : t.sections.contactForm.send}
              </Button>
            </form>
          </div>

          {/* Right: Cal.com Embed */}
          <div className="lg:col-span-2 border-l border-[#1E2E26] pl-0 lg:pl-[60px]">
            <h3 className="font-body font-medium text-[16px] text-sage-mid mb-4">
              {t.sections.contactForm.orPickTime}
            </h3>
            <div className="rounded-card border border-border-dark overflow-hidden">
              <iframe
                src={process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com'}
                className="w-full h-[600px]"
                loading="lazy"
                title={t.ui.scheduleCall}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
