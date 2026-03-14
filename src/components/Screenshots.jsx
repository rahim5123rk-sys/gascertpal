import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const screens = [
  { src: '/screen-dashboard.png', label: 'Dashboard', desc: 'Your schedule, quick actions and upcoming renewals — everything at a glance.' },
  { src: '/screen-calendar.png', label: 'Calendar', desc: 'View your week, day or month. Track every job and never miss an appointment.' },
  { src: '/screen-forms.png', label: 'Gas Forms', desc: 'Gas safety certificates, warning notices, service records and more in minutes.' },
  { src: '/screen-gas-cert.png', label: 'Gas Certificate', desc: 'Professional landlord gas safety records with automatic renewal reminders.' },
  { src: '/screen-tools.png', label: 'Tools', desc: 'Gas rate calculator, ventilation sizing, water hardness lookup and boiler manuals.' },
  { src: '/screen-jobs.png', label: 'Jobs', desc: 'Manage your whole team\'s active and completed jobs from one screen.' },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="screenshots" className="py-28 sm:py-36 lg:py-44 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-5">App Preview</p>
          <h2 className={`text-3xl sm:text-[2.75rem] font-700 text-[var(--fg)] mb-6 leading-tight ${inView ? 'opacity-0 animate-fade-up' : 'opacity-0'}`}>
            See it in action
          </h2>
          <p className={`text-[var(--fg-muted)] max-w-lg mx-auto text-base sm:text-lg leading-relaxed ${inView ? 'opacity-0 animate-fade-up animation-delay-100' : 'opacity-0'}`}>
            Designed to be intuitive from the first tap. No training needed.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${inView ? 'opacity-0 animate-fade-up animation-delay-150' : 'opacity-0'}`}>

          {/* Phone mockup — bigger */}
          <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80">
            <div className="relative">
              <div className="bg-[var(--bg-elevated)] rounded-[2.5rem] p-2.5 ring-1 ring-[var(--border)]">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--bg-elevated)] rounded-full z-10" />
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

          {/* Tab list — bigger text, more spacing */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-3">
              {screens.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActive(i)}
                  className={`text-left px-6 py-5 rounded-2xl border transition-all duration-200 ${
                    active === i
                      ? 'border-[var(--border-hover)] bg-[var(--bg-elevated)]'
                      : 'border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  <p className={`text-base font-600 mb-1.5 ${active === i ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'}`}>
                    {s.label}
                  </p>
                  <p className={`text-sm leading-relaxed ${active === i ? 'text-[var(--fg-muted)]' : 'text-[var(--fg-dim)]'}`}>
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
