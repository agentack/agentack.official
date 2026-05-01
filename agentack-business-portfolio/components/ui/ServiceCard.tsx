'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from './Badge'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
  href: string
  timeline?: string
}

export function ServiceCard({ icon, title, description, outcomes, href, timeline }: ServiceCardProps) {
  return (
    <div className="bg-surface-dark border border-border-dark rounded-card p-6 hover:border-sage-dark transition-all duration-150 group">
      {timeline && (
        <div className="flex justify-end mb-2">
          <Badge variant="sage" size="sm">{timeline}</Badge>
        </div>
      )}

      <div className="w-8 h-8 rounded-btn-hero bg-[rgba(0,229,204,0.1)] flex items-center justify-center text-teal-primary">
        {icon}
      </div>

      <h3 className="font-body font-medium text-[16px] text-frost-white mt-3">
        {title}
      </h3>

      <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
        {description}
      </p>

      <ul className="mt-4 space-y-2">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-primary mt-1.5 flex-shrink-0" />
            <span className="font-body font-normal text-[12px] text-sage-mid">{outcome}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center gap-1 text-teal-primary font-medium text-[12px] border-b border-[rgba(0,229,204,0.4)] pb-[1px] mt-5 group-hover:text-[#00FFE5] group-hover:border-[rgba(0,255,229,0.6)] transition-colors"
      >
        Learn more
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  )
}
