interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'green' | 'teal'
}

export function FeatureCard({ icon, title, description, accent = 'teal' }: FeatureCardProps) {
  const iconBg = accent === 'green'
    ? 'bg-[rgba(0,255,136,0.1)]'
    : 'bg-[rgba(0,229,204,0.1)]'
  const iconColor = accent === 'green' ? 'text-green-primary' : 'text-teal-primary'

  return (
    <div className="bg-surface-dark border border-border-dark rounded-card p-6">
      <div className={`w-7 h-7 rounded-btn-hero ${iconBg} flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <h3 className="font-body font-medium text-[14px] text-frost-white mt-3">
        {title}
      </h3>
      <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
        {description}
      </p>
    </div>
  )
}
