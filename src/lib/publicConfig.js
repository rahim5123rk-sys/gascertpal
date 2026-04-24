const viteEnv = (typeof import.meta !== 'undefined' && import.meta.env)
  ? import.meta.env
  : {}

export const PUBLIC_SUPABASE_URL = 'https://fmgppkuldqjgjivkqxce.supabase.co'
export const PUBLIC_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZ3Bwa3VsZHFqZ2ppdmtxeGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NTIyNzcsImV4cCI6MjA4NzUyODI3N30.H9oBtogf1WN4a5DPXDsNQO0_J7qoC3A6AMllWwzO6sY'
export const PUBLIC_FUNCTIONS_URL = 'https://fmgppkuldqjgjivkqxce.functions.supabase.co'

export const PUBLIC_MONTHLY_PRICE_IDS = {
  duo: 'price_1TPkCn2eWOUK2niI3uVgkGYf',
  team: 'price_1TPkEW2eWOUK2niIyXP9OGmr',
  crew: 'price_1TPkGJ2eWOUK2niImWPOHnV9',
  fleet: 'price_1TPkHE2eWOUK2niIoo1bxkdD',
}

export function getPublicEnvValue(key, fallback) {
  return viteEnv[key] ?? fallback
}
