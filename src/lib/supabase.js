import { createClient } from '@supabase/supabase-js'
import {
  PUBLIC_FUNCTIONS_URL,
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
  getPublicEnvValue,
} from './publicConfig.js'

const supabaseUrl = getPublicEnvValue('VITE_SUPABASE_URL', PUBLIC_SUPABASE_URL)
const supabaseAnonKey = getPublicEnvValue('VITE_SUPABASE_ANON_KEY', PUBLIC_SUPABASE_ANON_KEY)

if (supabaseUrl === PUBLIC_SUPABASE_URL && supabaseAnonKey === PUBLIC_SUPABASE_ANON_KEY) {
  console.info('[supabase] Using committed public config fallback for static deploy')
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
})

export const FUNCTIONS_URL = getPublicEnvValue('VITE_SUPABASE_FUNCTIONS_URL', PUBLIC_FUNCTIONS_URL)

export async function callFunction(name, body) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) throw new Error('Not signed in')

  const res = await fetch(`${FUNCTIONS_URL}/${name}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session.access_token}`,
      'Content-Type': 'application/json',
      'apikey': supabaseAnonKey,
    },
    body: JSON.stringify(body ?? {}),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data?.error ?? `Request failed (${res.status})`)
  return data
}
