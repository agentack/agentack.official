import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

const FOOTER_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer
      className="bg-black-3 border-t border-[#1A1A1A] py-12"
      role="contentinfo"
    >
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1: Logo + Tagline */}
          <div>
            <Link
              href="/"
              className="text-green-primary font-display font-medium text-xl mb-3 inline-block hover:opacity-80 transition-opacity"
              aria-label="Agentack Home"
            >
              Agentack
            </Link>
            <p className="text-[#5A7068] text-[13px] leading-relaxed">
              We build custom AI automation systems for mid-size businesses.
            </p>
          </div>

          {/* Col 2: Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sage-mid text-[12px] hover:text-frost-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: LinkedIn */}
          <div>
            <a
              href="https://linkedin.com/company/agentack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-mid hover:text-frost-white transition-colors inline-flex items-center gap-2"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-[12px]">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage-dark text-[11px]">
            © {CURRENT_YEAR} Agentack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sage-dark text-[11px] hover:text-sage-mid transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sage-dark text-[11px] hover:text-sage-mid transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
