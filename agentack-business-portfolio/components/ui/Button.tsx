'use client'

import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'hero-cta' | 'ghost-paired' | 'navbar-cta' | 'section-cta' | 'form-submit' | 'card-link' | 'text-link'
  isLoading?: boolean
  children: React.ReactNode
  href?: string
  className?: string
}

const variantStyles = {
  'hero-cta': 'bg-green-primary text-green-dark font-medium text-[15px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero hover:bg-green-hover active:scale-[0.98] disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:cursor-not-allowed transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'ghost-paired': 'bg-transparent text-sage-light font-medium text-[15px] px-[32px] py-[14px] rounded-btn-hero border border-sage-dark hover:border-sage-mid hover:text-frost-white active:scale-[0.98] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'navbar-cta': 'bg-green-primary text-green-dark font-medium text-[12px] tracking-[0.01em] px-[16px] py-[7px] rounded-btn-nav hover:bg-green-hover transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'section-cta': 'bg-transparent text-green-primary font-medium text-[14px] tracking-[0.01em] px-[30px] py-[13px] rounded-btn-hero border border-[rgba(0,255,136,0.35)] hover:bg-[rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.6)] active:scale-[0.98] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'form-submit': 'bg-green-primary text-green-dark font-medium text-[14px] tracking-[0.01em] px-[13px] py-[13px] rounded-btn-form w-full hover:bg-green-hover disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'card-link': 'bg-transparent text-teal-primary font-medium text-[12px] border-b border-[rgba(0,229,204,0.4)] pb-[1px] hover:text-[#00FFE5] hover:border-[rgba(0,255,229,0.6)] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'text-link': 'bg-transparent text-[#5A7068] font-normal text-[12px] underline underline-offset-[3px] decoration-[rgba(90,112,104,0.4)] inline-flex items-center justify-center gap-2',
}

const dangerTextLinkStyle = 'bg-transparent text-red-danger font-normal text-[12px] underline underline-offset-[3px] decoration-[rgba(163,45,45,0.4)] inline-flex items-center justify-center gap-2'

export function Button({ variant, isLoading, children, href, className, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || isLoading
  const baseClasses = cn(
    variantStyles[variant],
    isDisabled && 'cursor-not-allowed',
    className
  )

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </>
  )

  // Render as anchor tag if href is provided (except for card-link and text-link which have special handling)
  if (href && variant !== 'text-link' && variant !== 'card-link') {
    return (
      <Link href={href} className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    )
  }

  // Render as anchor tag for card-link and text-link variants (without isLoading spinner)
  if (href && (variant === 'text-link' || variant === 'card-link')) {
    return (
      <Link href={href} className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} disabled={isDisabled} {...props}>
      {content}
    </button>
  )
}

// Danger variant for text-link (destructive actions like Cancel, Delete)
export function DangerTextLink({ children, href, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  const classes = cn(dangerTextLinkStyle, className)

  if (href) {
    return (
      <Link href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  )
}
