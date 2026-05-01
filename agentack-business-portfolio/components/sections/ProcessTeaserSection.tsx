import { SectionHeading } from '@/components/ui/SectionHeading'
import { StepCard } from '@/components/ui/StepCard'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessTeaserSectionProps {
  steps: ProcessStep[]
}

export function ProcessTeaserSection({ steps }: ProcessTeaserSectionProps) {
  // Take only first 3 steps for teaser
  const teaserSteps = steps.slice(0, 3)

  return (
    <section className="bg-black-base py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Our Process"
          heading="How We Deliver"
          subtitle="A proven framework that gets results."
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {teaserSteps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              isLast={index === teaserSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
