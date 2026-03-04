import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'Danny R.',
    role: 'Gas Engineer, Manchester',
    avatar: 'DR',
    rating: 5,
    text: "Been using GasCertPal for 6 months. I save at least an hour every day. My customers love getting their CP12 by email on the spot — no more posting certificates.",
  },
  {
    name: 'Steve K.',
    role: 'Self-Employed Engineer, London',
    avatar: 'SK',
    rating: 5,
    text: "Dead simple to use. Took me 5 minutes to set up and I was generating proper certificates immediately. The invoice feature alone has saved me hours every week.",
  },
  {
    name: 'Mike T.',
    role: 'Heating Engineer, Birmingham',
    avatar: 'MT',
    rating: 5,
    text: "I was sceptical at first but GasCertPal is genuinely brilliant. Everything is in one place, looks professional, and works offline which is essential on site.",
  },
  {
    name: 'Raj P.',
    role: 'Gas Engineer, Leeds',
    avatar: 'RP',
    rating: 5,
    text: "The digital signature feature is superb. Customers sign on my phone, they get an email straight away. No printing, no fuss. Absolute must-have.",
  },
  {
    name: 'Chris B.',
    role: 'Engineer & Business Owner, Bristol',
    avatar: 'CB',
    rating: 5,
    text: "I have 3 engineers on my team all using this. Jobs are assigned, we see each other's schedules, and I can track revenue in real time. Brilliant for a small business.",
  },
  {
    name: 'Tom H.',
    role: 'Plumbing & Gas Engineer, Sheffield',
    avatar: 'TH',
    rating: 5,
    text: "Switched from paper and spreadsheets and never looked back. Way more professional, and the quote builder means I win more jobs. Worth every penny — and it is free!",
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg aria-hidden="true" key={i} className="w-3.5 h-3.5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ name, role, avatar, rating, text }) {
  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10 w-[320px] sm:w-[380px] shrink-0">
      <Stars count={rating} />
      <p className="text-[var(--fg-muted)] text-sm leading-[1.75] mb-8">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--fg-muted)] text-xs font-display font-700 shrink-0">
          {avatar}
        </div>
        <div>
          <div className="font-600 text-[var(--fg)] text-sm">{name}</div>
          <div className="text-[var(--fg-dim)] text-xs">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" aria-label="Gas engineer reviews and testimonials for GasCertPal" className="py-32 sm:py-40 lg:py-48 overflow-hidden relative border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left sm:text-center relative z-10" ref={ref}>
        <div className="inline-flex items-center gap-3 text-[var(--accent)] font-600 text-xs uppercase tracking-[0.2em] mb-5">
          <span className="w-6 h-px bg-[var(--accent)]" />
          Proof
          <span className="w-6 h-px bg-[var(--accent)]" />
        </div>

        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--fg)] mb-6 leading-tight ${
          inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
        }`}>
          Trusted by tradespeople.<br className="hidden sm:block" />
          <span className="text-[var(--fg-muted)]">Rated 4.9/5.</span>
        </h2>

        <p className={`text-[var(--fg-muted)] text-base sm:text-lg mb-16 sm:mb-20 max-w-lg mx-auto ${
          inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
        }`}>
          Over 2,400 independent ratings across the UK.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden mt-4 max-w-[100vw]">
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-5 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {[...reviews, ...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
