import { client } from './sanityClient.js'

export const handler = async function (event) {
  const slug = event.queryStringParameters?.slug

  if (!slug) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing slug parameter' }),
    }
  }

  try {
    const artwork = await client.fetch(
      '*[_type == "artwork" && slug.current == $slug]',
      { slug }
    )

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artwork),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message }),
    }
  }
}
