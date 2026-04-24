import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const filePath = new URL('../src/pages/Team.jsx', import.meta.url)

test('team page uses explicit dark text styles inside white cards', async () => {
  const source = await readFile(filePath, 'utf8')
  assert.match(source, /text-neutral-900|text-neutral-800/)
  assert.match(source, /placeholder:text-neutral-400/)
})

test('team sign-in uses login-only OTP flow and canonical web redirect', async () => {
  const source = await readFile(filePath, 'utf8')
  assert.match(source, /shouldCreateUser:\s*false/)
  assert.match(source, /https:\/\/gaspilotapp\.com\/team|TEAM_WEB_URL/)
})
