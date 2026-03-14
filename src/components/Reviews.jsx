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
            Rated 4.9/5
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
