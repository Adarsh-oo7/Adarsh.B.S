import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Adarsh B S - IT Consultant',
  description: 'Terms of Service for software platforms and API integrations developed by Adarsh B S.',
};

export default function TermsPage() {
  return (
    <main className="legal-container">
      <div className="legal-card">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1>Terms of Service</h1>
        <p className="effective-date">Last Updated: October 2026</p>

        <p>
          This platform provides CRM, analytics, marketing dashboard, lead management, and messaging integrations using official Meta APIs and enterprise web technologies.
        </p>

        <h2>Usage and Compliance</h2>
        <p>
          Users agree to use the platform responsibly and comply with Meta Platform Policies, developer guidelines, and applicable local and international laws.
        </p>

        <h2>Restrictions</h2>
        <ul>
          <li>No spam or unsolicited promotional messaging activity</li>
          <li>No unauthorized data harvesting or reverse-engineering</li>
          <li>No illegal, abusive, or fraudulent usage</li>
          <li>No misuse or policy violation of Meta & third-party APIs</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          The platform and integration tools are provided &quot;as is&quot; without warranties of uninterrupted availability or external platform uptime.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions regarding these Terms, reach out to:{' '}
          <a href="mailto:adarshsarachandran@gmail.com" className="legal-email">
            adarshsarachandran@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
