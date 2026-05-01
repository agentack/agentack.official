import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { siteSettingsQuery, teamMembersQuery } from '@/lib/sanity/queries'
import { MissionHeroSection } from '@/components/sections/MissionHeroSection'
import { OurApproachSection } from '@/components/sections/OurApproachSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { AboutCTASection } from '@/components/sections/AboutCTASection'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About — Agentack',
    description: "We believe most business processes shouldn't require humans. Learn about our mission, approach, and the team behind Agentack.",
  }
}

export default async function AboutPage() {
  const [settings, teamMembers] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(teamMembersQuery),
  ])

  // Get the first team member as founder (or use a dedicated founder query in production)
  const founder = teamMembers?.[0] || {
    name: settings?.agencyName || 'Our Team',
    role: 'Founder',
    bio: settings?.tagline || 'We build custom AI automation systems for mid-size businesses.',
    photo: null,
    linkedinUrl: settings?.linkedinUrl,
  }

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Mission Hero */}
      <MissionHeroSection
        heading="About Us"
        subtitle="We believe most business processes shouldn't require humans. Our mission is to automate the mundane so your team can focus on what truly matters."
      />

      {/* Section 3: Our Approach */}
      <OurApproachSection />

      {/* Section 4: Founder */}
      <FounderSection founder={founder} />

      {/* Section 5: CTA */}
      <AboutCTASection />

      {/* Section 6: Footer (in layout) */}
    </>
  )
}
