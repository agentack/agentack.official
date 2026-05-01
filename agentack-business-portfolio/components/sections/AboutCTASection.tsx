import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface AboutCTASectionProps {
  heading?: string
  subtext?: string
  ctaLabel?: string
}

export function AboutCTASection({
  heading = "Want to work with us?",
  subtext = "We're currently accepting new projects. Book a free strategy call to discuss your automation needs.",
  ctaLabel = 'Book a free strategy call',
}: AboutCTASectionProps) {
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading={heading}
          subtitle={subtext}
          align="center"
        />

        <div className="mt-8">
          <Button variant="section-cta" href="/contact">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
