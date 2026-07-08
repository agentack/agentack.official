'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface GamingAnimationIndustriesSectionProps {
  industries: string[]
}

export function GamingAnimationIndustriesSection({ industries }: GamingAnimationIndustriesSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Who We Serve"
          heading="Industries We Work With"
          align="center"
        />
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
        >
          {industries.map((industry, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-surface-dark border border-border-dark rounded-pill px-5 py-2.5 text-[13px] text-sage-mid font-medium hover:border-green-primary/30 hover:text-green-primary transition-colors"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
