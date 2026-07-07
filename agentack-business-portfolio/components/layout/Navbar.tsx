'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { client } from '@/sanity/lib/client'
import { servicesQuery, icpsQuery } from '@/lib/sanity/queries'

interface NavService {
  _id: string
  name: string
  tagline: string
  slug: { current: string }
}

interface NavIcp {
  _id: string
  name: string
  tagline: string
  slug: { current: string }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [services, setServices] = useState<NavService[]>([])
  const [icps, setIcps] = useState<NavIcp[]>([])
  const isMobile = useMediaQuery('(max-width: 767px)')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    client.fetch<NavService[]>(servicesQuery).then(setServices)
    client.fetch<NavIcp[]>(icpsQuery).then(setIcps)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`
        sticky top-0 z-50 h-16 bg-black-base transition-all duration-150
        ${isScrolled ? 'backdrop-blur-md border-b border-[#1A1A1A]' : ''}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] h-full flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-green-primary font-display font-medium text-xl hover:opacity-80 transition-opacity"
          aria-label="Agentack Home"
        >
          Agentack
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              className="text-sage-mid text-[12px] font-normal hover:text-frost-white flex items-center gap-1 transition-colors"
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  isServicesDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isServicesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-[#0D1A0D] border border-[#1E3020] rounded-lg py-4 min-w-[500px] shadow-lg"
                role="menu"
              >
                <div className="grid grid-cols-2 gap-4 px-4">
                  {/* Services Column */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7068] font-medium mb-2 px-3">
                      Services
                    </p>
                    {services.map((service) => (
                      <Link
                        key={service._id}
                        href={`/services/${service.slug.current}`}
                        className="block px-3 py-2 rounded-md hover:bg-[rgba(0,255,136,0.05)] hover:text-green-primary transition-colors"
                        role="menuitem"
                      >
                        <div className="text-[12px] text-frost-white font-medium">
                          {service.name}
                        </div>
                        {/* <div className="text-[11px] text-[#5A7068]">
                          {service.tagline}
                        </div> */}
                      </Link>
                    ))}
                  </div>

                  {/* Who We Work With Column */}
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#5A7068] font-medium mb-2 px-3">
                      Who We Work With
                    </p>
                    {icps.map((icp) => (
                      <Link
                        key={icp._id}
                        href={`/who-we-work-with/${icp.slug.current}`}
                        className="block px-3 py-2 rounded-md hover:bg-[rgba(0,255,136,0.05)] hover:text-green-primary transition-colors"
                        role="menuitem"
                      >
                        <div className="text-[12px] text-frost-white font-medium">
                          {icp.name}
                        </div>
                        {/* {icp.tagline && (
                          <div className="text-[11px] text-[#5A7068]">
                            {icp.tagline}
                          </div>
                        )} */}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="text-sage-mid text-[12px] font-normal hover:text-frost-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sage-mid text-[12px] font-normal hover:text-frost-white transition-colors"
          >
            Contact
          </Link>

          {/* Navbar CTA */}
          <Button variant="navbar-cta" href="/contact">
            Book a call
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-frost-white p-2 hover:bg-[#1A1A1A] rounded-btn-nav transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full bg-black-base border-b border-[#1A1A1A] py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-200"
          role="menu"
        >
          <Link
            href="/services"
            className="text-frost-white text-[14px] hover:text-green-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-frost-white text-[14px] hover:text-green-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-frost-white text-[14px] hover:text-green-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button
            variant="hero-cta"
            href="/contact"
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a call
          </Button>
        </div>
      )}
    </nav>
  )
}
