import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import HowItWorks from '../components/HowItWorks'
import Reviews from '../components/Reviews'
import Download from '../components/Download'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <SEO
        title="GasPilot | Gas Safety Certificate App for Gas Engineers UK"
        description="The CP12 app built for Gas Safe engineers. Create gas safety certificates in minutes, send professional invoices and quotes, schedule jobs and manage customers from your phone. Free Starter tier, Pro free for 30 days."
        path="/"
      />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Reviews />
      <Download />
      <FAQ />
      <CTA />
    </>
  )
}
