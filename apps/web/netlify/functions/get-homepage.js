import client from './sanityClient.js'

export const handler = async function () {
  try {
    const homepage = await client.fetch('*[_type == "homepage"] { ..., "featuredArtworks": featuredArtworks[]-> }')
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(homepage),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    }
  }
}
