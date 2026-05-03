import {createClient} from '@sanity/client'

export const client = createClient({
  // To do: use env variables
  projectId: '7w09x003',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2026-03-14', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  token: import.meta.env.VITE_SANITY_API_TOKEN
})

export async function getHomepage() {
  const homepage = await client.fetch('*[_type == "homepage"] { ..., "featuredArtworks": featuredArtworks[]-> }')
  return homepage
}

export async function getArtworks() {
  const artworks = await client.fetch('*[_type == "artwork"]')
  return artworks
}

export async function getArtworkBySlug(slug) {
  const artwork = await client.fetch('*[_type == "artwork" && slug.current == $slug]', { slug })
  return artwork[0]
}
