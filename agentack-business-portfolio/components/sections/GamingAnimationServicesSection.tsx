'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface GamingService {
  title: string
  description: string
  icon?: string
  items?: string[]
}

interface GamingAnimationServicesSectionProps {
  services: GamingService[]
}

function renderIcon(iconName?: string) {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

export function GamingAnimationServicesSection({ services }: GamingAnimationServicesSectionProps) {
  return (
    <section id="services" className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Services"
          heading="What We Build"
          subtitle="From concept to launch — we deliver production-ready games, animations, and interactive experiences."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-dark border border-border-dark rounded-card p-6 hover:border-sage-dark transition-all duration-150"
            >
              <div className="w-10 h-10 rounded-btn-hero bg-[rgba(0,229,204,0.1)] flex items-center justify-center text-teal-primary mb-4">
                {renderIcon(service.icon)}
              </div>

              <h3 className="font-body font-medium text-[18px] text-frost-white mb-2">
                {service.title}
              </h3>

              <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mb-4">
                {service.description}
              </p>

              {service.items && service.items.length > 0 && (
                <ul className="space-y-1.5">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-green-primary mt-2 shrink-0" />
                      <span className="font-body font-normal text-[12px] text-sage-mid">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
