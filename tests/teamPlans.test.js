import test from 'node:test'
import assert from 'node:assert/strict'

import { TEAM_PLANS, getMonthlyPriceId } from '../src/lib/teamPlans.js'

test('team plans expose four monthly-only add-on tiers', () => {
  assert.deepEqual(
    TEAM_PLANS.map(({ id, name, seats, monthly }) => ({ id, name, seats, monthly })),
    [
      { id: 'duo', name: 'Single', seats: 1, monthly: '£10' },
      { id: 'team', name: 'Team', seats: 3, monthly: '£30' },
      { id: 'crew', name: 'Crew', seats: 5, monthly: '£45' },
      { id: 'fleet', name: 'Fleet', seats: 10, monthly: '£90' },
    ],
  )

  for (const plan of TEAM_PLANS) {
    assert.equal('annual' in plan, false)
  }
})

test('monthly price id lookup only uses monthly env vars', () => {
  const env = {
    VITE_STRIPE_PRICE_DUO_MONTHLY: 'price_single',
    VITE_STRIPE_PRICE_TEAM_MONTHLY: 'price_team',
    VITE_STRIPE_PRICE_CREW_MONTHLY: 'price_crew',
    VITE_STRIPE_PRICE_FLEET_MONTHLY: 'price_fleet',
    VITE_STRIPE_PRICE_DUO_ANNUAL: 'should_not_be_used',
  }

  assert.equal(getMonthlyPriceId('duo', env), 'price_single')
  assert.equal(getMonthlyPriceId('team', env), 'price_team')
  assert.equal(getMonthlyPriceId('crew', env), 'price_crew')
  assert.equal(getMonthlyPriceId('fleet', env), 'price_fleet')
  assert.equal(getMonthlyPriceId('missing', env), undefined)
})
