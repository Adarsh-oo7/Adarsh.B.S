import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'User Data Deletion | Adarsh B S - IT Consultant',
  description: 'Data deletion policy and request instructions for Adarsh B S integrated platforms.',
};

export default function DeleteDataPage() {
  return (
    <main className="legal-container">
      <div className="legal-card">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1>User Data Deletion Instructions</h1>
        <p className="effective-date">Compliance with Meta Platform & Privacy Regulations</p>

        <p>
          If you would like your connected Facebook, Instagram, or WhatsApp business data removed from our systems, you can request full deletion anytime.
        </p>

        <h2>How to Request Data Deletion</h2>
        <ol>
          <li>Send an email with the subject <strong>&quot;Data Deletion Request&quot;</strong> to the email below.</li>
          <li>Specify your account identifier, Facebook Page ID, or phone number used in the application.</li>
          <li>Our engineering team will acknowledge your request and purge all related cached records and access tokens within 48 to 72 business hours.</li>
        </ol>

        <h2>Direct Contact</h2>
        <p>
          Email:{' '}
          <a href="mailto:adarshsarachandran@gmail.com" className="legal-email">
            adarshsarachandran@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
