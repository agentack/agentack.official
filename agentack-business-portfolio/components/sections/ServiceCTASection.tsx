import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface ServiceCTASectionProps {
  serviceName: string
  ctaLabel?: string
  subtext?: string
}

export function ServiceCTASection({
  serviceName,
  ctaLabel = 'Book a free strategy call',
  subtext = 'Discuss your specific needs with our team.',
}: ServiceCTASectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading={`Ready to automate ${serviceName.toLowerCase()}?`}
          subtitle={subtext}
          align="center"
        />

        <div className="mt-8">
          <Button variant="section-cta" href="/contact">
            {ctaLabel}
          </Button>
        </div>

        <Link
          href="/services"
          className="inline-block mt-6 text-teal-primary text-[12px] font-medium hover:text-[#00FFE5] transition-colors"
        >
          ← Back to all services
        </Link>
      </div>
    </section>
  )
}
