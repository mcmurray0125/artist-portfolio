import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '7w09x003',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2026-03-14',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})
