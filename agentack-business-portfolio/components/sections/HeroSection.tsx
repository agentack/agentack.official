'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  eyebrow: string
  headline: string
  subtitle: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
}

export function HeroSection({
  eyebrow,
  headline,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-[160px] pb-[120px] bg-gradient-to-br from-black-base via-[#001A0D] to-[#003320]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Badge variant="green" className="rounded-pill mb-4">
            {eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[64px] leading-[1.1] tracking-[-0.02em] text-frost-white mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button variant="hero-cta" href="/contact">
            {primaryCtaLabel}
          </Button>
          <Button variant="ghost-paired" href="/services">
            {secondaryCtaLabel}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-sage-dark animate-bounce" />
      </motion.div>
    </section>
  )
}
