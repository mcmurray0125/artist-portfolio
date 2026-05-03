const client = require('./sanityClient')

exports.handler = async function () {
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
