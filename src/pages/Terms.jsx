import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating an account and using GasPilot ("the App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.`,
  },
  {
    title: '2. Description of Service',
    body: `GasPilot is a trade management application that allows tradespeople to manage customers, jobs, invoices, quotes, workers, and gas safety certificates (CP12), and send documents via email. The service is provided "as is" for business use by qualified tradespeople and their teams.`,
  },
  {
    title: '3. Account Responsibilities',
    body: `• You must provide accurate and complete registration information.\n• You are responsible for maintaining the security of your account credentials.\n• You are responsible for all activity that occurs under your account.\n• You must notify us immediately of any unauthorised use of your account.\n• You must be at least 16 years old to create an account.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You agree to use GasPilot only for lawful business purposes. You must not:\n\n• Use the App to store or process data in violation of applicable laws.\n• Share access credentials with unauthorised individuals.\n• Attempt to reverse engineer, decompile, or hack the App.\n• Use the App to harass, defame, or infringe on the rights of others.\n• Upload malicious content, viruses, or harmful code.`,
  },
  {
    title: '5. Data & Privacy',
    body: `Your use of GasPilot is also governed by our Privacy Policy. By using the App, you acknowledge that you have read and understood our Privacy Policy, which explains how we collect, use, and protect your personal data.\n\nAs a company administrator, you are responsible for ensuring that you have appropriate consent or legal basis to store customer, tenant, and landlord personal data in the App.`,
  },
  {
    title: '6. Gas Safety Certificates (CP12)',
    body: `CP12 gas safety certificates generated through GasPilot are provided as a digital tool to assist qualified Gas Safe registered engineers.\n\n• You are solely responsible for the accuracy of all data entered into certificates.\n• GasPilot does not verify your Gas Safe registration, qualifications, or ID card number.\n• Certificates must comply with the Gas Safety (Installation & Use) Regulations 1998.\n• You must retain records for a minimum of 2 years as required by law.\n• GasPilot is not liable for any errors or omissions in certificates you generate.\n• By entering your Gas Safe registration number and Gas Safe ID card number you warrant that these are your own genuine credentials and that your registration is current and unrestricted.\n• The Gas Safe Register logo is displayed on certificates solely on your authority as a registered gas engineer. GasPilot does not claim any affiliation with, endorsement by, or licence from Gas Safe Register, Capita, or the HSE. You accept full legal responsibility for the use of Gas Safe Register branding on any certificate you generate.\n• You agree to indemnify and hold harmless GasPilot, its directors, employees, and affiliates against any claims, losses, fines, or enforcement actions arising from your use of Gas Safe branding, generation of fraudulent or inaccurate certificates, or any breach of Gas Safety regulations.`,
  },
  {
    title: '7. Invoices & Documents',
    body: `Invoices, quotes, and other documents generated through GasPilot are tools provided for your convenience. You are responsible for ensuring they comply with applicable tax and business regulations (e.g., HMRC requirements for VAT invoices).\n\nWhen you send documents via email through the App, emails are delivered using Resend (resend.com), a third-party transactional email service. Emails are sent from the gascertpal.com domain on your behalf. You are responsible for ensuring you have appropriate permission or legal basis to email documents to the recipients you specify.`,
  },
  {
    title: '8. Team & Worker Accounts',
    body: `• Company administrators can invite workers to join their team via invite codes.\n• Administrators are responsible for managing worker access and permissions.\n• Workers can access job data assigned to them by the administrator.\n• Upon removal from a team, a worker's access to company data is revoked immediately.`,
  },
  {
    title: '9. Intellectual Property',
    body: `GasPilot and all associated branding, logos, and software are the intellectual property of GasPilot. You retain ownership of all data you enter into the App. By using the App, you grant us a limited licence to process your data solely for the purpose of providing the service.`,
  },
  {
    title: '10. Limitation of Liability',
    body: `To the maximum extent permitted by law:\n\n• GasPilot is provided "as is" without warranties of any kind.\n• We are not liable for any loss of data, business interruption, or damages arising from your use of the App.\n• We do not guarantee uninterrupted or error-free service.\n• Our total liability shall not exceed the amount you have paid for the service in the 12 months preceding the claim.`,
  },
  {
    title: '11. Account Termination',
    body: `• You may delete your account at any time via Settings > Delete My Account.\n• We may suspend or terminate accounts that violate these terms.\n• Upon termination, your data will be deleted in accordance with our Privacy Policy.`,
  },
  {
    title: '12. Changes to Terms',
    body: `We may update these Terms of Service from time to time. We will notify you of material changes via in-app notification or email. Continued use after changes constitutes acceptance.`,
  },
  {
    title: '13. Governing Law',
    body: `These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: '14. Contact',
    body: `For questions about these terms, contact us at support@gascertpal.com.`,
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Terms of Service — GasPilot Usage Terms for Gas Engineers"
        description="Terms of service for GasPilot. Covers acceptable use, CP12 certificate responsibilities, Gas Safe compliance, data handling, and liability for gas engineers using the app."
        path="/terms"
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-500 uppercase tracking-widest mb-4">Governed by English Law</p>
          <h1 className="text-3xl sm:text-4xl font-700 text-[var(--fg)] mb-3">Terms of Service</h1>
          <p className="text-[var(--fg-muted)] text-sm">Last updated: 1 March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
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
          <Link to="/privacy" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
