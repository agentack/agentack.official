'use client'

import { useLanguage } from '@/lib/i18n/context'

interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export function StepCard({ step, title, description, isLast }: StepCardProps) {
  const { t } = useLanguage()
  return (
    <div className="relative">
      <div className="border-l-2 border-green-primary rounded-r-lg bg-transparent px-5 py-4">
        <div className="font-mono font-normal text-[11px] text-sage-dark">
          {t.ui.step} {step}
        </div>
        <h3 className="font-body font-medium text-[15px] text-frost-white mt-1">
          {title}
        </h3>
        <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="absolute top-1/2 left-full w-8 border-t border-dashed border-[#1E2E26] hidden lg:block" />
      )}
    </div>
  )
}
