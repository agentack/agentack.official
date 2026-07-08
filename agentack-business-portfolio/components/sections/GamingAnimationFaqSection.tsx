'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'

interface FaqItem {
  question: string
  answer: string
}

interface GamingAnimationFaqSectionProps {
  faqs: FaqItem[]
}

export function GamingAnimationFaqSection({ faqs }: GamingAnimationFaqSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="FAQ"
          heading="Frequently Asked Questions"
          align="center"
        />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
