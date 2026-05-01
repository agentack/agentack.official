interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

export function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-surface-dark border border-border-dark border-l-2 border-l-green-primary rounded-r-card p-6 relative">
      <div className="font-display text-[48px] text-green-primary opacity-30 absolute top-4 left-4">
        "
      </div>

      <p className="font-body font-normal text-[15px] leading-[1.7] text-sage-light italic relative z-10">
        {quote}
      </p>

      <div className="mt-4">
        <div className="font-body font-medium text-[13px] text-frost-white">
          {name}
        </div>
        <div className="font-body font-normal text-[12px] text-[#5A7068]">
          {role}, {company}
        </div>
      </div>
    </div>
  )
}
