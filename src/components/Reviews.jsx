import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'Danny R.',
    role: 'Gas Engineer, Manchester',
    text: "Save at least an hour every day. Customers love getting their CP12 by email on the spot.",
  },
  {
    name: 'Steve K.',
    role: 'Self-Employed, London',
    text: "Dead simple. 5 minutes to set up, generating proper certificates immediately.",
  },
  {
    name: 'Mike T.',
    role: 'Heating Engineer, Birmingham',
    text: "Everything in one place, looks professional, works offline. Essential on site.",
  },
  {
    name: 'Raj P.',
    role: 'Gas Engineer, Leeds',
    text: "Digital signatures are superb. Customer signs, they get an email straight away. No fuss.",
  },
  {
    name: 'Chris B.',
    role: 'Business Owner, Bristol',
    text: "3 engineers on my team all using this. Jobs assigned, schedules visible, revenue tracked.",
  },
  {
    name: 'Tom H.',
    role: 'Plumbing & Gas, Sheffield',
    text: "Switched from paper and never looked back. Way more professional. And it's free.",
  },
]

const delays = ['', 'animation-delay-75', 'animation-delay-150', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400']

const Stars = () => (
  <span className="flex items-center gap-0.5 text-[#fbbf24] mb-4" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.077 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
      </svg>
    ))}
  </span>
)

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="py-24 sm:py-32 lg:py-40 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-4">Reviews</p>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Rated <span className="text-gradient">4.9/5</span> by engineers
          </h2>
          <p className={`text-[var(--fg-muted)] text-base ${
            inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'
          }`}>
            2,400+ ratings from engineers across the UK.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className={`bg-[var(--bg-base)] p-8 ${
                inView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
              }`}
            >
              <Stars />
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
              <div>
                <div className="font-medium text-[var(--fg)] text-sm">{r.name}</div>
                <div className="text-[var(--fg-dim)] text-xs">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
