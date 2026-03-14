import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By creating an account, accessing or using GasPilot, you agree to these Terms of Service. If you do not agree, do not use the app. If you use GasPilot on behalf of a company or other organisation, you confirm that you have authority to bind that organisation to these terms.`,
  },
  {
    title: '2. Description of Service',
    body: `GasPilot is a business software platform for tradespeople and their teams. It may include customer management, job scheduling, workers, quotes, invoices, document storage, email sending, reminders, gas and heating forms, digital signatures, renewal tracking, boiler manual links, and toolbox utilities such as gas-rate, ventilation and water-hardness calculations or lookups. The service is provided as a workflow and record-keeping tool, not as professional, engineering, legal, regulatory or safety advice.`,
  },
  {
    title: '3. Eligibility and Account Responsibilities',
    body: `• You must provide accurate and complete account information.\n• You are responsible for all activity under your account and your team accounts.\n• You must keep credentials secure and notify us promptly of unauthorised access.\n• You must ensure invited workers are authorised to access the data you make available to them.\n• You must be legally capable of entering into these terms and, where relevant, appropriately qualified, registered, certified or supervised for the work you perform.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You must use GasPilot lawfully and responsibly. You must not:\n\n• use the app in breach of applicable law, regulation, code or professional duty;\n• enter misleading, fraudulent, infringing or defamatory content;\n• use another person's registration, qualifications, branding, certificates or identity without authority;\n• attempt to interfere with, reverse engineer or gain unauthorised access to the service;\n• upload malicious code, harmful content or material you have no right to use.`,
  },
  {
    title: '5. Your Data and Compliance Responsibilities',
    body: `You are solely responsible for the legality, accuracy, completeness and retention of all data, readings, measurements, notes, photos, signatures, references, reminders, forms and documents entered into or generated through GasPilot. You must ensure that all records, notices, certificates, invoices, emails and other outputs comply with applicable law, regulation, technical standards, professional requirements and manufacturer instructions. Where we act as a Data Processor of your customer data, our Privacy Policy outlines the scope, nature, and duration of processing. By accepting these terms, you instruct us to process this data on your behalf using the sub-processors listed in our Privacy Policy.`,
  },
  {
    title: '6. Forms, Certificates and Technical Records',
    body: `GasPilot may support forms and records including, for example, gas safety records, service records, warning notices, commissioning records, decommissioning records, breakdown reports, installation certificates, invoices, quotes and related job documentation.\n\n• These features are provided as digital templates and workflow tools only.\n• You are solely responsible for checking that every form, record and certificate is suitable for the job, correctly completed and legally compliant.\n• GasPilot does not independently verify appliance details, test results, combustion readings, flue data, ventilation calculations, defect classifications, registration status, competence or legal eligibility.\n• You must review each document before issue, signature, sharing or reliance.\n• You must keep records for the period required by law, regulation, insurer, scheme rules or contract.`,
  },
  {
    title: '7. Gas Safe, OFTEC and Other Credentials',
    body: `If you enter any registration number, engineer ID, licence number, competency credential or scheme branding, you warrant that it is genuine, current, authorised for your use and used in compliance with all applicable rules. GasPilot does not verify or endorse your credentials and is not affiliated with or endorsed by Gas Safe Register, OFTEC, HSE or any other regulator unless expressly stated. You assume full responsibility for any use of professional credentials, logos or branding in documents generated through the app.`,
  },
  {
    title: '8. Calculators, Toolbox and External Resources',
    body: `Toolbox features, calculators, lookup tools, formulas, boiler manual links and similar resources are provided for convenience only.\n\n• Calculation outputs are estimates based on the inputs, assumptions and formulas configured in the app.\n• They do not replace professional judgment, statutory requirements, current standards, appliance instructions, commissioning procedures or on-site verification.\n• You must independently check all figures, dimensions, readings and conclusions before relying on them.\n• External websites opened from the app are third-party services outside our control, and your use of them is at your own risk.\n\nTo the fullest extent permitted by law, GasPilot accepts no responsibility for any loss, damage, injury, enforcement action, failed inspection, unsafe condition, misdiagnosis, incorrect installation, incorrect commissioning, incorrect certification or other consequence arising from reliance on calculator outputs, templates, lookups or external resources.`,
  },
  {
    title: '9. Emails, Reminders and Notifications',
    body: `You are responsible for all emails, reminders, notifications and documents sent through GasPilot, including recipient selection, timing, content, attachments and legal basis for contact. We do not guarantee delivery, receipt, timing, inbox placement or continued availability of any third-party email or notification service.`,
  },
  {
    title: '10. Team Accounts',
    body: `Company administrators control company workspaces and are responsible for worker access, permission management and data shared with team members. Workers act on behalf of the company account that grants them access. Administrators must promptly remove access that is no longer authorised.`,
  },
  {
    title: '11. Intellectual Property',
    body: `GasPilot, the app software, branding, interface, templates and related content remain our intellectual property or that of our licensors. You retain ownership of your own data and documents, subject to any rights needed for us to host, process, back up and transmit that data to provide the service.`,
  },
  {
    title: '12. Disclaimers',
    body: `GasPilot is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim all warranties, representations and conditions, whether express, implied or statutory, including warranties of accuracy, fitness for a particular purpose, non-infringement, merchantability and uninterrupted availability. We do not warrant that the service, templates, forms, calculations, reminders or outputs will be error-free, complete, compliant or suitable for your specific use case.`,
  },
  {
    title: '13. Limitation of Liability',
    body: `To the maximum extent permitted by law:\n\n• We are not liable for indirect, incidental, special, consequential, exemplary or punitive damages, or for loss of profits, revenue, business, contracts, goodwill, reputation, anticipated savings, data or opportunity.\n• We are not liable for losses arising from your entered data, your professional work, your compliance obligations, third-party services, external websites, delayed or failed communications, or reliance on generated documents, formulas, calculations, reminders or technical content.\n• Our aggregate liability in connection with the service shall not exceed the total amount paid by you for GasPilot in the 12 months before the event giving rise to the claim.\n• Nothing in these terms limits liability that cannot lawfully be limited or excluded.`,
  },
  {
    title: '14. Indemnity',
    body: `You agree to indemnify and hold harmless GasPilot and its officers, directors, employees and affiliates from claims, liabilities, losses, damages, penalties, fines, costs and expenses arising out of or related to: your use of the service; your data; your forms, certificates, calculations or outputs; your breach of these terms; your breach of law, regulation or professional duty; or your infringement or misuse of another person's rights, credentials or branding.`,
  },
  {
    title: '15. Suspension and Termination',
    body: `You may stop using the app and delete your account at any time. We may suspend, restrict or terminate access where reasonably necessary to protect the service, comply with law, investigate misuse or enforce these terms.`,
  },
  {
    title: '16. Changes to Terms',
    body: `We may update these terms from time to time, including to reflect new features, forms, legal requirements or service providers. Continued use of GasPilot after an update takes effect constitutes acceptance of the revised terms.`,
  },
  {
    title: '17. Governing Law',
    body: `These terms are governed by the laws of England and Wales unless mandatory local law requires otherwise. The courts of England and Wales shall have exclusive jurisdiction except where applicable consumer or mandatory laws provide otherwise.`,
  },
  {
    title: '18. Contact',
    body: `For questions about these terms, contact us through Settings or email support@gaspilot.app.`,
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Terms of Service — GasPilot Usage Terms"
        description="Terms of service for GasPilot. Covers acceptable use, certificate responsibilities, Gas Safe compliance, data handling, and liability."
        path="/terms"
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-4">Governed by English Law</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-3">Terms of Service</h1>
          <p className="text-[var(--fg-muted)] text-sm">Last updated: 12 March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2 className="text-base font-semibold text-[var(--fg)] mb-3">{s.title}</h2>
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
