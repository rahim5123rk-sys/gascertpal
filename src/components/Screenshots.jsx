import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const screens = [
  { src: '/screen-dashboard.png', label: 'Dashboard', desc: 'See your schedule, quick actions and upcoming renewals at a glance.' },
  { src: '/screen-calendar.png', label: 'Calendar', desc: 'View your week, day or month and track every job at a glance.' },
  { src: '/screen-forms.png', label: 'Gas Forms', desc: 'Create CP12s, warning notices, service records and more in minutes.' },
  { src: '/screen-gas-cert.png', label: 'Gas Certificate', desc: 'Professional landlord gas safety records with renewal reminders built in.' },
  { src: '/screen-tools.png', label: 'Tools', desc: 'Gas rate calculator, ventilation sizing, water hardness and boiler manuals.' },
  { src: '/screen-jobs.png', label: 'Jobs', desc: 'Manage your team\'s active and completed jobs from one screen.' },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="screenshots" className="py-24 sm:py-32 lg:py-40 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-4">App Preview</p>
          <h2 className={`text-3xl sm:text-4xl font-700 text-[var(--fg)] leading-tight ${inView ? 'opacity-0 animate-fade-up' : 'opacity-0'}`}>
            See it in action
          </h2>
        </div>

        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${inView ? 'opacity-0 animate-fade-up animation-delay-150' : 'opacity-0'}`}>

          {/* Phone mockup */}
          <div className="flex-shrink-0 w-52 sm:w-60">
            <div className="relative">
              <div className="bg-[var(--bg-elevated)] rounded-[2.5rem] p-2 ring-1 ring-[var(--border)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[var(--bg-elevated)] rounded-full z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-white">
                  <img
                    key={active}
                    src={screens[active].src}
                    alt={screens[active].label}
                    className="w-full h-auto block"
                    width="320"
                    height="693"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tab list */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-2">
              {screens.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                    active === i
                      ? 'border-[var(--border-hover)] bg-[var(--bg-elevated)]'
                      : 'border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <p className={`text-sm font-600 mb-0.5 ${active === i ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'}`}>
                    {s.label}
                  </p>
                  <p className={`text-xs leading-relaxed ${active === i ? 'text-[var(--fg-muted)]' : 'text-[var(--fg-dim)]'}`}>
                    {s.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
