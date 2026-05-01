import { SectionHeading } from '@/components/ui/SectionHeading'

interface ContactHeroSectionProps {
  heading?: string
  subtitle?: string
}

export function ContactHeroSection({
  heading = "Let's talk about what's slowing you down.",
  subtitle = "Book a free 30-min strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.",
}: ContactHeroSectionProps) {
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
