import { SectionHeading } from '@/components/ui/SectionHeading'

interface ProblemSectionProps {
  heading: string
  subtitle: string
  painPoints: string[]
  statement: string
  subStatement: string
}

export function ProblemSection({
  heading,
  subtitle,
  painPoints,
  statement,
  subStatement,
}: ProblemSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* Left Column: Heading + Pain Points */}
          <div>
            <SectionHeading
              eyebrow="The Problem"
              heading={heading}
              subtitle={subtitle}
              align="left"
            />

            <ul className="mt-8 space-y-4">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-dark mt-2 flex-shrink-0" />
                  <span className="font-body font-normal text-[16px] text-sage-mid">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Statement */}
          <div className="flex flex-col justify-center">
            <div className="border-l-2 border-teal-primary pl-6">
              <p className="font-display text-[24px] leading-[1.4] text-frost-white">
                {statement}
              </p>
              <p className="font-body font-normal text-[15px] text-sage-mid mt-4">
                {subStatement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
