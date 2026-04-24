import test from 'node:test'
import assert from 'node:assert/strict'

test('supabase config module loads without Vite env vars', async () => {
  await assert.doesNotReject(import('../src/lib/supabase.js'))
})
