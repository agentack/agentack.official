'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ContactHeroSectionProps {
  heading?: string
  subtitle?: string
}

export function ContactHeroSection({
  heading: _heading,
  subtitle: _subtitle,
}: ContactHeroSectionProps) {
  const { t } = useLanguage()
  const heading = _heading ?? t.sections.contactHero.heading
  const subtitle = _subtitle ?? t.sections.contactHero.subtitle
  return (
    <section className="bg-black-base pt-[100px] pb-[60px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading={heading}
          subtitle={subtitle}
          align="center"
        />
      </div>
    </section>
  )
}
