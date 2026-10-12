import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Adarsh B S - IT Consultant',
  description: 'Privacy Policy for applications, CRM systems, and digital services managed by Adarsh B S.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-container">
      <div className="legal-card">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1>Privacy Policy</h1>
        <p className="effective-date">Last Updated: October 2026</p>
        
        <p>
          This application connects with Facebook, Instagram, and WhatsApp Business APIs to provide analytics, marketing insights, lead tracking, CRM management, and business reporting functionality.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>Facebook Page analytics & insights</li>
          <li>Instagram Business profile metrics</li>
          <li>WhatsApp Business interaction data and delivery logs</li>
          <li>CRM contact details submitted directly by authorized users</li>
        </ul>

        <h2>How Information is Used</h2>
        <ul>
          <li>To generate real-time performance analytics dashboards</li>
          <li>To automate business lead notification and message workflows</li>
          <li>To optimize customer relationship management (CRM) workflows</li>
        </ul>

        <h2>Data Protection and Security</h2>
        <p>
          We implement industry-standard encryption, token-based API authentication, and strict access controls. Data is never sold to third parties or used for external advertising networks.
        </p>

        <h2>Contact Us</h2>
        <p>
          For privacy concerns or data inquiries, contact:{' '}
          <a href="mailto:adarshsarachandran@gmail.com" className="legal-email">
            adarshsarachandran@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
