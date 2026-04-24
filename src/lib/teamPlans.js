import { PUBLIC_MONTHLY_PRICE_IDS, getPublicEnvValue } from './publicConfig.js'

export const TEAM_PLANS = [
  { id: 'duo', seats: 1, name: 'Single', monthly: '£10' },
  { id: 'team', seats: 3, name: 'Team', monthly: '£30' },
  { id: 'crew', seats: 5, name: 'Crew', monthly: '£45' },
  { id: 'fleet', seats: 10, name: 'Fleet', monthly: '£90' },
]

const MONTHLY_PRICE_IDS = {
  duo: getPublicEnvValue('VITE_STRIPE_PRICE_DUO_MONTHLY', PUBLIC_MONTHLY_PRICE_IDS.duo),
  team: getPublicEnvValue('VITE_STRIPE_PRICE_TEAM_MONTHLY', PUBLIC_MONTHLY_PRICE_IDS.team),
  crew: getPublicEnvValue('VITE_STRIPE_PRICE_CREW_MONTHLY', PUBLIC_MONTHLY_PRICE_IDS.crew),
  fleet: getPublicEnvValue('VITE_STRIPE_PRICE_FLEET_MONTHLY', PUBLIC_MONTHLY_PRICE_IDS.fleet),
}

export function getMonthlyPriceId(tierId, source = MONTHLY_PRICE_IDS) {
  const monthlyPriceIds = {
    duo: source.VITE_STRIPE_PRICE_DUO_MONTHLY ?? source.duo ?? MONTHLY_PRICE_IDS.duo,
    team: source.VITE_STRIPE_PRICE_TEAM_MONTHLY ?? source.team ?? MONTHLY_PRICE_IDS.team,
    crew: source.VITE_STRIPE_PRICE_CREW_MONTHLY ?? source.crew ?? MONTHLY_PRICE_IDS.crew,
    fleet: source.VITE_STRIPE_PRICE_FLEET_MONTHLY ?? source.fleet ?? MONTHLY_PRICE_IDS.fleet,
  }

  return monthlyPriceIds[tierId]
}

export { MONTHLY_PRICE_IDS }