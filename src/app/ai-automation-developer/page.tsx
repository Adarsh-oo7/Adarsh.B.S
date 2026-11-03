import type { Metadata } from 'next';
import AiAutomationClient from './AiAutomationClient';

export const metadata: Metadata = {
  title: 'Hire Freelance AI Automation Developer | LLM, AI Agents, n8n & RAG | Adarsh B S',
  description:
    'Hire Adarsh B S — Senior Freelance AI Automation Developer & Full-Stack AI Engineer in India. Custom AI agents, OpenAI/Claude/Gemini LLM integrations, RAG pipelines, n8n workflow automation, and Meta WhatsApp Cloud API bots. Serving UK (£28–£45/hr), Australia (AUD 55–85/hr), UAE (AED), US ($35–$55/hr), and India (₹2,000–₹3,500/hr) with 0% agency markup.',
  keywords: [
    'hire AI automation developer india',
    'freelance AI developer for hire',
    'AI agent developer freelance',
    'n8n automation developer india',
    'LLM integration developer',
    'freelance RAG pipeline developer',
    'whatsapp cloud api AI bot developer',
    'hire AI engineer UK',
    'hire AI developer australia',
    'hire AI automation consultant UAE dubai',
    'openai claude gemini API integration freelancer',
    'business workflow automation developer india',
    'custom AI chatbot developer kerala india',
    'python AI agent developer for hire',
    'ai chatbot development kerala',
    'ai agent builder in kochi',
    'ai agent development company in kochi',
    'ai agent development company in cochin',
    'ai automation agency near me',
    'ai business automation agency',
    'whatsapp automation restaurants kerala',
    'digital product automation'
  ],
  alternates: {
    canonical: 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/',
  },
  openGraph: {
    title: 'Hire Freelance AI Automation Developer | LLM, AI Agents, n8n & RAG | Adarsh B S',
    description:
      'Production-ready AI agents, RAG knowledge systems, n8n workflow automation, and WhatsApp Cloud API bots engineered for UK, Australian, UAE, US, and Indian businesses.',
    url: 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/',
    siteName: 'Adarsh B S - Freelance AI Automation & Full-Stack Developer',
    images: [
      {
        url: '/assets/adarsh-consulting-meeting.jpg',
        width: 1024,
        height: 682,
        alt: 'Hire Freelance AI Automation Developer - Adarsh B S',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Freelance AI Automation Developer | LLM, AI Agents, n8n & RAG | Adarsh B S',
    description:
      'Hire a senior AI automation engineer for custom LLM integrations, RAG pipelines, n8n workflows, and WhatsApp AI agents. 0% agency markup.',
    images: ['/assets/adarsh-consulting-meeting.jpg'],
  },
};

export default function AiAutomationDeveloperPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/#breadcrumb',
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
            name: 'Hire AI Automation Developer',
            item: 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/#service',
        name: 'Freelance AI Automation, LLM Integration & AI Agent Development',
        serviceType: 'AI Automation & Custom LLM Engineering',
        provider: {
          '@type': 'Person',
          name: 'Adarsh B S',
          url: 'https://adarsh.digitalproductsolutions.in/',
          jobTitle: 'Senior Full-Stack & AI Automation Architect',
        },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'India' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'AI Automation & Agent Engineering Sprints',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'WhatsApp Cloud API AI Agent & Lead Qualification Bot',
              description: '24/7 conversational AI agent integrated with Meta WhatsApp Cloud API, CRM webhook sync, and automated booking workflows.',
              price: '650',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              name: 'n8n & Python Business Workflow Automation Sprint',
              description: 'End-to-end multi-app workflow automation connecting CRM, ERP, email, Slack, invoicing, and custom webhooks.',
              price: '500',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              name: 'Custom RAG Pipeline & Enterprise LLM Integration',
              description: 'Private Retrieval-Augmented Generation (RAG) system using OpenAI/Claude/Gemini and PostgreSQL pgvector on your proprietary business documents.',
              price: '1200',
              priceCurrency: 'USD',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://adarsh.digitalproductsolutions.in/ai-automation-developer/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is your hourly and project rate as a freelance AI automation developer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For international clients (UK, Australia, UAE, US), senior AI automation engineering is billed at $35 to $55/hr (£28 to £45/hr GBP / AUD 55 to 85/hr / 130 to 200 AED/hr). For domestic Indian businesses, rates are ₹2,000 to ₹3,500/hr. Fixed-scope AI automation sprints (such as WhatsApp AI agents or n8n workflow pipelines) start from $500 to $1,500 (£400 to £1,200 / ₹40,000 to ₹1,20,000) with 0% agency markup.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you build custom n8n workflows and Python automations for our existing CRM or ERP?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Adarsh architects self-hosted and cloud n8n workflow automations alongside custom Python/Django microservices. These connect seamlessly with Odoo ERP, HubSpot, Salesforce, Zoho, Stripe, Razorpay, Google Workspace, and Meta WhatsApp Cloud API to eliminate repetitive manual data entry and speed up lead response times to under 10 seconds.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build and deploy a custom AI agent or RAG pipeline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A focused workflow automation or WhatsApp AI lead-qualification agent typically ships in 1 to 2 weeks. A full Retrieval-Augmented Generation (RAG) pipeline with vector database indexing (pgvector/Pinecone), role-based access control, and a custom Next.js interface takes 2 to 4 weeks, including a shadow-run testing phase before production cutover.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you ensure data privacy and security when integrating LLMs like OpenAI or Claude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All AI integrations are engineered using zero-data-retention enterprise API endpoints (OpenAI API, Anthropic Claude API, Google Vertex/Gemini API) where your proprietary data is never used to train public models. You own 100% of the source code, vector embeddings, and API keys on your own cloud infrastructure under a strict bilateral NDA.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you collaborate with clients in the UK, Australia, and UAE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Adarsh provides 4.5 to 5 hours of daily morning overlap for UK/European teams (IR35-exempt B2B contracts), 3.5 to 5.5 hours of overlap for Australian businesses (AEST), and near-identical business hours for UAE/Gulf clients (GST is only 1.5 hours behind IST). Communication happens directly via Slack, Microsoft Teams, Google Meet, and WhatsApp.',
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
      <AiAutomationClient />
    </>
  );
}

