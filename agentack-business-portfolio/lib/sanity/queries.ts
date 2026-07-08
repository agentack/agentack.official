export const siteSettingsQuery = `*[_type == "siteSettings"][0]`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  outcomes,
  timeline,
  order
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  heroHeadline,
  heroSubtitle,
  outcomes,
  features,
  whoIsItFor,
  toolsUsed,
  timeline,
  seoTitle,
  seoDescription
}`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  photo,
  linkedinUrl
}`

export const faqsByPageQuery = `*[_type == "faq" && page == $page] | order(order asc) {
  question,
  answer
}`

export const icpsQuery = `*[_type == "icp"] | order(order asc) {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  order
}`

export const gamingAnimationQuery = `*[_type == "gamingAnimation"][0] {
  name,
  heroHeadline,
  heroSubtitle,
  heroPrimaryCta,
  heroSecondaryCta,
  services,
  industries,
  toolsTitle,
  toolGroups,
  processTitle,
  processSteps,
  whyTitle,
  whyItems,
  faqs,
  bridgeHeadline,
  bridgeText,
  ctaHeadline,
  ctaSubtext,
  ctaLabel
}`

export const icpBySlugQuery = `*[_type == "icp" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  heroHeadline,
  heroSubtitle,
  painPoints,
  whatWeSolve,
  outcomes
}`
