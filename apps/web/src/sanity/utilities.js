import { client } from './client'
import {createImageUrlBuilder} from '@sanity/image-url'

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
    console.log('image', source)
  return builder.image(source)
}
