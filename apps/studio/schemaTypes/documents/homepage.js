import {defineType, defineField} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [

    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    }),

    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text'
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    }),

    defineField({
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [{ type: 'image', options: {hotspot: true} }]
    }),

    defineField({
      name: 'featuredArtworks',
      title: 'Featured Artworks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'artwork'}]
        }
      ]
    })

  ]
})
