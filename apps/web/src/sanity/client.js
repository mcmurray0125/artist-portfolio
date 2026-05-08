async function getJsonFromFunction(url) {
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Netlify function request failed: ${res.status} ${body}`)
  }
  return res.json();
}

export async function getHomepage() {
  return getJsonFromFunction('/.netlify/functions/get-homepage')
}

export async function getAbout() {
  return getJsonFromFunction('/.netlify/functions/get-about')
}

export async function getArtworks() {
  return getJsonFromFunction('/.netlify/functions/get-artworks')
}

export async function getArtworkBySlug(slug) {
  return getJsonFromFunction(`/.netlify/functions/get-artwork-by-slug?slug=${encodeURIComponent(slug)}`)
}
