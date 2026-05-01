interface MissionHeroSectionProps {
  heading?: string
  subtitle?: string
}

export function MissionHeroSection({
  heading = 'About Us',
  subtitle = "We believe most business processes shouldn't require humans. Our mission is to automate the mundane so your team can focus on what truly matters.",
}: MissionHeroSectionProps) {
  return (
    <section className="bg-black-base pt-[140px] pb-[80px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h1 className="font-display font-medium text-[52px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6">
          {heading}
        </h1>
        <p className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
