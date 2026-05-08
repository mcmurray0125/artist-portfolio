import { defineType, defineField } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }),

    defineField({
      name: 'backdropImage',
      title: 'Backdrop Image',
      type: 'image',
      description: 'This image will be used as a backdrop on the about page. It will be placed behind the Bio text content.'
    })
  ]
})
