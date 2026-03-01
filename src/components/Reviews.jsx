import { useInView } from '../hooks/useInView'

const reviews = [
  {
    name: 'Danny R.',
    role: 'Gas Engineer, Manchester',
    avatar: 'DR',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "Been using GasCertPal for 6 months. I save at least an hour every day. My customers love getting their CP12 by email on the spot — no more posting certificates.",
  },
  {
    name: 'Steve K.',
    role: 'Self-Employed Engineer, London',
    avatar: 'SK',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "Dead simple to use. Took me 5 minutes to set up and I was generating proper certificates immediately. The invoice feature alone has saved me hours every week.",
  },
  {
    name: 'Mike T.',
    role: 'Heating Engineer, Birmingham',
    avatar: 'MT',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "I was sceptical at first but GasCertPal is genuinely brilliant. Everything is in one place, looks professional, and works offline which is essential on site.",
  },
  {
    name: 'Raj P.',
    role: 'Gas Engineer, Leeds',
    avatar: 'RP',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "The digital signature feature is superb. Customers sign on my phone, they get an email straight away. No printing, no fuss. Absolute must-have.",
  },
  {
    name: 'Chris B.',
    role: 'Engineer & Business Owner, Bristol',
    avatar: 'CB',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "I have 3 engineers on my team all using this. Jobs are assigned, we see each other's schedules, and I can track revenue in real time. Brilliant for a small business.",
  },
  {
    name: 'Tom H.',
    role: 'Plumbing & Gas Engineer, Sheffield',
    avatar: 'TH',
    color: 'bg-[#1d1d1f]',
    rating: 5,
    text: "Switched from paper and spreadsheets and never looked back. Way more professional, and the quote builder means I win more jobs. Worth every penny — and it is free!",
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg aria-hidden="true" key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ name, role, avatar, color, rating, text }) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-4xl p-6 sm:p-8 w-72 sm:w-80 lg:w-96 shrink-0 transition-colors duration-300 hover:bg-[#1d1d1f]">
      <Stars count={rating} />
      <p className="text-[#a1a1a6] text-base leading-relaxed mb-6 font-medium">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-white text-sm">{name}</div>
          <div className="text-[#86868b] text-xs">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="py-24 sm:py-32 lg:py-40 bg-[#000000] overflow-hidden relative border-t border-[#1d1d1f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-left sm:text-center relative z-10" ref={ref}>
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6  ${inView ? 'opacity-0 animate-fade-up' : 'opacity-0'}`}>
          Loved by tradespeople.
          <br className="hidden sm:block"/>
          <span className="text-[#86868b]"> Rated 4.9/5.</span>
        </h2>

        <div className={`mt-4 mb-16 sm:mb-24 ${inView ? 'opacity-0 animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          <p className="text-[#a1a1a6] text-lg sm:text-xl font-medium max-w-2xl mx-auto">Based on over 2,400+ independent ratings across the UK.</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden mt-8 max-w-[100vw]">
        {/* Subtle fade edges for pure black background */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {[...reviews, ...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
