// Landing page after Xero OAuth completes.
// The mobile app's in-app browser watches this URL and auto-closes.
// On the web, we just show a friendly confirmation.

import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'

export default function XeroConnected() {
  const [params] = useSearchParams()
  const ok = params.get('ok') === '1'
  const tenant = params.get('tenant')
  const errorCode = params.get('error')

  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Xero Connected — GasPilot"
        description="Xero has been connected to your GasPilot account."
        path="/xero-connected"
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
          {ok ? (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(19,181,234,0.12)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-[#13B5EA]">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-3">Connected</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
                Xero is linked to GasPilot
              </h1>
              {tenant && (
                <p className="text-[var(--fg-muted)] text-base leading-relaxed mb-6">
                  Connected organisation: <span className="font-semibold text-[var(--fg)]">{tenant}</span>
                </p>
              )}
              <p className="text-[var(--fg-muted)] text-base leading-relaxed mb-8">
                You can close this window and return to the GasPilot app. New invoices you send
                will be pushed to Xero as drafts automatically.
              </p>
            </>
          ) : (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(239,68,68,0.12)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-[#ef4444]">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-3">Something went wrong</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4">
                Xero was not connected
              </h1>
              <p className="text-[var(--fg-muted)] text-base leading-relaxed mb-2">
                Close this window and try again from the Integrations screen in the app.
              </p>
              {errorCode && (
                <p className="text-[var(--fg-dim)] text-sm mt-4">Error: {errorCode}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
