'use client'

import { motion } from 'framer-motion'

interface LogoStripProps {
  logos: Array<{ name: string; logo?: string }>
  label?: string
  speed?: number
}

export function LogoStrip({ logos, label, speed = 30 }: LogoStripProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="text-center font-body font-medium text-[10px] uppercase tracking-[0.08em] text-sage-dark mb-5">
          {label}
        </div>
      )}

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-black-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-black-base to-transparent z-10" />

        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50] }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'linear',
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 font-mono font-medium text-[11px] text-sage-light bg-[#1A2A1A] border border-[#2A4A2A] rounded-btn-hero px-3 py-1.5 opacity-[0.45]"
            >
              {logo.logo || logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
