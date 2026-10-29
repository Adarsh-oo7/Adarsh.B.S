import type { Metadata } from 'next';
import HireDeveloperClient from './HireDeveloperClient';

export const metadata: Metadata = {
  title: 'Hire a Freelance Software Developer in Kerala | Senior IT Consultant | Adarsh B S',
  description:
    'Hire Adarsh B S — Senior Freelance Software Developer & IT Consultant in Kerala (Trivandrum Technopark & Kochi Infopark). Specializing in Next.js 15, Python/Django, Odoo ERP, and high-speed APIs. Direct architect collaboration, 0% agency markup, 100% IP ownership, and transparent rates (₹1,500–₹3,500/hr, $25–$45/hr). Serving Kerala, Gulf/UAE Malayalis, and global clients.',
  keywords: [
    'hire freelance software developer in kerala',
    'hire software developer kerala',
    'hire freelance developer in kerala',
    'hire freelance developer kerala',
    'freelance software developer in kerala',
    'freelance developer in kerala',
    'hire full stack developer kerala',
    'hire web developer kerala',
    'hire python developer kerala',
    'hire odoo developer kerala',
    'freelance software developer rates kerala',
    'freelance developer rates in kerala',
    'freelance web developer rates kerala',
    'freelance web developer kochi',
    'freelance software developer trivandrum',
    'hire developer technopark trivandrum',
    'hire developer infopark kochi',
    'hire software architect kerala',
    'malayali software developer uae',
    'hire freelance developer in kerala from dubai',
    'freelance developer for nri businesses',
    'dedicated freelance developer vs agency'
  ],
  alternates: {
    canonical: 'https://adarsh.digitalproductsolutions.in/hire-developer/',
  },
  openGraph: {
    title: 'Hire a Freelance Software Developer in Kerala | Senior Architect Adarsh B S',
    description:
      'Direct senior architect collaboration with zero agency overhead. Next.js 15, Python Django, Odoo ERP, and sub-second SEO architectures. Transparent rates from ₹1,500/hr ($25/hr) and ₹50,000 MVPs.',
    url: 'https://adarsh.digitalproductsolutions.in/hire-developer/',
    siteName: 'Adarsh B S - Freelance Software Developer & IT Consultant',
    images: [
      {
        url: '/assets/adarsh-consulting-meeting.jpg',
        width: 1024,
        height: 682,
        alt: 'Hire Adarsh B S - Senior Freelance Software Developer in Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Freelance Software Developer in Kerala | Adarsh B S',
    description:
      'Senior freelance full-stack engineer and IT consultant in Kerala. Direct architect access, 100% IP ownership, and zero agency markup.',
    images: ['/assets/adarsh-consulting-meeting.jpg'],
  },
};

export default function HireDeveloperPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://adarsh.digitalproductsolutions.in/hire-developer/#breadcrumb',
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
            name: 'Hire Freelance Developer in Kerala',
            item: 'https://adarsh.digitalproductsolutions.in/hire-developer/',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://adarsh.digitalproductsolutions.in/hire-developer/#service',
        name: 'Hire Freelance Software Developer in Kerala — Adarsh B S',
        url: 'https://adarsh.digitalproductsolutions.in/hire-developer/',
        telephone: '+919400355185',
        priceRange: '₹₹ / $$',
        currenciesAccepted: 'INR, AED, USD, EUR, GBP, AUD, SAR, QAR',
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
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Australia' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Freelance Software Development & Architecture Packages',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Fixed-Scope MVP Delivery',
              description: 'Full-cycle MVP development using Next.js 15, Python/Django, PostgreSQL, and cloud deployment starting from ₹50,000 ($800).',
              price: '50000',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              name: 'Milestone-Based Agile Sprints',
              description: 'Senior hourly software engineering and architecture consulting at ₹1,500 – ₹3,500 / hr ($25 – $45 / hr).',
            },
            {
              '@type': 'Offer',
              name: 'Architecture & Code Performance Audit',
              description: 'Comprehensive technical audit, Core Web Vitals speed tuning, and database optimization with 48-hour delivery.',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://adarsh.digitalproductsolutions.in/hire-developer/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why should I hire a freelance software developer in Kerala instead of an agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hiring Adarsh B S connects you directly with the senior architect building your product. Traditional IT agencies in Kochi and Technopark charge 200% to 400% markups and pass work to junior trainees or interns. Working directly with Adarsh guarantees 0% agency markup, 100% intellectual property ownership from day one, direct Git commit access, and sub-second Next.js and Python performance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the typical freelance software developer rates in Kerala for 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Senior freelance software developer and architecture rates in Kerala range between ₹1,500 and ₹3,500 per hour (or $25 to $45 per hour for global and Gulf/UAE clients). Fixed-price MVP sprints for modern web apps powered by Next.js 15, Python/Django, and PostgreSQL start from ₹50,000 ($800) with clearly defined milestone deliverables.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you work with Malayalis and businesses in Dubai, UAE, and the GCC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Adarsh collaborates actively with Malayali entrepreneurs and businesses across Dubai, Abu Dhabi, Sharjah, Saudi Arabia, and Qatar. Gulf Standard Time (GST UTC+4) is only 1.5 hours behind IST, making coordination effortless. Communication is handled via direct WhatsApp voice/chat and Google Meet, with multi-currency billing in AED, SAR, USD, or INR.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you build a custom web application or MVP completely from scratch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Adarsh handles end-to-end custom product delivery, from initial data modeling and architecture blueprints to backend REST APIs (Python/Django or Node.js), frontend responsive UI (Next.js 15 / React 19), and production deployment on AWS, Vercel, or Docker.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the intellectual property (IP) and source code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You own 100% of all intellectual property, source code, database architectures, and documentation from day one. All commits are pushed directly to your private GitHub or GitLab repository.',
            },
          },
          {
            '@type': 'Question',
            name: 'How quickly can we start and what is the onboarding process?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach out via WhatsApp at +91 9400355185 or email adarshsarachandran@gmail.com. We schedule a 30-minute discovery call within 24 hours, define technical specifications and milestones, sign an NDA if required, and kick off development immediately.',
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
      <HireDeveloperClient />
    </>
  );
}
