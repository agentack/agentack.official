import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { siteSettingsQuery, servicesQuery } from '@/lib/sanity/queries'
import { HeroSection } from '@/components/sections/HeroSection'
import { LogoStripSection } from '@/components/sections/LogoStripSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesOverviewSection } from '@/components/sections/ServicesOverviewSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery)

  return {
    title: settings?.agencyName
      ? `${settings.agencyName} — AI Automation for Growing Businesses`
      : 'Agentack — AI Automation for Growing Businesses',
    description:
      settings?.seoDefaultDescription ||
      'We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.',
    openGraph: {
      title: settings?.agencyName || 'Agentack',
      description:
        settings?.seoDefaultDescription ||
        'We build custom AI automation systems for mid-size businesses.',
      images: ['/og-image.png'],
    },
  }
}

export default async function HomePage() {
  const [settings, services] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(servicesQuery),
  ])

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sage-mid">Loading...</p>
      </div>
    )
  }

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Hero */}
      <HeroSection
        eyebrow="AI Automation Agency"
        headline={settings.heroHeadline}
        subtitle={settings.heroSubtitle}
        primaryCtaLabel={settings.heroPrimaryCtaLabel}
        secondaryCtaLabel={settings.heroSecondaryCtaLabel}
      />

      {/* Section 3: Logo Strip */}
      <LogoStripSection />

      {/* Section 4: Problem */}
      <ProblemSection
        heading="The Problem"
        subtitle={settings.problemStatement}
        painPoints={settings.problemPainPoints || []}
        statement="Most businesses are stuck with manual processes."
        subStatement="We help you fix that."
      />

      {/* Section 5: Services Overview */}
      <ServicesOverviewSection services={services || []} />

      {/* Section 6: Process */}
      <ProcessSection steps={settings.processSteps || []} />

      {/* Section 7: Stats */}
      {/* <StatsSection stats={settings.stats || []} /> */}

      {/* Section 8: Why Us */}
      <WhyUsSection features={settings.differentiators || []} />

      {/* Section 9: Final CTA */}
      <FinalCTASection
        heading={settings.finalCtaHeadline}
        subtext={settings.finalCtaSubtext}
        ctaLabel="Book a free strategy call"
        microText={settings.finalCtaMicroText}
      />

      {/* Section 10: Footer (in layout) */}
    </>
  )
}
