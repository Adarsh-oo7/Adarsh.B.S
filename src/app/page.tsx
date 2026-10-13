'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  Code2,
  Globe,
  Layout,
  Smartphone,
  ShoppingCart,
  Search,
  Zap,
  Database,
  Cpu,
  Share2,
  Wrench,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Star,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

function GithubIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function MediumIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function QuoraIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.784 19.467c-.64 0-1.233-.146-1.776-.44a7.925 7.925 0 01-1.393 1.144c-.754.49-1.558.826-2.414 1.008l-.201-.482c.983-.757 1.838-1.688 2.564-2.793a6.568 6.568 0 01-1.464-4.227c0-1.876.688-3.468 2.062-4.777 1.375-1.309 3.064-1.964 5.067-1.964 2.003 0 3.692.655 5.067 1.964 1.374 1.309 2.061 2.901 2.061 4.777s-.687 3.469-2.061 4.778c-1.375 1.308-3.064 1.963-5.067 1.963zm.001-1.922c1.47 0 2.685-.494 3.645-1.482.96-.988 1.44-2.227 1.44-3.716 0-1.49-.48-2.729-1.44-3.717-.96-.988-2.175-1.482-3.645-1.482s-2.685.494-3.645 1.482c-.96.988-1.44 2.227-1.44 3.717 0 1.489.48 2.728 1.44 3.716.96.988 2.175 1.482 3.645 1.482z" />
    </svg>
  );
}

function AboutMeIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={20} height={20} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', flexShrink: 0, ...style }} className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm6 7.25h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.5h-2v-6h2v.85c.62-.64 1.51-1.05 2.5-1.05 1.93 0 3.5 1.57 3.5 3.5v2.7z" />
    </svg>
  );
}

