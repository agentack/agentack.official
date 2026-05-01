import { LogoStrip } from '@/components/ui/LogoStrip'

const LOGOS = [
  { name: 'Zapier' },
  { name: 'Make' },
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'Airtable' },
  { name: 'Notion' },
  { name: 'Slack' },
  { name: 'HubSpot' },
]

export function LogoStripSection() {
  return (
    <section className="bg-black-3 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <LogoStrip logos={LOGOS} label="Technologies we work with" speed={30} />
      </div>
    </section>
  )
}
