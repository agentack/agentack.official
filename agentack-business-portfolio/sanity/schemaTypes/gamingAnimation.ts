import { defineField, defineType } from 'sanity'

export const gamingAnimation = defineType({
  name: 'gamingAnimation',
  title: 'Gaming & Animation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Page Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // ── Hero ──
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroPrimaryCta',
      title: 'Hero Primary CTA',
      type: 'string',
      initialValue: 'Discuss Your Project',
    }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Hero Secondary CTA',
      type: 'string',
      initialValue: 'View Our Work',
    }),
    // ── Services ──
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
          defineField({ name: 'icon', type: 'string', description: 'Lucide icon name (Gamepad2, Palette, Box, Shirt, Video, etc.)' }),
          defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
        ],
      }],
    }),
    // ── Industries ──
    defineField({
      name: 'industries',
      title: 'Industries We Serve',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    // ── Tools ──
    defineField({
      name: 'toolsTitle',
      title: 'Tools Section Title',
      type: 'string',
      initialValue: 'Technologies & Creative Tools',
    }),
    defineField({
      name: 'toolGroups',
      title: 'Tool Groups',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'groupName', type: 'string' }),
          defineField({ name: 'tools', type: 'array', of: [{ type: 'string' }] }),
        ],
      }],
    }),
    // ── Process ──
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
      initialValue: 'Our Development Process',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    // ── Why Choose ──
    defineField({
      name: 'whyTitle',
      title: 'Why Choose Section Title',
      type: 'string',
      initialValue: 'Why Choose Agentack',
    }),
    defineField({
      name: 'whyItems',
      title: 'Why Choose Items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    // ── FAQ ──
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', type: 'string' }),
          defineField({ name: 'answer', type: 'text', rows: 3 }),
        ],
      }],
    }),
    // ── Bridge ──
    defineField({
      name: 'bridgeHeadline',
      title: 'Bridge Headline (AI link)',
      type: 'string',
      initialValue: 'Looking for AI instead?',
    }),
    defineField({
      name: 'bridgeText',
      title: 'Bridge Text',
      type: 'text',
      rows: 2,
    }),
    // ── CTA ──
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      initialValue: 'Have a game or animation project in mind?',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Start Your Project',
    }),
  ],
})