export default function HomePage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'client' | 'founded'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Consulting',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('adarsh_theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('adarsh_theme', nextTheme);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:adarshsarachandran@gmail.com?subject=Consulting Inquiry from ${encodeURIComponent(
      formState.name
    )} - ${encodeURIComponent(formState.service)}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService Needed: ${formState.service}\n\nProject Details:\n${formState.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  // 12 Recommended Services
  const servicesList = [
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      icon: <Briefcase className="w-6 h-6" />,
      desc: 'Strategic technology advisory, stack selection, scalability planning, and digital transformation for startups and established enterprises.',
      features: ['Tech Architecture Review', 'Cost & Scalability Optimization', 'Vendor & Framework Evaluation']
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      icon: <Code2 className="w-6 h-6" />,
      desc: 'Custom, robust enterprise software built to solve specific business bottlenecks with clean, modular Python and TypeScript code.',
      features: ['Custom Enterprise Logic', 'Modular Microservices', 'High-Security Standards']
    },
    {
      id: 'website-dev',
      title: 'Website Development',
      icon: <Globe className="w-6 h-6" />,
      desc: 'Modern, blazing-fast, responsive business websites engineered for maximum engagement, clear brand messaging, and client conversions.',
      features: ['Mobile-First Responsive Layouts', 'Speed & Accessibility Focused', 'Clean Semantic Code']
    },
    {
      id: 'webapp-dev',
      title: 'Web Application Development',
      icon: <Layout className="w-6 h-6" />,
      desc: 'Interactive, data-rich SaaS platforms, client portals, and web applications using Next.js, React.js, and Django REST framework.',
      features: ['Dynamic Client Portals', 'State Management & Realtime UI', 'Role-Based Access Control']
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application Development',
      icon: <Smartphone className="w-6 h-6" />,
      desc: 'Cross-platform mobile applications providing native-grade performance, intuitive user experience, and real-time backend synchronization.',
      features: ['iOS & Android Compatibility', 'Offline-First Capabilities', 'Push Notifications & Sync']
    },
    {
      id: 'ecommerce-dev',
      title: 'E-commerce Development',
      icon: <ShoppingCart className="w-6 h-6" />,
      desc: 'High-converting online store architectures with seamless product catalogs, secure checkout gateways, and automated inventory sync.',
      features: ['Payment Gateways (Razorpay, Stripe)', 'Cart & Inventory Management', 'Multi-Currency Support']
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      icon: <Search className="w-6 h-6" />,
      desc: 'Comprehensive on-page and semantic search optimization designed to position your brand at the very top of Google and AI search engines.',
      features: ['High-Intent Keyword Ranking', 'Entity & Semantic SEO', 'Content Architecture Auditing']
    },
    {
      id: 'technical-seo',
      title: 'Technical SEO & Website Optimization',
      icon: <Zap className="w-6 h-6" />,
      desc: 'Deep technical audits, Core Web Vitals acceleration, structured data (JSON-LD schema), crawlability enhancement, and sub-second load times.',
      features: ['Perfect Core Web Vitals (LCP, CLS)', 'Schema.org Rich Snippets', 'Crawl Budget Optimization']
    },
    {
      id: 'crm-dev',
      title: 'CRM Development',
      icon: <Database className="w-6 h-6" />,
      desc: 'Custom Customer Relationship Management & Odoo ERP systems (v14-v18) to automate lead capture, pipeline stages, inventory tracking, and WhatsApp/email communication.',
      features: ['Odoo ERP Customization (v14-v18)', 'Lead Capture & Sales Pipelines', 'WhatsApp & Email Triggers']
    },
    {
      id: 'automation',
      title: 'Business Process Automation',
      icon: <Cpu className="w-6 h-6" />,
      desc: 'Eliminate repetitive manual bottlenecks through Odoo automated actions, Python cron jobs, Tally data migration pipelines, and automated business workflows.',
      features: ['Odoo Automated Workflows', 'Data Sync & Tally Migrations', 'Reduced Operational Costs']
    },
    {
      id: 'api-dev',
      title: 'API Development & Integration',
      icon: <Share2 className="w-6 h-6" />,
      desc: 'Robust RESTful API design, third-party integrations (Meta Graph API, WhatsApp Business API, CRM, payment processors), and webhook handling.',
      features: ['Meta & WhatsApp Business APIs', 'Secure JWT/OAuth Flow', 'Comprehensive API Documentation']
    },
    {
      id: 'website-maintenance',
      title: 'Website Maintenance',
      icon: <Wrench className="w-6 h-6" />,
      desc: 'Proactive maintenance, 24/7 uptime monitoring, security patching, dependency upgrades, regular backups, and ongoing feature updates.',
      features: ['Security Patching & Backups', 'Uptime & Speed Monitoring', 'Dedicated Tech Support']
    }
  ];

  // Verified Clients & Founded Ventures
  const clientsList = [
    {
      id: 'carencure',
      name: "Care 'N' Cure Australia",
      flag: '🇦🇺 Australia',
      role: 'Client • IT Consulting & SEO',
      image: '/assets/clients/carencure.png',
      desc: 'Strategic IT consulting, organic search growth, and technical SEO architecture for a prominent Australian healthcare and wellness provider.',
      domains: [
        { label: 'carencure.com.au', url: 'https://carencure.com.au/' }
      ],
      services: 'Technical SEO • Organic Growth • IT Consulting'
    },
    {
      id: 'novora',
      name: 'Novora Global Health',
      flag: '🇬🇧 UK • 🇩🇪 Germany • 🌐 Global',
      role: 'Client • Healthcare & Life Sciences',
      image: '/assets/clients/novora.png',
      desc: 'International life-sciences digital consulting, multi-regional domain architecture (.com, .de, .co.uk), high-impact technical SEO, and IT scalability for UK & European markets.',
      domains: [
        { label: 'novoraglobalhealth.co.uk (UK)', url: 'https://novoraglobalhealth.co.uk/' },
        { label: 'novoraglobalhealth.de (DE)', url: 'https://novoraglobalhealth.de/' },
        { label: 'novoraglobalhealth.com (Global)', url: 'https://novoraglobalhealth.com/' }
      ],
      services: 'Multi-Region Architecture • SEO • IT Consulting'
    },
    {
      id: 'mangrovespot',
      name: 'Mangrove Spot',
      flag: '🇮🇳 Kerala, India',
      role: 'Client • IT Consulting & Organic Growth',
      image: '/assets/clients/mangrovespot.png',
      desc: 'End-to-end IT consulting and organic business growth implementation for a premier Kerala eco-tourism enterprise, delivering proven organic customer acquisition.',
      domains: [
        { label: 'mangrovespot.in', url: 'https://www.mangrovespot.in/' }
      ],
      services: 'IT Consulting • Business Automation • Organic Growth'
    },
    {
      id: 'mangrovemoments',
      name: 'Mangrove Moments',
      flag: '🇮🇳 Kerala, India',
      role: 'Client • Web Dev & SEO Strategy',
      image: '/assets/clients/mangrovemoments.jpg',
      desc: 'Custom, high-speed website development and conversion-oriented search engine optimization driving direct customer bookings and search visibility.',
      domains: [
        { label: 'mangrovemoments.com', url: 'https://www.mangrovemoments.com/' }
      ],
      services: 'Website Development • SEO Consulting • Booking Flow'
    },
    {
      id: 'digitalproductsolutions',
      name: 'Digital Product Solutions',
      flag: '🌐 India & Global',
      role: 'Founder & Technology Management',
      image: '/assets/clients/digitalproductsolutions.png',
      desc: 'Founded digital engineering firm delivering enterprise full-stack development, modern cloud architectures, and digital transformation for growing businesses.',
      domains: [
        { label: 'digitalproductsolutions.in', url: 'https://www.digitalproductsolutions.in/' }
      ],
      services: 'Founder • Technology Management • Full-Stack Advisory'
    },
    {
      id: 'keralasellers',
      name: 'Kerala Sellers',
      flag: '🇮🇳 Kerala, India',
      role: 'Founder & Growth Specialist',
      image: '/assets/clients/keralasellers.png',
      desc: 'Founded statewide merchant network and marketplace platform connecting local Kerala sellers with digital buyers through aggressive organic SEO and local search.',
      domains: [
        { label: 'keralasellers.in', url: 'https://www.keralasellers.in/' }
      ],
      services: 'Founder • E-commerce Platform • Organic SEO Specialist'
    },
    {
      id: 'kpscmaster',
      name: 'KPSC Master',
      flag: '🇮🇳 Kerala, India',
      role: 'Founder, Lead Architect & SEO Specialist',
      image: '/assets/clients/kpscmaster.png',
      desc: 'Founded high-volume educational platform for Kerala Public Service Commission aspirants, engineered for lightning speed, heavy concurrent traffic, and organic dominance.',
      domains: [
        { label: 'kpscmaster.in', url: 'https://www.kpscmaster.in/' }
      ],
      services: 'Founder • System Architecture • High-Volume Organic SEO'
    }
  ];

  // Portfolio Projects - Real Client Deployments & Founded Ventures
  const projectsList = [
    {
      id: 1,
      title: "Care 'N' Cure Australia - Healthcare Growth Platform",
      category: 'client',
      image: '/assets/clients/carencure.png',
      tag: 'Australian Enterprise Client',
      desc: "Full-scale organic SEO growth, technical performance optimization, and IT consulting for an Australian healthcare enterprise, driving sustained multi-channel client acquisition across Sydney and Melbourne.",
      tech: ['IT Consulting', 'Technical SEO', 'Organic Growth', 'Web Optimization'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://carencure.com.au/'
    },
    {
      id: 2,
      title: 'Novora Global Health Multi-Region Ecosystem',
      category: 'client',
      image: '/assets/clients/novora.png',
      tag: 'Global & UK / EU Client',
      desc: 'Architected cross-border digital health platform infrastructure serving the UK, Germany, and international markets with multi-regional domain routing, performance tuning, and international SEO.',
      tech: ['Multi-Region Arch', 'Next.js / TypeScript', 'International SEO', 'API Infrastructure'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://novoraglobalhealth.com/'
    },
    {
      id: 3,
      title: 'Mangrove Spot - Business Consulting & Growth Engine',
      category: 'client',
      image: '/assets/clients/mangrovespot.png',
      tag: 'Kerala Business Client',
      desc: 'End-to-end IT consulting and strategic organic SEO delivering proven search engine domination and multi-fold customer booking expansion for premier Kerala eco-tourism destination.',
      tech: ['IT Consulting', 'Local Search Dominance', 'Performance Engineering', 'Organic Growth'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://www.mangrovespot.in/'
    },
    {
      id: 4,
      title: 'Mangrove Moments - Experiential Tourism & Web Platform',
      category: 'client',
      image: '/assets/clients/mangrovemoments.jpg',
      tag: 'Tourism & Events Client',
      desc: 'Custom web application development, responsive client booking workflows, and search engine optimization consulting for luxury Kerala experiential events and tourism.',
      tech: ['Web App Development', 'SEO Consulting', 'Responsive Design', 'Lead Automation'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://www.mangrovemoments.com/'
    },
    {
      id: 5,
      title: 'Digital Product Solutions - Agency & Cloud Architecture',
      category: 'founded',
      image: '/assets/clients/digitalproductsolutions.png',
      tag: 'Founded Tech Venture',
      desc: 'Founded and engineered enterprise digital solutions agency delivering custom web platforms, cloud architecture, and end-to-end business automation for international businesses.',
      tech: ['Founder & Architect', 'Next.js', 'Python / Django', 'Cloud Systems'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://www.digitalproductsolutions.in/'
    },
    {
      id: 6,
      title: 'Kerala Sellers - B2B Commercial Marketplace',
      category: 'founded',
      image: '/assets/clients/keralasellers.png',
      tag: 'Founded Commercial Platform',
      desc: 'State-wide commercial vendor directory and commerce platform connecting Kerala businesses, engineered with programmatic SEO and high-volume merchant discovery.',
      tech: ['Platform Founder', 'E-Commerce Arch', 'Programmatic SEO', 'PostgreSQL'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://www.keralasellers.in/'
    },
    {
      id: 7,
      title: 'KPSC Master - High-Concurrency EdTech Platform',
      category: 'founded',
      image: '/assets/clients/kpscmaster.png',
      tag: 'Founded EdTech Platform',
      desc: 'High-volume competitive examination portal serving thousands of Kerala Public Service Commission aspirants, engineered for extreme speed, high concurrent load, and organic search ranking.',
      tech: ['Founder & Architect', 'System Architecture', 'High-Traffic SEO', 'Database Optimization'],
      github: 'https://github.com/Adarsh-oo7/',
      demo: 'https://www.kpscmaster.in/'
    }
  ];

  const filteredProjects =
    activeProjectFilter === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === activeProjectFilter);

  // FAQ for Google & LLM Optimization
  const faqs = [
    {
      question: 'Who is Adarsh B S?',
      answer:
        'Adarsh B S (Adarsh Sarachandran) is a premier freelance IT consultant, senior full-stack software developer, Odoo ERP specialist, and technology founder based in Kerala, India. He is the founder of Digital Product Solutions (DPS), KeralaSellers.in, and KPSCMaster.in. With over 3+ years of professional engineering experience across 20+ commercial client projects, he works with international clients in Australia (Care \'N\' Cure), the UK & Germany (Novora Global Health), and Kerala enterprises (Mangrove Spot, Mangrove Moments). He is an independent technology professional, completely distinct from any political figures or legal cases.'
    },
    {
      question: 'How is Adarsh B S known in Kerala and the software industry?',
      answer:
        'In Kerala\'s tech ecosystem (Technopark Trivandrum and Infopark Kochi) and internationally, Adarsh B S is recognized as a high-impact freelance software engineer, Odoo ERP specialist, and IT consultant specializing in Python, Django, Next.js, PostgreSQL, automated business workflows, and top-tier SEO growth.'
    },
    {
      question: 'Who is the top freelance IT consultant in Kerala, India?',
      answer:
        'Adarsh B S is an established freelance IT consultant and full-stack software engineer located in Kerala, India. Bringing over 3+ years of professional development experience and having successfully delivered 20+ business projects, Adarsh helps businesses architect, build, and scale custom web applications, Python/Django backends, SEO strategies, and automated CRM workflows.'
    },
    {
      question: 'What digital services does Adarsh B S provide?',
      answer:
        'Adarsh offers 12 core digital services: IT Consulting, Software Development, Website Development, Web Application Development, Mobile Application Development, E-commerce Development, Search Engine Optimization (SEO), Technical SEO & Website Optimization, CRM Development, Business Process Automation, API Development & Integration (including WhatsApp & Meta APIs), and Ongoing Website Maintenance.'
    },
    {
      question: 'Looking for a freelance Odoo developer in Kerala? What can you build?',
      answer:
        'Adarsh B S offers specialized freelance Odoo ERP development and customization across Kerala (operating across Trivandrum Technopark and Kochi Infopark hubs) and globally. Services include custom module development for Odoo v14 through v18, core app customization (Sales, CRM, Purchase, Inventory, Invoicing/Accounting, HR, eCommerce), data migrations from legacy systems or Tally, third-party REST API integrations, and cloud deployments on Odoo.sh or Docker at flexible freelance rates ($15–$35/hr or fixed milestone pricing).'
    },
    {
      question: 'Why should I hire a freelance IT consultant instead of a large agency?',
      answer:
        'Working directly with Adarsh B S provides direct communication with the senior software engineer executing your code, zero agency markup overhead, faster turnaround times, customized technology recommendations tailored to your budget, and end-to-end accountability from initial conception to post-launch optimization.'
    },
    {
      question: 'How do you optimize websites to rank #1 on Google and AI search engines?',
      answer:
        'We implement an integrated search strategy combining Core Web Vitals acceleration (sub-second load speeds), JSON-LD semantic Schema markup (Person, LocalBusiness, FAQ, Service schemas), high-intent keyword mapping, mobile-first responsive architecture, and AI-crawler compatibility files (such as llms.txt) so both Google and LLMs (ChatGPT, Claude, Perplexity) recognize and cite your business.'
    },
    {
      question: 'Do you work with international clients outside of Kerala and India?',
      answer:
        'Yes. Adarsh works remotely with business clients globally across the United States, United Kingdom, United Arab Emirates (UAE), Europe, and across India, offering transparent communication via video call, WhatsApp, and GitHub project tracking.'
    },
    {
      question: 'How can I discuss my project or request a quotation?',
      answer:
        'You can call directly or message on WhatsApp at +91 9400355185, email adarshsarachandran@gmail.com, or fill out the consultation inquiry form below for a swift response within 24 hours.'
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" id="top-nav">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-logo">
            <span>Adarsh B S</span>
            <span className="brand-badge">IT Consultant</span>
          </Link>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#clients" className="nav-link">Clients</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#testimonials" className="nav-link">Reviews</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle Dark and Light Mode"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <a href="#contact" className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.9rem' }}>
              Hire Consultant
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services (12)</a>
          <a href="#clients" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clients & Ventures</a>
          <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Client Reviews</a>
          <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact & Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>Available for Consulting & Development Projects</span>
            </div>

            <h1 className="hero-title">
              Freelance <span className="text-gradient">Software Developer</span> &amp; IT Consultant in Kerala
            </h1>

            <p className="hero-subtitle">
              <strong style={{ color: 'var(--text-primary)' }}>Adarsh B S</strong> is a premier freelance software developer, Odoo ERP specialist, and IT consultant based in Kerala, India (operating across Trivandrum &amp; Kochi). Architecting custom software, Next.js web applications, Python/Django backends, and organic SEO growth for businesses in Kerala and globally.
            </p>

            <div className="hero-highlights">
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 3+ Years Experience</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 20+ Business Projects</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Odoo ERP &amp; Python Customization</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Global: 🇦🇺 Australia • 🇬🇧 UK • 🇩🇪 Germany • 🇮🇳 India</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Founder: Digital Product Solutions • KeralaSellers • KPSC Master</span>
            </div>

            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary">
                <Sparkles className="w-5 h-5" /> Discuss Your Project
              </a>
              <a href="/assets/cv.pdf" download="Adarsh_BS_CV.pdf" className="btn btn-secondary">
                <Download className="w-5 h-5" /> Download CV
              </a>
              <a
                href="https://wa.me/919400355185?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20an%20IT%20consulting%20or%20software%20development%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" /> WhatsApp Direct
              </a>
            </div>

            {/* Social Channels Connect */}
            <div className="hero-social-connect">
              <span className="social-label">Connect:</span>
              <div className="hero-social-badges">
                <a
                  href="https://www.linkedin.com/in/adarsh-bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="Connect with Adarsh B S on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-orange-500" /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/adarsh_tzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="Follow Adarsh B S on Instagram (@adarsh_tzz)"
                >
                  <InstagramIcon className="w-4 h-4 text-orange-500" /> Instagram
                </a>
                <a
                  href="https://github.com/Adarsh-oo7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="Explore GitHub Repositories"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://medium.com/@adarshsarachandran/adarsh-b-s-7db715a97a2a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="Read Adarsh B S on Medium"
                >
                  <MediumIcon className="w-4 h-4 text-orange-500" /> Medium
                </a>
                <a
                  href="https://www.quora.com/profile/Adarsh-B-S-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="Read Adarsh B S on Quora"
                >
                  <QuoraIcon className="w-4 h-4 text-orange-500" /> Quora
                </a>
                <a
                  href="https://about.me/adarshbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge"
                  title="View Verified Profile on About.me"
                >
                  <AboutMeIcon className="w-4 h-4 text-orange-500" /> about.me
                </a>
              </div>
            </div>

            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-number">3+</span>
                <span className="metric-label">Years Exp</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">20+</span>
                <span className="metric-label">Projects</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">12</span>
                <span className="metric-label">Core Services</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">100%</span>
                <span className="metric-label">Direct Contact</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="hero-visual-card">
            <div className="avatar-frame">
              <div className="avatar-inner">
                <Image
                  src="/assets/adarsh-consulting-meeting.jpg"
                  alt="Adarsh B S - Senior IT Consultant & Full Stack Software Engineer presenting custom web and enterprise solutions"
                  width={1024}
                  height={682}
                  priority
                  className="avatar-image"
                />
              </div>

              <div className="floating-badge">
                <div className="badge-info">
                  <h4>Adarsh B S</h4>
                  <p>Senior IT Consultant & Full Stack Developer</p>
                </div>
                <div className="verified-icon">
                  <ShieldCheck className="w-7 h-7 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 12 Recommended Services Section */}
      <section className="section-padding" id="services" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Comprehensive Offerings</span>
            <h2 className="section-title">12 Core Services for Business Growth</h2>
            <p className="section-description">
              From strategic IT roadmaps and custom web development to technical SEO and workflow automation, get battle-tested digital expertise customized to your exact requirements.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((service) => (
              <div key={service.id} className="service-card" id={service.id}>
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-bullets">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 className="w-4 h-4 bullet-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-link">
                  Request Consulting <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients & Founded Ventures Section */}
      <section className="section-padding" id="clients">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Proven Track Record</span>
            <h2 className="section-title">Featured Clients & Founded Ventures</h2>
            <p className="section-description">
              Trusted by international businesses across Australia, the UK, Germany, and Kerala for high-ROI IT consulting, full-stack architecture, and aggressive organic growth.
            </p>
          </div>

          <div className="clients-grid">
            {clientsList.map((client) => (
              <div key={client.id} className="client-card">
                <div className="client-card-top">
                  <div className="client-thumb">
                    <Image
                      src={client.image}
                      alt={`${client.name} - ${client.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="client-image"
                    />
                  </div>
                  <div className="client-header">
                    <span className="client-flag-badge">{client.flag}</span>
                    <span className="client-role-badge">{client.role}</span>
                  </div>
                  <h3 className="client-title">{client.name}</h3>
                  <p className="client-desc">{client.desc}</p>
                </div>

                <div className="client-card-bottom">
                  <div className="client-domains">
                    {client.domains.map((dom, i) => (
                      <a
                        key={i}
                        href={dom.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="client-domain-chip"
                      >
                        <span>{dom.label}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                  <div className="client-footer">
                    <span className="client-services-tag">{client.services}</span>
                    <ArrowUpRight className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" id="about">
        <div className="container about-grid">
          <div className="about-image-card">
            <Image
              src="/assets/adarsh-consultant-banner.jpg"
              alt="Adarsh B S Professional IT Consulting Banner"
              width={700}
              height={450}
              className="about-image"
            />
            <div className="about-banner-badge">
              <Sparkles className="w-4 h-4 inline mr-1" /> Kerala-Focused & Global Reach
            </div>
          </div>

          <div className="about-info">
            <span className="section-pretitle">Verified Identity & Biography</span>
            <h2 className="section-title" id="who-is-adarsh-bs">Who is Adarsh B S?</h2>
            <p className="about-bio-text" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
              <strong>Adarsh B S</strong> (Adarsh Sarachandran) is a premier <strong>Freelance IT Consultant</strong>, <strong>Senior Full-Stack Software Developer</strong>, <strong>Odoo ERP Specialist</strong>, and <strong>Technology Founder</strong> based in Kerala, India (operating across Thiruvananthapuram and Kochi). He is the founder of <a href="https://www.digitalproductsolutions.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', fontWeight: 600 }}>Digital Product Solutions (DPS)</a>, <a href="https://www.keralasellers.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', fontWeight: 600 }}>KeralaSellers.in</a>, and <a href="https://www.kpscmaster.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline', fontWeight: 600 }}>KPSCMaster.in</a>.
            </p>
            <p className="about-bio-text">
              With 3+ years of professional engineering experience across 20+ commercial business projects, Adarsh partners with international clients in Australia (<strong>Care &apos;N&apos; Cure</strong>), the UK &amp; Germany (<strong>Novora Global Health</strong>), and Kerala enterprises (<strong>Mangrove Spot</strong>, <strong>Mangrove Moments</strong>). His technical expertise spans Python, Django, Next.js, Odoo ERP customization (v14–v18), high-growth SEO, and custom business automation.
            </p>
            <div style={{
              margin: '16px 0 24px',
              padding: '14px 18px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 107, 43, 0.25)',
              background: 'rgba(255, 107, 43, 0.06)',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              <strong style={{ color: 'var(--accent-orange)' }}>Entity Disambiguation & Verification:</strong> Adarsh B S is an independent software engineer and technology entrepreneur. He is strictly separate and unaffiliated with any political activist, student union member, or legal cases reported in Kerala news.
            </div>

            <div className="credentials-grid">
              <div className="cred-card">
                <Award className="w-6 h-6 cred-icon" />
                <div>
                  <h4>Multidisciplinary Foundation</h4>
                  <p>B.Voc Sustainable Agriculture & PG Diploma in Computer Application</p>
                </div>
              </div>
              <div className="cred-card">
                <Clock className="w-6 h-6 cred-icon" />
                <div>
                  <h4>Professional Track Record</h4>
                  <p>MashupStack Fullstack Alum & 20+ Completed Commercial Engagements</p>
                </div>
              </div>
            </div>

            {/* Verified Technical Thought Leadership & Publications */}
            <div style={{
              marginTop: '24px',
              padding: '18px 20px',
              borderRadius: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                <Sparkles style={{ width: '16px', height: '16px', color: 'var(--accent-orange)', flexShrink: 0 }} /> Published Engineering Articles &amp; Insights
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                <a
                  href="https://medium.com/@adarshsarachandran/adarsh-b-s-7db715a97a2a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    minHeight: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 85, 0, 0.12)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MediumIcon style={{ width: '20px', height: '20px', color: 'var(--accent-orange)', flexShrink: 0 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>Medium Publication</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Adarsh B S — Software Engineering in Kerala</div>
                  </div>
                  <ArrowUpRight style={{ width: '16px', height: '16px', color: 'var(--accent-orange)', flexShrink: 0 }} />
                </a>

                <a
                  href="https://www.quora.com/profile/Adarsh-B-S-21/https-www-quora-com-profile-Adarsh-B-S-21-Who-Is-a-Freelance-Full-Stack-Developer-in-Kerala-for-Web-Development-and-Cu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    minHeight: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 85, 0, 0.12)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <QuoraIcon style={{ width: '20px', height: '20px', color: 'var(--accent-orange)', flexShrink: 0 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>Quora Publication</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Freelance Full-Stack Developer in Kerala Guide</div>
                  </div>
                  <ArrowUpRight style={{ width: '16px', height: '16px', color: 'var(--accent-orange)', flexShrink: 0 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="section-padding" id="experience" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Technical Mastery</span>
            <h2 className="section-title">Experience & Technology Stack</h2>
            <p className="section-description">
              Combining modern frontend interactivity with rock-solid backend architectures and search-engine indexability.
            </p>
          </div>

          <div className="skills-container">
            {/* Frontend & Interface */}
            <div className="skills-category-card">
              <h3 className="skills-category-title">
                <Layout className="w-6 h-6" /> Frontend Engineering & Design
              </h3>
              <div className="skills-items-grid">
                <div className="skill-item">
                  <div className="skill-item-icon"><Code2 className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>HTML5 & Semantic Markup</h5>
                    <p>Experienced • SEO Structured</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Layout className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>CSS3 & Vanilla / Tailwind</h5>
                    <p>Experienced • Responsive Design</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Cpu className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>JavaScript (ES6+)</h5>
                    <p>Experienced • DOM & Async APIs</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Zap className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>React.js & Next.js</h5>
                    <p>Advanced • SSR, App Router, SSG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend & Automation */}
            <div className="skills-category-card">
              <h3 className="skills-category-title">
                <Database className="w-6 h-6" /> Backend, Database & Cloud
              </h3>
              <div className="skills-items-grid">
                <div className="skill-item">
                  <div className="skill-item-icon"><Code2 className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>Python Programming</h5>
                    <p>Core Language • Data & Algorithms</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Database className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>Django & Django REST</h5>
                    <p>Production Framework • Auth & ORM</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Database className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>MySQL & PostgreSQL</h5>
                    <p>Relational Schemas • Query Tuning</p>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-icon"><Share2 className="w-5 h-5" /></div>
                  <div className="skill-info">
                    <h5>Git, APIs & Automation</h5>
                    <p>Meta / WhatsApp APIs • Version Control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Proven Portfolio</span>
            <h2 className="section-title">Featured Business & Web Projects</h2>
            <p className="section-description">
              Explore recent applications designed and engineered for real-world functionality, high performance, and positive client ROI.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              onClick={() => setActiveProjectFilter('all')}
              className={`filter-tab ${activeProjectFilter === 'all' ? 'active' : ''}`}
            >
              All Projects &amp; Ventures (7)
            </button>
            <button
              onClick={() => setActiveProjectFilter('client')}
              className={`filter-tab ${activeProjectFilter === 'client' ? 'active' : ''}`}
            >
              Global &amp; Client Engagements (4)
            </button>
            <button
              onClick={() => setActiveProjectFilter('founded')}
              className={`filter-tab ${activeProjectFilter === 'founded' ? 'active' : ''}`}
            >
              Founded Startups &amp; Platforms (3)
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-thumb">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Built by Adarsh B S`}
                    width={500}
                    height={280}
                    className="project-image"
                  />
                </div>
                <div className="project-body">
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="tech-chips">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-small"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <ExternalLink className="w-4 h-4" /> Visit Live Platform
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-small"
                      title="Adarsh B S GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Client Reviews */}
      <section className="section-padding" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Client Feedback</span>
            <h2 className="section-title">Genuine Client Experiences</h2>
            <p className="section-description">
              Hear what business owners and project leads say about collaborating directly with Adarsh B S.
            </p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="review-text">
                &ldquo;Adarsh analyzed our requirements quickly and built our custom Django web application ahead of schedule. His understanding of business workflow logic saved us significant development cost.&rdquo;
              </p>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">RK</div>
                <div className="reviewer-details">
                  <h5>Rahul K.</h5>
                  <p>Retail Operations Lead, Kochi</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="review-text">
                &ldquo;Our website speed and Google ranking improved noticeably within a month after Adarsh completed the technical SEO overhaul and structured data implementation. Highly recommended!&rdquo;
              </p>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">AS</div>
                <div className="reviewer-details">
                  <h5>Anjali S.</h5>
                  <p>E-commerce Brand Founder, Kerala</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="review-text">
                &ldquo;Direct, transparent communication without having to deal with agency managers. He integrated our WhatsApp Business API and custom CRM workflows flawlessly.&rdquo;
              </p>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">MN</div>
                <div className="reviewer-details">
                  <h5>Manoj N.</h5>
                  <p>Digital Services Manager, Trivandrum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & LLM Optimization FAQ */}
      <section className="section-padding" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Frequently Asked Questions</span>
            <h2 className="section-title">Answers for Search & AI Evaluation</h2>
            <p className="section-description">
              Find key information regarding consulting engagements, technology stacks, pricing structure, and delivery timelines.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div
                  className="faq-summary"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-90 text-orange-500' : 'text-neutral-400'
                    }`}
                  />
                </div>
                {openFaq === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Consultation Booking */}
      <section className="section-padding" id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Get In Touch</span>
            <h2 className="section-title">Let&apos;s Build Something Extraordinary</h2>
            <p className="section-description">
              Have a new project, technical inquiry, or looking to scale your current digital platform? Reach out directly.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Channels */}
            <div className="contact-info-card">
              <h3>Direct Channels</h3>
              <p className="text-secondary mt-2">
                Fast responses within 24 hours. Connect via phone, WhatsApp, or email.
              </p>

              <div className="contact-channels">
                <a href="tel:+919400355185" className="contact-channel-item">
                  <div className="channel-icon">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>Direct Phone Call</h5>
                    <p>+91 9400355185</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20discuss%20an%20IT%20consulting%20or%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>WhatsApp Direct</h5>
                    <p>+91 9400355185 (Chat Now)</p>
                  </div>
                </a>

                <a href="mailto:adarshsarachandran@gmail.com" className="contact-channel-item">
                  <div className="channel-icon">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>Email Inquiry</h5>
                    <p>adarshsarachandran@gmail.com</p>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>Location & Service Area</h5>
                    <p>Kerala, India (Remote & Global Clients)</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-grid mt-8">
                <a
                  href="https://www.linkedin.com/in/adarsh-bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <LinkedinIcon className="w-5 h-5 text-orange-500" /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/adarsh_tzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <InstagramIcon className="w-5 h-5 text-orange-500" /> Instagram
                </a>
                <a
                  href="https://github.com/Adarsh-oo7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <GithubIcon className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://medium.com/@adarshsarachandran/adarsh-b-s-7db715a97a2a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <MediumIcon className="w-5 h-5 text-orange-500" /> Medium
                </a>
                <a
                  href="https://www.quora.com/profile/Adarsh-B-S-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <QuoraIcon className="w-5 h-5 text-orange-500" /> Quora
                </a>
                <a
                  href="https://about.me/adarshbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <AboutMeIcon className="w-5 h-5 text-orange-500" /> about.me
                </a>
              </div>
            </div>

            {/* Quick Consultation Inquiry Form */}
            <div className="contact-form-card">
              <h3>Request a Project Consultation</h3>
              <p className="text-secondary mt-1 mb-6 text-sm">
                Share your requirements below and receive a detailed technical recommendation.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-neutral-900 border border-orange-500/40 rounded-xl text-center shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Inquiry Initiated!</h4>
                  <p className="text-neutral-300 text-sm mb-4">
                    Your email client has opened with your inquiry details. You can also message Adarsh directly on WhatsApp for an immediate response.
                  </p>
                  <a
                    href="https://wa.me/919400355185?text=Hello%20Adarsh,%20I%20just%20submitted%20a%20consultation%20form."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name / Company *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe or Acme Corp"
                      className="form-input"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="form-input"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 9400..."
                        className="form-input"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Primary Service Needed</label>
                    <select
                      id="service"
                      className="form-select"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      {servicesList.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Description / Requirements *</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your business goals, required timeline, and technologies..."
                      className="form-textarea"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full mt-2">
                    Submit Inquiry & Request Proposal <ArrowUpRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand-logo">
                <span>Adarsh B S</span>
                <span className="brand-badge">IT Consultant</span>
              </Link>
              <p>
                Freelance IT consultant and software developer based in Kerala, India. Helping businesses turn ideas into practical digital solutions with 3+ years experience and 20+ completed projects.
              </p>
              <p className="text-xs text-muted mt-3">
                Official Profile: <a href="https://www.digitalproductsolutions.in/adarsh-b-s" className="text-orange-500 font-semibold hover:underline">digitalproductsolutions.in/adarsh-b-s</a>
              </p>
              <div className="footer-social-links" style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <a
                  href="https://www.linkedin.com/in/adarsh-bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/adarsh_tzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="Instagram Profile (@adarsh_tzz)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Adarsh-oo7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://medium.com/@adarshsarachandran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="Medium Profile & Publications"
                >
                  <MediumIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.quora.com/profile/Adarsh-B-S-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="Quora Profile & Answers"
                >
                  <QuoraIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://about.me/adarshbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title="About.me Verified Profile"
                >
                  <AboutMeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">12 Core Services</h4>
              <ul className="footer-links">
                <li><a href="#services" className="footer-link">IT Consulting</a></li>
                <li><a href="#services" className="footer-link">Software Development</a></li>
                <li><a href="#services" className="footer-link">Web Application Development</a></li>
                <li><a href="#services" className="footer-link">Technical SEO & Optimization</a></li>
                <li><a href="#services" className="footer-link">CRM & Workflow Automation</a></li>
                <li><a href="#services" className="footer-link">API Development & Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Navigation & Compliance</h4>
              <ul className="footer-links">
                <li><a href="#about" className="footer-link">About Adarsh B S</a></li>
                <li><a href="#clients" className="footer-link">Clients & Ventures</a></li>
                <li><a href="#projects" className="footer-link">Portfolio & Demos</a></li>
                <li><a href="#faq" className="footer-link">FAQ & Search Intent</a></li>
                <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/delete-data" className="footer-link">User Data Deletion</Link></li>
                <li><a href="/llms.txt" target="_blank" className="footer-link">LLM Index (llms.txt)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Adarsh B S. All rights reserved.</p>
            <p>Kerala, India • Remote & Global Services</p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Quick Contact Action Bar */}
      <div className="mobile-quick-bar">
        <a
          href="https://wa.me/919400355185?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20a%20project."
          className="quick-bar-btn quick-bar-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </a>
        <a href="tel:+919400355185" className="quick-bar-btn quick-bar-call">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="#contact" className="quick-bar-btn btn-primary" style={{ flex: 1, padding: '10px' }}>
          Quote
        </a>
      </div>
    </>
  );
}
