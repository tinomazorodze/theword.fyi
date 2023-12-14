import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'A short name resembles the article'
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    {
      name: 'seo',
      type: 'object',
      title: 'SEO',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.max(70).warning('Longer titles may be truncated by search engines'),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: (Rule) =>
            Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          description: 'Image should have a minimum of 1280x720 pixels (16:9)',
          options: {
            hotspot: true,
          },
        },
      ]
    },
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      date: '_updatedAt',
      media: 'seo.image',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
