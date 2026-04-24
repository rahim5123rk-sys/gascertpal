const env = typeof import.meta !== 'undefined' ? (import.meta.env ?? {}) : {}

export const TEAM_PLANS = [
  { id: 'duo', seats: 1, name: 'Single', monthly: '£10' },
  { id: 'team', seats: 3, name: 'Team', monthly: '£30' },
  { id: 'crew', seats: 5, name: 'Crew', monthly: '£45' },
  { id: 'fleet', seats: 10, name: 'Fleet', monthly: '£90' },
]

const MONTHLY_PRICE_IDS = {
  duo: env.VITE_STRIPE_PRICE_DUO_MONTHLY,
  team: env.VITE_STRIPE_PRICE_TEAM_MONTHLY,
  crew: env.VITE_STRIPE_PRICE_CREW_MONTHLY,
  fleet: env.VITE_STRIPE_PRICE_FLEET_MONTHLY,
}

export function getMonthlyPriceId(tierId, source = env) {
  const monthlyPriceIds = {
    duo: source.VITE_STRIPE_PRICE_DUO_MONTHLY,
    team: source.VITE_STRIPE_PRICE_TEAM_MONTHLY,
    crew: source.VITE_STRIPE_PRICE_CREW_MONTHLY,
    fleet: source.VITE_STRIPE_PRICE_FLEET_MONTHLY,
  }

  return monthlyPriceIds[tierId]
}

export { MONTHLY_PRICE_IDS }