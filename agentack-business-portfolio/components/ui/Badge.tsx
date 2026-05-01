'use client'

import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  variant: 'green' | 'teal' | 'sage' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export function Badge({ variant, size = 'md', dot, children, className }: BadgeProps) {
  const variantStyles = {
    green: 'bg-[rgba(0,255,136,0.12)] text-[#00C46A] border-[rgba(0,255,136,0.25)]',
    teal: 'bg-[rgba(0,229,204,0.1)] text-teal-primary border-[rgba(0,229,204,0.2)]',
    sage: 'bg-[rgba(58,74,66,0.4)] text-sage-light border-sage-dark',
    outline: 'bg-transparent text-sage-mid border-sage-dark',
  }

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-[12px] px-3 py-1',
  }

  const dotColors = {
    green: 'bg-[#00C46A]',
    teal: 'bg-teal-primary',
    sage: 'bg-sage-light',
    outline: 'bg-sage-mid',
  }

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 border rounded-badge',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}>
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full',
          dotColors[variant]
        )} />
      )}
      {children}
    </span>
  )
}
