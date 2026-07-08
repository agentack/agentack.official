'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface GamingAnimationBridgeSectionProps {
  headline: string
  text: string
}

export function GamingAnimationBridgeSection({ headline, text }: GamingAnimationBridgeSectionProps) {
  return (
    <section className="bg-[#001A0D] py-[60px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] uppercase tracking-widest text-green-primary font-medium mb-3">
            {headline}
          </p>
          <p className="text-[15px] text-sage-mid leading-[1.7] font-body">
            {text}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[13px] text-teal-primary font-medium mt-4 hover:text-[#00FFE5] transition-colors border-b border-[rgba(0,229,204,0.3)] pb-[2px]"
          >
            Explore AI services
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
