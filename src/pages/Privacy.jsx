import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: '1. Data Controller',
    body: `GasPilot is a trade management application. When you create a company account, your company acts as the data controller for customer and job data processed through the app. GasPilot (the software) acts as a data processor on your behalf.`,
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
    body: `GasPilot is not intended for use by anyone under the age of 16. We do not knowingly collect personal data from children.`,
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
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Privacy Policy — GasPilot GDPR Compliant Data Protection"
        description="GasPilot privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant with full data export and deletion rights for Gas Safe engineers."
        path="/privacy"
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-4">GDPR Compliant</p>
          <h1 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-3">Privacy Policy</h1>
          <p className="text-[var(--fg-muted)] text-sm">Last updated: 1 March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2 className="text-base font-600 text-[var(--fg)] mb-3">{s.title}</h2>
              <div className="text-[var(--fg-muted)] text-sm leading-7 whitespace-pre-line">{s.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/legal" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm transition-colors">
            Back to Legal
          </Link>
          <Link to="/terms" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}
