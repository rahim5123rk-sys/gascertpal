import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'Danny R.',
    role: 'Gas Engineer, Manchester',
    avatar: 'DR',
    color: 'bg-orange-500',
    rating: 5,
    text: "Been using GasCertPal for 6 months. I save at least an hour every day. My customers love getting their CP12 by email on the spot — no more posting certificates.",
  },
  {
    name: 'Steve K.',
    role: 'Self-Employed Engineer, London',
    avatar: 'SK',
    color: 'bg-emerald-500',
    rating: 5,
    text: "Dead simple to use. Took me 5 minutes to set up and I was generating proper certificates immediately. The invoice feature alone has saved me hours every week.",
  },
  {
    name: 'Mike T.',
    role: 'Heating Engineer, Birmingham',
    avatar: 'MT',
    color: 'bg-violet-500',
    rating: 5,
    text: "I was sceptical at first but GasCertPal is genuinely brilliant. Everything is in one place, looks professional, and works offline which is essential on site.",
  },
  {
    name: 'Raj P.',
    role: 'Gas Engineer, Leeds',
    avatar: 'RP',
    color: 'bg-amber-500',
    rating: 5,
    text: "The digital signature feature is superb. Customers sign on my phone, they get an email straight away. No printing, no fuss. Absolute must-have.",
  },
  {
    name: 'Chris B.',
    role: 'Engineer & Business Owner, Bristol',
    avatar: 'CB',
    color: 'bg-red-500',
    rating: 5,
    text: "I have 3 engineers on my team all using this. Jobs are assigned, we see each other's schedules, and I can track revenue in real time. Brilliant for a small business.",
  },
  {
    name: 'Tom H.',
    role: 'Plumbing & Gas Engineer, Sheffield',
    avatar: 'TH',
    color: 'bg-teal-500',
    rating: 5,
    text: "Switched from paper and spreadsheets and never looked back. Way more professional, and the quote builder means I win more jobs. Worth every penny — and it is free!",
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ name, role, avatar, color, rating, text }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-70 sm:w-80 shrink-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <Stars count={rating} />
      <p className="text-slate-600 text-sm leading-relaxed my-4">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>
          {avatar}
        </div>
        <div>
          <div className="font-bold text-slate-800 text-sm">{name}</div>
          <div className="text-slate-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Reviews
        </span>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-2 mb-5 tracking-tight ${inView ? 'opacity-0 animate-fade-up' : 'opacity-0'}`}>
          Loved by Tradespeople
          <span className="gradient-text"> Across the UK</span>
        </h2>

        <div className={`inline-flex flex-col items-center gap-3 mt-4 mb-16 ${inView ? 'opacity-0 animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          <div className="text-5xl sm:text-7xl font-black gradient-text">4.9</div>
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-400 text-sm">Based on 2,400+ ratings on App Store &amp; Google Play</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max px-5">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
