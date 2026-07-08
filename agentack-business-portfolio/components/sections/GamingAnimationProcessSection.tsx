'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface GamingAnimationProcessSectionProps {
  title: string
  steps: string[]
}

export function GamingAnimationProcessSection({ title, steps }: GamingAnimationProcessSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Process"
          heading={title}
          align="center"
        />
        <motion.div
          className="mt-12 space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-primary/10 border border-green-primary/20 flex items-center justify-center">
                  <span className="text-[12px] font-display font-medium text-green-primary">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-border-dark" />
                )}
              </div>
              <div className={`pb-${i < steps.length - 1 ? '8' : '0'}`}>
                <p className="text-[15px] text-frost-white font-medium">{step}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
