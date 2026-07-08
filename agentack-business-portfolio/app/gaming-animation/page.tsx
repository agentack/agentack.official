import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { gamingAnimationQuery } from '@/lib/sanity/queries'
import { GamingAnimationHeroSection } from '@/components/sections/GamingAnimationHeroSection'
import { GamingAnimationServicesSection } from '@/components/sections/GamingAnimationServicesSection'
import { GamingAnimationIndustriesSection } from '@/components/sections/GamingAnimationIndustriesSection'
import { GamingAnimationToolsSection } from '@/components/sections/GamingAnimationToolsSection'
import { GamingAnimationProcessSection } from '@/components/sections/GamingAnimationProcessSection'
import { GamingAnimationWhySection } from '@/components/sections/GamingAnimationWhySection'
import { GamingAnimationFaqSection } from '@/components/sections/GamingAnimationFaqSection'
import { GamingAnimationBridgeSection } from '@/components/sections/GamingAnimationBridgeSection'
import { Button } from '@/components/ui/Button'

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(gamingAnimationQuery)

  return {
    title: 'Gaming & Animation — Agentack',
    description: data?.heroSubtitle || 'Game development, animation, and interactive experiences.',
  }
}

const defaultData = {
  heroHeadline: 'Game Development & Creative Production',
  heroSubtitle:
    'We design and build games, 2D & 3D animations, interactive experiences, and digital assets for startups, studios, brands, and enterprises.',
  heroPrimaryCta: 'Discuss Your Project',
  heroSecondaryCta: 'View Our Work',
  services: [
    {
      title: 'Game Development',
      description: 'Custom game development across platforms using industry-leading engines.',
      icon: 'Gamepad2',
      items: [
        'Unity Development',
        'Unreal Engine Development',
        'Mobile Games',
        'PC Games',
        'Multiplayer Games',
        'Educational Games',
        'Serious Games',
      ],
    },
    {
      title: 'Animation',
      description: 'High-quality 2D and 3D animation for games, marketing, and storytelling.',
      icon: 'Palette',
      items: ['2D Animation', '3D Animation', 'Motion Graphics', 'Explainer Videos', 'Product Animation', 'Cinematics'],
    },
    {
      title: '3D Art & Modeling',
      description: 'Production-ready 3D assets for games, visualization, and interactive experiences.',
      icon: 'Box',
      items: ['Character Modeling', 'Environment Design', 'Props & Vehicles', 'Product Visualization', 'Game Assets'],
    },
    {
      title: 'Character Design & Rigging',
      description: 'Custom characters with professional rigging for seamless animation.',
      icon: 'Shirt',
      items: ['Character Design', 'Rigging', 'Facial Rigging', 'Animation Ready Characters'],
    },
    {
      title: 'Cinematics & Trailers',
      description: 'Cinematic sequences and promotional content that captivate audiences.',
      icon: 'Video',
      items: ['Game Trailers', 'Launch Videos', 'Cutscenes', 'Promotional Videos'],
    },
  ],
  industries: [
    'Gaming Studios',
    'Startups',
    'Brands',
    'Advertising Agencies',
    'Animation Studios',
    'Educational Organizations',
  ],
  toolsTitle: 'Technologies & Creative Tools',
  toolGroups: [
    { groupName: 'Game Engines', tools: ['Unity', 'Unreal Engine'] },
    { groupName: '3D', tools: ['Autodesk Maya', 'Blender', 'ZBrush', 'Substance Painter'] },
    { groupName: 'Design', tools: ['Illustrator', 'Photoshop', 'Figma'] },
    { groupName: 'Animation', tools: ['After Effects', 'Premiere Pro', 'Cinema 4D'] },
  ],
  processTitle: 'Our Development Process',
  processSteps: [
    'Discovery',
    'Concept & Planning',
    'Design & Asset Creation',
    'Development',
    'Animation',
    'Testing & QA',
    'Launch & Support',
  ],
  whyTitle: 'Why Choose Agentack',
  whyItems: [
    'Experienced Game Developers',
    'Skilled 2D & 3D Artists',
    'Production-Ready Assets',
    'Modern Development Pipeline',
    'Collaborative Process',
  ],
  faqs: [
    {
      question: 'Can you build games from scratch?',
      answer:
        'Yes. We handle full-cycle game development from concept and design to development, animation, testing, and launch across mobile, PC, and console platforms.',
    },
    {
      question: 'Do you use Unity or Unreal?',
      answer:
        'We work with both Unity and Unreal Engine. Our team chooses the best engine for your project based on requirements, target platform, and performance needs.',
    },
    {
      question: 'Can you work with our existing assets?',
      answer:
        'Absolutely. We can integrate our pipeline with your existing assets, art style, and codebase. We also offer asset optimization and pipeline consulting.',
    },
    {
      question: 'Do you create game-ready 3D models?',
      answer:
        'Yes. All our 3D models are built with game-ready topology, UV mapping, and texturing optimized for real-time rendering in any engine.',
    },
    {
      question: 'Can you animate products?',
      answer:
        'Yes. We create product animations and visualizations for marketing, presentations, and ecommerce, including 3D product tours and explainer videos.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes. We offer ongoing support, updates, bug fixes, and content additions post-launch to keep your project running smoothly.',
    },
  ],
  bridgeHeadline: 'Looking for AI instead?',
  bridgeText:
    'Agentack also engineers custom AI systems for businesses, including intelligent automation, AI agents, and workflow optimization. Our teams collaborate to deliver projects that combine intelligent software with high-quality interactive experiences.',
  ctaHeadline: 'Have a game or animation project in mind?',
  ctaSubtext: "Let's discuss your idea and turn it into reality.",
  ctaLabel: 'Start Your Project',
}

export default async function GamingAnimationPage() {
  const cms = await client.fetch(gamingAnimationQuery)
  const d = cms || defaultData

  return (
    <>
      <GamingAnimationHeroSection
        headline={d.heroHeadline}
        subtitle={d.heroSubtitle}
        primaryCta={d.heroPrimaryCta}
        secondaryCta={d.heroSecondaryCta}
      />

      {d.services && d.services.length > 0 && (
        <GamingAnimationServicesSection services={d.services} />
      )}

      {d.industries && d.industries.length > 0 && (
        <GamingAnimationIndustriesSection industries={d.industries} />
      )}

      {d.toolGroups && d.toolGroups.length > 0 && (
        <GamingAnimationToolsSection title={d.toolsTitle} groups={d.toolGroups} />
      )}

      {d.processSteps && d.processSteps.length > 0 && (
        <GamingAnimationProcessSection title={d.processTitle} steps={d.processSteps} />
      )}

      {d.whyItems && d.whyItems.length > 0 && (
        <GamingAnimationWhySection title={d.whyTitle} items={d.whyItems} />
      )}

      {d.faqs && d.faqs.length > 0 && (
        <GamingAnimationFaqSection faqs={d.faqs} />
      )}

      <GamingAnimationBridgeSection headline={d.bridgeHeadline} text={d.bridgeText} />

      <section className="bg-black-base py-[100px]">
        <div className="max-w-[700px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
          <h2 className="font-display font-medium text-[42px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-4">
            {d.ctaHeadline}
          </h2>
          <p className="font-body font-normal text-[16px] text-sage-mid mb-8 max-w-[500px] mx-auto">
            {d.ctaSubtext}
          </p>
          <Button variant="hero-cta" href="/contact">
            {d.ctaLabel}
          </Button>
        </div>
      </section>
    </>
  )
}
