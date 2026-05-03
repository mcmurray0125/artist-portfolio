import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder({
  projectId: '7w09x003',
  dataset: 'production',
})

export function urlFor(source) {
  return builder.image(source)
}
