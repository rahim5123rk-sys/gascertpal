import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating an account and using GasCertPal ("the App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.`,
  },
  {
    title: '2. Description of Service',
    body: `GasCertPal is a trade management application that allows tradespeople to manage customers, jobs, invoices, quotes, workers, and gas safety certificates (CP12), and send documents via email. The service is provided "as is" for business use by qualified tradespeople and their teams.`,
  },
  {
    title: '3. Account Responsibilities',
    body: `• You must provide accurate and complete registration information.\n• You are responsible for maintaining the security of your account credentials.\n• You are responsible for all activity that occurs under your account.\n• You must notify us immediately of any unauthorised use of your account.\n• You must be at least 16 years old to create an account.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You agree to use GasCertPal only for lawful business purposes. You must not:\n\n• Use the App to store or process data in violation of applicable laws.\n• Share access credentials with unauthorised individuals.\n• Attempt to reverse engineer, decompile, or hack the App.\n• Use the App to harass, defame, or infringe on the rights of others.\n• Upload malicious content, viruses, or harmful code.`,
  },
  {
    title: '5. Data & Privacy',
    body: `Your use of GasCertPal is also governed by our Privacy Policy. By using the App, you acknowledge that you have read and understood our Privacy Policy, which explains how we collect, use, and protect your personal data.\n\nAs a company administrator, you are responsible for ensuring that you have appropriate consent or legal basis to store customer, tenant, and landlord personal data in the App.`,
  },
  {
    title: '6. Gas Safety Certificates (CP12)',
    body: `CP12 gas safety certificates generated through GasCertPal are provided as a digital tool to assist qualified Gas Safe registered engineers.\n\n• You are solely responsible for the accuracy of all data entered into certificates.\n• GasCertPal does not verify your Gas Safe registration, qualifications, or ID card number.\n• Certificates must comply with the Gas Safety (Installation & Use) Regulations 1998.\n• You must retain records for a minimum of 2 years as required by law.\n• GasCertPal is not liable for any errors or omissions in certificates you generate.\n• By entering your Gas Safe registration number and Gas Safe ID card number you warrant that these are your own genuine credentials and that your registration is current and unrestricted.\n• The Gas Safe Register logo is displayed on certificates solely on your authority as a registered gas engineer. GasCertPal does not claim any affiliation with, endorsement by, or licence from Gas Safe Register, Capita, or the HSE. You accept full legal responsibility for the use of Gas Safe Register branding on any certificate you generate.\n• You agree to indemnify and hold harmless GasCertPal, its directors, employees, and affiliates against any claims, losses, fines, or enforcement actions arising from your use of Gas Safe branding, generation of fraudulent or inaccurate certificates, or any breach of Gas Safety regulations.`,
  },
  {
    title: '7. Invoices & Documents',
    body: `Invoices, quotes, and other documents generated through GasCertPal are tools provided for your convenience. You are responsible for ensuring they comply with applicable tax and business regulations (e.g., HMRC requirements for VAT invoices).\n\nWhen you send documents via email through the App, emails are delivered using Resend (resend.com), a third-party transactional email service. Emails are sent from the gascertpal.com domain on your behalf. You are responsible for ensuring you have appropriate permission or legal basis to email documents to the recipients you specify.`,
  },
  {
    title: '8. Team & Worker Accounts',
    body: `• Company administrators can invite workers to join their team via invite codes.\n• Administrators are responsible for managing worker access and permissions.\n• Workers can access job data assigned to them by the administrator.\n• Upon removal from a team, a worker's access to company data is revoked immediately.`,
  },
  {
    title: '9. Intellectual Property',
    body: `GasCertPal and all associated branding, logos, and software are the intellectual property of GasCertPal. You retain ownership of all data you enter into the App. By using the App, you grant us a limited licence to process your data solely for the purpose of providing the service.`,
  },
  {
    title: '10. Limitation of Liability',
    body: `To the maximum extent permitted by law:\n\n• GasCertPal is provided "as is" without warranties of any kind.\n• We are not liable for any loss of data, business interruption, or damages arising from your use of the App.\n• We do not guarantee uninterrupted or error-free service.\n• Our total liability shall not exceed the amount you have paid for the service in the 12 months preceding the claim.`,
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
    <div className="min-h-screen bg-slate-950 pt-16">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.06] rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-500/[0.05] rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Governed by English Law
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: 1 March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {SECTIONS.map((s, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/80 transition-colors duration-300">
              <h2 className="text-lg font-extrabold text-white mb-4">{s.title}</h2>
              <div className="text-slate-400 text-sm leading-7 whitespace-pre-line">{s.body}</div>
            </div>
          ))}
        </div>

        {/* Back / Other links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/legal"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Legal Hub
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
          >
            View Privacy Policy
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
