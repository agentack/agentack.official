'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface GamingAnimationHeroSectionProps {
  headline: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
}

export function GamingAnimationHeroSection({ headline, subtitle, primaryCta, secondaryCta }: GamingAnimationHeroSectionProps) {
  return (
    <section className="relative pt-[140px] pb-[100px] bg-gradient-to-br from-black-base via-[#001A0D] to-black-base overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="green" className="mb-4">
            Gaming &amp; Animation
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[52px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6 max-w-[800px]"
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[600px] mb-10"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="hero-cta" href="/contact">
            {primaryCta || 'Discuss Your Project'}
          </Button>
          <Button variant="ghost-paired" href="#services">
            {secondaryCta || 'View Our Work'}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
