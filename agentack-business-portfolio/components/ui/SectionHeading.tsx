import { cn } from '@/lib/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, heading, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <div className="text-teal-primary font-medium text-[11px] uppercase tracking-[0.08em] mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display font-medium text-[42px] leading-[1.2] tracking-[-0.01em] text-frost-white mb-4">
        {heading}
      </h2>
      {subtitle && (
        <p className={cn(
          'font-body font-normal text-[16px] leading-[1.7] text-sage-mid',
          align === 'center' ? 'mx-auto' : ''
        )} style={{ maxWidth: align === 'center' ? '560px' : 'none' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
