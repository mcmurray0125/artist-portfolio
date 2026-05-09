import {defineType, defineField} from 'sanity'

export const artwork = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: {
              previews: [
                {title: '3:4', aspectRatio: 3 / 4},
                {title: 'Square', aspectRatio: 1 / 1},
                {title: '4:5', aspectRatio: 4 / 5},
                {title: '16:9', aspectRatio: 16 / 9},
              ]
            }
          },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
            })
          ]
        }
      ]
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number'
    }),

    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string'
    }),

    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'Example: 24 × 36 inches'
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),

    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean'
    }),

    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean'
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0.asset'
    }
  }
})
