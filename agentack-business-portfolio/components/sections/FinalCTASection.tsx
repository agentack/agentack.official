import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface FinalCTASectionProps {
  heading: string
  subtext: string
  ctaLabel: string
  microText?: string
}

export function FinalCTASection({
  heading,
  subtext,
  ctaLabel,
  microText,
}: FinalCTASectionProps) {
  return (
    <section className="bg-black-base py-[120px]">
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

        {microText && (
          <p className="font-body font-normal text-[12px] text-sage-dark mt-6">
            {microText}
          </p>
        )}
      </div>
    </section>
  )
}
