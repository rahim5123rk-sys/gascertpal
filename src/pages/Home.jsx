import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import HowItWorks from '../components/HowItWorks'
import Download from '../components/Download'

export default function Home() {
  return (
    <>
      <SEO
        title="GasPilot | Gas Safety Certificates App for Gas Engineers UK"
        description="The app bringing gas engineers into 2026. Create gas safety certificates, send professional invoices and quotes, manage jobs and customers, schedule work — all from your phone. 30-day free trial, then £20/month."
        path="/"
      />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Download />
    </>
  )
}
