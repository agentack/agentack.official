'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { motion } from 'framer-motion'
import { Search, FileText, Clock } from 'lucide-react'

const FEATURES = [
  {
    icon: <Search className="w-4 h-4" />,
    title: 'Audit First',
    description: "We never automate a broken process. First we redesign, then we automate.",
    accent: 'teal' as const,
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: 'Documentation Included',
    description: 'Every build ships with comprehensive documentation your team can actually use.',
    accent: 'teal' as const,
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: 'Async-First Delivery',
    description: "We fit your schedule, not ours. No forced meetings, no sales pressure.",
    accent: 'teal' as const,
  },
]

export function OurApproachSection() {
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Our Approach"
          heading="How We're Different"
          subtitle="We don't just build automation. We redesign your workflows from the ground up."
          align="left"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accent={feature.accent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
