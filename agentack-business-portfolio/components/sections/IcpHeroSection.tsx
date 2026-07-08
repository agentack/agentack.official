'use client'

import { useLanguage } from '@/lib/i18n/context'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'

interface IcpHeroSectionProps {
  name: string
  headline: string
  subtitle: string
}

export function IcpHeroSection({ name, headline, subtitle }: IcpHeroSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="relative pt-[140px] pb-[80px] bg-gradient-to-br from-black-base via-[#001A0D] to-black-base">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-teal-primary text-[12px] font-medium mb-4 hover:text-[#00FFE5] transition-colors"
        >
          {t.sections.icpHero.allServices}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Badge variant="green" className="mb-4">
            {name}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[52px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6"
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
