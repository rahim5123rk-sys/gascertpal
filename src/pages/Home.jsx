import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Reviews from '../components/Reviews'
import Download from '../components/Download'

export default function Home() {
  return (
    <>
      <SEO
        title="GasCertPal | CP12 Gas Safety Certificates App for Gas Engineers UK"
        description="Free mobile app for Gas Safe registered engineers. Create CP12 gas safety certificates, send professional invoices and quotes, manage jobs and customers, schedule work — all from your phone. Available on iOS and Android."
        path="/"
      />
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <Download />
    </>
  )
}
