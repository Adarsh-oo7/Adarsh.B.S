import type { Metadata } from 'next';
import OdooClient from './OdooClient';

export const metadata: Metadata = {
  title: 'Freelance Odoo Developer in Kerala | ERP Customization & Modules | Adarsh B S',
  description:
    'Hire Adarsh B S — Premier freelance Odoo ERP developer in Kerala (Trivandrum Technopark & Kochi Infopark). Specializing in Odoo v14–v18 customization, custom module development, Python/PostgreSQL, Tally data migration, WhatsApp API integration, and Odoo.sh deployments at transparent freelance rates.',
  keywords: [
    'freelance odoo developer in kerala',
    'odoo developer kerala',
    'odoo erp developer trivandrum',
    'odoo developer kochi',
    'hire freelance odoo developer kerala',
    'odoo erp customization kerala',
    'odoo python developer',
    'odoo module development kerala',
    'technopark odoo developer',
    'infopark odoo developer',
    'odoo tally integration kerala',
    'odoo tally migration kerala',
    'odoo developer calicut',
    'odoo erp consultant kerala',
    'odoo 17 developer kerala',
    'odoo 18 developer kerala',
    'freelance odoo developer for uae',
    'odoo developer for dubai clients',
    'odoo pos customization kerala',
    'odoo accounting developer kerala'
  ],
  alternates: {
    canonical: 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/',
  },
  openGraph: {
    title: 'Freelance Odoo Developer in Kerala | Custom ERP Modules | Adarsh B S',
    description:
      'Premier freelance Odoo developer in Kerala. Custom module development (Odoo v14-v18), core app tailoring, Tally migrations, and WhatsApp integration at transparent freelance rates.',
    url: 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/',
    siteName: 'Adarsh B S - Freelance Software Developer & IT Consultant',
    images: [
      {
        url: '/assets/adarsh-consulting-meeting.jpg',
        width: 1024,
        height: 682,
        alt: 'Freelance Odoo ERP Developer in Kerala - Adarsh B S',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Odoo Developer in Kerala | Adarsh B S',
    description:
      'Premier freelance Odoo ERP developer in Kerala. Specializing in Odoo v14-v18, custom Python modules, Tally migration, and Odoo.sh cloud hosting.',
    images: ['/assets/adarsh-consulting-meeting.jpg'],
  },
};

export default function OdooDeveloperPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://adarsh.digitalproductsolutions.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Freelance Odoo Developer in Kerala',
            item: 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/#service',
        name: 'Freelance Odoo ERP Developer in Kerala — Adarsh B S',
        url: 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/',
        telephone: '+919400355185',
        priceRange: '₹₹ / $$',
        currenciesAccepted: 'INR, AED, USD, EUR, GBP, SAR, QAR',
        image: 'https://adarsh.digitalproductsolutions.in/assets/adarsh-consulting-meeting.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Thiruvananthapuram',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '8.5241',
          longitude: '76.9366',
        },
        provider: {
          '@type': 'Person',
          name: 'Adarsh B S',
          url: 'https://adarsh.digitalproductsolutions.in/',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Kerala' },
          { '@type': 'City', name: 'Thiruvananthapuram' },
          { '@type': 'City', name: 'Kochi' },
          { '@type': 'City', name: 'Kozhikode' },
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'Qatar' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Odoo ERP Development & Customization Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Odoo Custom Module Development',
              description: 'Bespoke Odoo Python modules built for unique operational workflows on Odoo v14 through v18 starting from ₹25,000.',
            },
            {
              '@type': 'Offer',
              name: 'Tally to Odoo Data Migration',
              description: 'Seamless migration of charts of accounts, vendor/customer ledgers, stock balances, and opening entries from Tally ERP/Prime to Odoo.',
            },
            {
              '@type': 'Offer',
              name: 'Hourly Odoo Architecture & Consulting',
              description: 'Expert troubleshooting, workflow automation, and custom views at ₹1,800 – ₹3,500 / hr ($25 – $45 / hr).',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://adarsh.digitalproductsolutions.in/odoo-developer-kerala/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which versions of Odoo ERP do you develop and customize?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Adarsh develops and customizes Odoo versions 14, 15, 16, 17, and 18 for both Community and Enterprise editions, deploying on Odoo.sh, self-hosted Docker, and cloud VPS environments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you migrate our business data from Tally to Odoo in Kerala?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Adarsh specializes in complete data migration from Tally ERP 9 / Tally Prime to Odoo. This includes Chart of Accounts mapping, customer/vendor master ledgers, inventory valuation, stock on hand, and opening balance reconciliation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you integrate Odoo with WhatsApp Business API and Indian payment gateways?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Adarsh engineers automated WhatsApp notifications for invoice generation, payment receipts, order dispatch, and payment link triggers via Razorpay, Stripe, and UPI.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why hire a freelance Odoo developer instead of an official Odoo Gold/Silver Partner?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Official ERP partner agencies charge heavy corporate retainers and assign junior trainees to your project. Working directly with Adarsh B S saves up to 60% on implementation budgets, provides direct access to the senior Python developer, and guarantees rapid turnaround on custom business logic without bureaucratic ticketing delays.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OdooClient />
    </>
  );
}
