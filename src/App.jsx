import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import './App.css'

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const FeaturesPage = lazy(() => import('./pages/Features'))
const Legal = lazy(() => import('./pages/Legal'))
const Team = lazy(() => import('./pages/Team'))
const XeroConnected = lazy(() => import('./pages/XeroConnected'))

// Simple loading indicator for suspense fallback
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-[#1d1d1f] border-t-white rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/team" element={<Team />} />
          <Route path="/xero-connected" element={<XeroConnected />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
