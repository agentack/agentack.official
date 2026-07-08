'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ToolGroup {
  groupName: string
  tools: string[]
}

interface GamingAnimationToolsSectionProps {
  title: string
  groups: ToolGroup[]
}

export function GamingAnimationToolsSection({ title, groups }: GamingAnimationToolsSectionProps) {
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Tools & Technologies"
          heading={title}
          align="center"
        />
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface-dark border border-border-dark rounded-card p-5"
            >
              <p className="text-[10px] uppercase tracking-widest text-green-primary font-medium mb-3">
                {group.groupName}
              </p>
              <ul className="space-y-2">
                {group.tools.map((tool, j) => (
                  <li key={j} className="text-[13px] text-sage-mid">
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
