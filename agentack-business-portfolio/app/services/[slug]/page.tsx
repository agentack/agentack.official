import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { serviceBySlugQuery } from '@/lib/sanity/queries'
import { ServiceHeroSection } from '@/components/sections/ServiceHeroSection'
import { WhatIsIncludedSection } from '@/components/sections/WhatIsIncludedSection'
import { WhoIsItForSection } from '@/components/sections/WhoIsItForSection'
import { ToolsWeUseSection } from '@/components/sections/ToolsWeUseSection'
import { ServiceCTASection } from '@/components/sections/ServiceCTASection'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await client.fetch(serviceBySlugQuery, { slug })

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.name} — Agentack`,
    description: service.seoDescription,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await client.fetch(serviceBySlugQuery, { slug })

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Section 1: Navbar (in layout) */}

      {/* Section 2: Service Hero */}
      <ServiceHeroSection
        eyebrow="Service"
        headline={service.heroHeadline}
        subtitle={service.heroSubtitle}
      />

      {/* Section 3: What's Included */}
      <WhatIsIncludedSection features={service.features || []} />

      {/* Section 4: Who Is It For */}
      <WhoIsItForSection items={service.whoIsItFor || []} />

      {/* Section 5: Tools We Use */}
      <ToolsWeUseSection tools={service.toolsUsed || []} />

      {/* Section 6: CTA */}
      <ServiceCTASection serviceName={service.name} />

      {/* Section 7: Footer (in layout) */}
    </>
  )
}
