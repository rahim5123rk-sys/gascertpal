import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    title: 'Download',
    description: 'Get GasPilot free on the App Store or Google Play. Set up in under 3 minutes.',
  },
  {
    num: '02',
    title: 'Add Jobs',
    description: 'Log your first job in seconds. Import customers or add manually.',
  },
  {
    num: '03',
    title: 'Generate Docs',
    description: 'Create a CP12, invoice, or quote on the spot. Get a digital signature and send.',
  },
  {
    num: '04',
    title: 'Scale Up',
    description: 'Track revenue, monitor your team, never miss a renewal.',
  },
]

const delays = ['', 'animation-delay-150', 'animation-delay-300', 'animation-delay-400']

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-24 sm:py-32 lg:py-40 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8" ref={ref}>
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-4">Process</p>
          <h2 className={`text-3xl sm:text-4xl font-700 text-[var(--fg)] leading-tight ${
            inView ? 'opacity-0 animate-fade-up' : 'opacity-0'
          }`}>
            Up and running in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`flex flex-col ${
                inView ? `opacity-0 animate-fade-up ${delays[idx]}` : 'opacity-0'
              }`}
            >
              <span className="font-display text-sm font-700 text-[var(--fg-dim)] mb-3">{step.num}</span>
              <h3 className="font-display text-lg font-600 text-[var(--fg)] mb-2">{step.title}</h3>
              <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 sm:mt-20 ${inView ? 'opacity-0 animate-fade-up animation-delay-500' : 'opacity-0'}`}>
          <a href="#download" className="btn-primary btn-lg">
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  )
}
