# Sanity Schemas — Agentack Business Portfolio

---

## 1. `siteSettings` (Singleton — only 1 document)

**Group: General**
- `agencyName` (string, required) — e.g. "Agentack"
- `tagline` (string) — short description
- `linkedinUrl` (url) — company LinkedIn
- `contactEmail` (email)

**Group: Homepage Content**
- `heroHeadline` (string, required) — main H1
- `heroSubtitle` (text) — subtitle below headline
- `heroPrimaryCtaLabel` (string, default: "Book a free strategy call")
- `heroSecondaryCtaLabel` (string, default: "View our services")
- `problemStatement` (text) — problem section body text
- `problemPainPoints` (array of strings) — bullet list of pain points
- `processSteps` (array of objects) — each `{ step: number, title: string, description: text }`
- `stats` (array of objects) — each `{ value: number, suffix: string, prefix: string, label: string, duration: number }`
- `differentiators` (array of objects) — each `{ title: string, description: text, icon: string }`
- `finalCtaHeadline` (string)
- `finalCtaSubtext` (text)
- `finalCtaMicroText` (string) — small text below CTA button

**Group: Contact & Booking**
- `calLink` (url) — Cal.com booking URL override

**Group: SEO**
- `seoDefaultTitle` (string)
- `seoDefaultDescription` (text)

---

## 2. `service` (Create one per service)

- `name` (string, required) — e.g. "Workflow Automation"
- `slug` (slug, required) — auto-generated from name
- `tagline` (string, required) — short one-liner
- `description` (text) — longer summary
- `icon` (string) — Lucide icon name, e.g. "Workflow", "Bot", "BarChart2"
- `heroHeadline` (string, required) — page H1
- `heroSubtitle` (string)
- `outcomes` (array of strings) — "What you get" bullets
- `features` (array of objects) — each `{ title: string, description: text, icon: string }`
- `whoIsItFor` (array of strings) — ideal client roles/industries
- `toolsUsed` (array of strings) — e.g. ["Make.com", "OpenAI", "Zapier"]
- `timeline` (string) — e.g. "4-6 weeks"
- `seoTitle` (string, max 60)
- `seoDescription` (text, max 160)
- `order` (number) — sort priority

---

## 3. `teamMember` (Create one per person)

- `name` (string, required)
- `role` (string) — e.g. "Founder & Lead Engineer"
- `bio` (text, max 300 chars)
- `photo` (image, with hotspot)
- `linkedinUrl` (url)
- `order` (number) — sort priority

---

## 4. `faq` (Create Q&As for services/contact/general pages)

- `question` (string, required)
- `answer` (text)
- `page` (string) — pick from: `services`, `contact`, `general`
- `order` (number) — sort priority
