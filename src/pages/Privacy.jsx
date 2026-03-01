import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: '1. Data Controller',
    body: `GasCertPal is a trade management application. When you create a company account, your company acts as the data controller for customer and job data processed through the app. GasCertPal (the software) acts as a data processor on your behalf.`,
  },
  {
    title: '2. What Data We Collect',
    body: `We collect and process the following categories of personal data:\n\n• Account Data: Name, email address, password (hashed), company name, business address, phone number, trade type.\n• Professional Data: Gas Safe Register number, gas licence number, OFTEC number (where applicable).\n• Customer Data: Customer name, company name, address, postcode, email, phone number.\n• Tenant & Landlord Data: Name, address, email, phone number (for CP12 gas safety certificates).\n• Job Data: Job descriptions, notes, photos, site addresses.\n• Document Data: Invoices, quotes, CP12 certificates including customer/landlord/tenant details.\n• Digital Signatures: Handwritten signatures captured digitally for certificates and documents.\n• Device Data: Push notification tokens, device type (for notifications only).\n• Email Communication Data: Recipient email addresses, email subject lines, and document attachments when you send documents via email from the app.`,
  },
  {
    title: '3. Why We Process Your Data',
    body: `We process personal data for the following purposes and legal bases:\n\n• Contract Performance: To provide the trade management service you signed up for — managing jobs, customers, invoices, quotes and gas safety certificates.\n• Legal Obligation: Gas Safety (Installation & Use) Regulations 1998 require gas safety records to be retained for at least 2 years.\n• Legitimate Interest: To send job-related push notifications, to maintain audit trails of work carried out.\n• Consent: For any optional processing — you may withdraw consent at any time via Settings.`,
  },
  {
    title: '4. Data Sharing',
    body: `We share personal data with the following third parties:\n\n• Supabase (Database & Authentication): Your data is stored securely in Supabase's cloud infrastructure. Supabase acts as our data processor under a Data Processing Agreement.\n• Expo Push Notification Service: Device push tokens are sent to Expo's servers to deliver notifications. No personal data beyond the token and notification content is shared.\n• Resend (Email Delivery): When you send documents via email through the app, we use Resend (resend.com) as our transactional email provider. Resend processes recipient email addresses, email content, and any PDF attachments solely to deliver the email on your behalf.\n• PDF Recipients: When you share a PDF (invoice, quote, CP12 certificate), the document may contain personal data. You control who receives these documents.\n\nWe do not sell your data to third parties. We do not use your data for advertising or profiling.`,
  },
  {
    title: '5. Data Retention',
    body: `• Account data is retained for as long as your account is active.\n• Customer and job data is retained until you delete it or delete your account.\n• CP12 gas safety certificates are retained for a minimum of 2 years as required by law (Regulation 36).\n• When you delete your account, all personal data is permanently removed within 30 days, except where retention is required by law.\n• Document snapshots (locked certificates) are anonymised when the associated customer is deleted.`,
  },
  {
    title: '6. Your Rights (GDPR)',
    body: `Under the General Data Protection Regulation, you have the right to:\n\n• Access: Request a copy of all personal data we hold about you. Use "Export My Data" in Settings.\n• Rectification: Correct inaccurate data via your profile or customer records.\n• Erasure: Delete your account and all associated data via "Delete My Account" in Settings.\n• Portability: Export your data in a machine-readable format (JSON).\n• Restriction: Request that we limit processing of your data.\n• Object: Object to processing based on legitimate interests.\n• Withdraw Consent: Where processing is based on consent, withdraw at any time.\n\nTo exercise any of these rights, use the relevant feature in Settings or contact us at support@gascertpal.com.`,
  },
  {
    title: '7. Data Security',
    body: `We implement appropriate technical and organisational measures to protect your personal data:\n\n• All data in transit is encrypted using TLS/SSL.\n• Authentication tokens are stored in encrypted device storage (Secure Store).\n• Passwords are hashed and never stored in plain text.\n• Access to customer data is restricted by company membership.\n• Row-level security policies are enforced at the database level.`,
  },
  {
    title: "8. Children's Privacy",
    body: `GasCertPal is not intended for use by anyone under the age of 16. We do not knowingly collect personal data from children.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this privacy policy from time to time. We will notify you of significant changes via in-app notification or email. Continued use of the app after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact',
    body: `If you have questions about this privacy policy or wish to exercise your data rights, please contact us at support@gascertpal.com.`,
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#000000] pt-8 sm:pt-12">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto mb-6 ">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#111111] text-green-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-green-500/20">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            GDPR Compliant
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 ">Privacy Policy</h1>
          <p className="text-[#a1a1a6] text-sm">Last updated: 1 March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {SECTIONS.map((s, i) => (
            <div key={i} className=" rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-lg font-extrabold text-white mb-4">{s.title}</h2>
              <div className="text-[#a1a1a6] text-sm leading-7 whitespace-pre-line">{s.body}</div>
            </div>
          ))}
        </div>

        {/* Back / Other links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/legal"
            className="inline-flex items-center gap-2 text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Legal Hub
          </Link>
          <Link
            to="/terms"
            className="inline-flex items-center gap-2 text-[#a1a1a6] hover:text-white font-medium text-sm transition-colors"
          >
            View Terms of Service
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
