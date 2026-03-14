import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: '1. Data Controller',
    body: `GasPilot is a trade management application operated by Mohammed Khan (trading as Blue Flame Studios). When you create a company account, your company acts as the data controller for customer, job and document data processed through the app. GasPilot acts as a data processor on your behalf except where we process limited account, billing, support and security data for our own legitimate business purposes.`,
  },
  {
    title: '2. What Data We Collect',
    body: `We collect and process the following categories of personal data and related business data:\n\n• Account Data: Name, email address, password (hashed), company name, trading address, phone number, trade type and account settings.\n• Professional & Compliance Data: Gas Safe Register number, gas licence number, OFTEC number, engineer ID details and related competency information that you choose to enter.\n• Customer, Tenant & Landlord Data: Names, company names, service addresses, postcodes, email addresses, telephone numbers and occupancy details.\n• Job & Scheduling Data: Job descriptions, notes, appointments, status history, assigned workers, calendar entries, site notes and photos.\n• Property & Appliance Data: Appliance make/model details, flue and ventilation details, commissioning values, service readings, combustion/FGA readings, warning notices, defect notes, breakdown details and installation information.\n• Document Data: Quotes, invoices, gas safety records, service records, warning notices, commissioning records, decommissioning records, breakdown reports, installation certificates, supporting forms, document references, renewal dates and related snapshots.\n• Signature Data: Handwritten signatures captured digitally for documents, acknowledgements and certificates.\n• Communication Data: Recipient email addresses, subject lines, message content, reminder settings, reminder send history, push notification tokens and notification content needed to deliver reminders and workflow updates.\n• Toolbox & Resource Usage Data: Inputs you type into calculators or lookup tools may be processed in-app to show results. Where those values are then copied into a job, form or document, they become stored record data. Boiler manual lookups may open third-party websites outside GasPilot.\n• Device & Diagnostic Data: Device type, app version, crash diagnostics, authentication logs and security events used to protect and improve the service.`,
  },
  {
    title: '3. Why We Process Your Data',
    body: `We process personal data for the following purposes and legal bases:\n\n• Contract Performance: To provide the trade management service you signed up for, including customers, jobs, documents, forms, reminders, worker management, calendar scheduling, certificate generation and document delivery.\n• Legal Obligation: To support compliance workflows where records must be retained or produced under applicable law or regulation, including gas safety documentation where relevant.\n• Legitimate Interests: To secure the app, maintain audit trails, prevent misuse, improve features, send operational notifications and provide customer support.\n• Consent: For optional communications or optional features where consent is the appropriate basis. You may withdraw consent at any time where consent is relied upon.`,
  },
  {
    title: '4. Data Sharing',
    body: `We share personal data only where necessary to operate the service:\n\n• Supabase (database, authentication and file storage): Stores account data, structured records and generated document files.\n• Expo Push Notification Service: Processes device push tokens and notification payloads to deliver app notifications.\n• Resend (transactional email): Processes recipient email addresses, email content and attachments when you send documents or reminders by email through the app.\n• PDF and Email Recipients: Documents you send or share may contain personal data, technical readings and signatures. You control the recipients.\n• Third-Party Websites Opened by You: Toolbox resources such as boiler manual sites or supplier links are external services with their own terms and privacy policies.\n\nWe do not sell personal data and we do not use personal data for advertising or profiling.`,
  },
  {
    title: '5. Data Retention',
    body: `• Account data is retained for as long as your account remains active and for a reasonable period afterwards where needed for security, dispute handling or legal compliance.\n• Customer, job, scheduling and worker records are retained until deleted by your company or removed as part of account deletion, subject to any legal retention requirement.\n• Gas safety and related compliance records are retained for at least the minimum period required by applicable law where such retention obligations apply.\n• Reminder logs, email delivery records and audit events may be retained for evidential, fraud-prevention and support purposes.\n• Generated PDFs and document snapshots stored in cloud storage follow the retention period of the underlying record unless deleted earlier where permitted.\n• If you delete your account, personal data is deleted or anonymised within a reasonable operational period except where longer retention is required by law, to resolve disputes or to enforce our terms.`,
  },
  {
    title: '6. Your Rights',
    body: `Depending on your location and applicable law, you may have rights to access, rectify, erase, export, restrict or object to certain processing of your personal data, and to withdraw consent where consent is relied upon. Company administrators are responsible for handling requests relating to customer, tenant, landlord and worker data they control. You can use the app settings where available or contact support for assistance. You also have the right to lodge a complaint with your local data protection authority, such as the Information Commissioner's Office (ICO) in the UK.`,
  },
  {
    title: '7. Data Security',
    body: `We implement technical and organisational safeguards designed to protect personal data, including encrypted transport, access controls, authentication protections, company-level segregation, row-level security and controlled access to stored files. No method of transmission, storage or processing is completely secure, so we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of devices, login credentials and any exported or shared documents. In the event of a personal data breach affecting your account, we will notify you without undue delay as required by law.`,
  },
  {
    title: '8. International Transfers',
    body: `Where service providers process data outside your jurisdiction, we take reasonable steps to ensure appropriate safeguards are in place, such as contractual protections and vendor security commitments, where required by applicable law.`,
  },
  {
    title: "9. Children's Privacy",
    body: `GasPilot is intended for business use by tradespeople and their teams and is not directed to children. We do not knowingly collect personal data from children for consumer use.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this privacy policy from time to time to reflect legal, technical or product changes, including new forms, workflows, calculators or document types. We may notify you of material changes through the app, by email or by updating the date shown on this page.`,
  },
  {
    title: '11. Contact',
    body: `If you have questions about this privacy policy or need help with data protection requests, please contact Mohammed Khan (trading as Blue Flame Studios) through the app Settings or by emailing support@gaspilot.app.`,
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen pt-8 sm:pt-12">
      <SEO
        title="Privacy Policy — GasPilot Data Protection"
        description="GasPilot privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant with full data export and deletion rights."
        path="/privacy"
      />

      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-[var(--fg-dim)] text-xs font-medium uppercase tracking-widest mb-4">GDPR Compliant</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-3">Privacy Policy</h1>
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
          <Link to="/terms" className="text-[var(--fg-muted)] hover:text-[var(--fg)] text-sm transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}
