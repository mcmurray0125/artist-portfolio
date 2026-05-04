import client from './sanityClient.js'

export const handler = async function () {
  try {
    const artworks = await client.fetch('*[_type == "artwork"]')
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artworks),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    }
  }
}
