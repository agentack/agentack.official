'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Check } from 'lucide-react'

interface GamingAnimationWhySectionProps {
  title: string
  items: string[]
}

export function GamingAnimationWhySection({ title, items }: GamingAnimationWhySectionProps) {
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Why Agentack"
          heading={title}
          align="center"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-surface-dark border border-border-dark rounded-card p-5"
            >
              <Check className="w-4 h-4 text-green-primary mt-0.5 shrink-0" />
              <span className="text-[14px] text-sage-mid leading-[1.6]">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
