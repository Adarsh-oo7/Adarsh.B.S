'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  ArrowUpRight,
  Phone,
  Mail,
  Check,
  X,
  Sun,
  Moon,
  Menu,
  Code2,
  Zap,
  Globe,
  Database,
  Briefcase,
  Cpu,
  Star,
  Bot,
  Workflow,
  Lock,
  Layers
} from 'lucide-react';

export default function AiAutomationClient() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const aiFaqs = [
    {
      question: 'What is your hourly and project rate as a freelance AI automation developer?',
      answer:
        'For international clients (UK, Australia, UAE, US), senior AI automation engineering is billed at $35 to $55/hr (£28 to £45/hr GBP / AUD 55 to 85/hr / 130 to 200 AED/hr). For domestic Indian businesses, rates are ₹2,000 to ₹3,500/hr. Fixed-scope AI automation sprints (such as WhatsApp AI agents or n8n workflow pipelines) start from $500 to $1,500 (£400 to £1,200 / ₹40,000 to ₹1,20,000) with 0% agency markup.'
    },
    {
      question: 'Can you build custom n8n workflows and Python automations for our existing CRM or ERP?',
      answer:
        'Yes. Adarsh architects self-hosted and cloud n8n workflow automations alongside custom Python/Django microservices. These connect seamlessly with Odoo ERP, HubSpot, Salesforce, Zoho, Stripe, Razorpay, Google Workspace, and Meta WhatsApp Cloud API to eliminate repetitive manual data entry and speed up lead response times to under 10 seconds.'
    },
    {
      question: 'How long does it take to build and deploy a custom AI agent or RAG pipeline?',
      answer:
        'A focused workflow automation or WhatsApp AI lead-qualification agent typically ships in 1 to 2 weeks. A full Retrieval-Augmented Generation (RAG) pipeline with vector database indexing (pgvector/Pinecone), role-based access control, and a custom Next.js interface takes 2 to 4 weeks, including a shadow-run testing phase before production cutover.'
    },
    {
      question: 'How do you ensure data privacy and security when integrating LLMs like OpenAI or Claude?',
      answer:
        'All AI integrations are engineered using zero-data-retention enterprise API endpoints (OpenAI API, Anthropic Claude API, Google Vertex/Gemini API) where your proprietary data is never used to train public models. You own 100% of the source code, vector embeddings, and API keys on your own cloud infrastructure under a strict bilateral NDA.'
    },
    {
      question: 'How do you collaborate with clients in the UK, Australia, and UAE?',
      answer:
        'Adarsh provides 4.5 to 5 hours of daily morning overlap for UK/European teams (IR35-exempt B2B contracts), 3.5 to 5.5 hours of overlap for Australian businesses (AEST), and near-identical business hours for UAE/Gulf clients (GST is only 1.5 hours behind IST). Communication happens directly via Slack, Microsoft Teams, Google Meet, and WhatsApp.'
    }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar" id="top-nav">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-logo">
            <span>Adarsh B S</span>
            <span className="brand-badge">AI &amp; Full-Stack Architect</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/ai-automation-developer/" className="nav-link active" style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>AI Automation</Link></li>
            <li><Link href="/saas-mvp-developer/" className="nav-link">SaaS &amp; MVP</Link></li>
            <li><Link href="/web-development-kerala/" className="nav-link">Web Dev</Link></li>
            <li><Link href="/odoo-developer-kerala/" className="nav-link">Odoo ERP</Link></li>
            <li><Link href="/hire-developer/" className="nav-link">Hire &amp; Rates</Link></li>
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

            <a
              href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20discuss%20an%20AI%20automation%20or%20AI%20agent%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '9px 18px', fontSize: '0.9rem' }}
            >
              <MessageSquare className="w-4 h-4" /> Book AI Strategy Call
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
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home Portfolio</Link>
          <Link href="/ai-automation-developer/" className="nav-link active" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>AI Automation Developer</Link>
          <Link href="/saas-mvp-developer/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>SaaS &amp; MVP Developer</Link>
          <Link href="/web-development-kerala/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Web Development</Link>
          <Link href="/odoo-developer-kerala/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Odoo ERP Specialist</Link>
          <Link href="/hire-developer/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Hire Developer (Rates)</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="subpage-hero" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Hire AI Automation Developer</span>
          </div>

          <div style={{ maxWidth: '940px' }}>
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>✅ Available for New AI Automation Sprints — Accepting Global &amp; India Projects</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '2.9rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Hire a Freelance <span className="text-gradient">AI Automation Developer</span> — LLM Integration, AI Agents &amp; Workflow Automation
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '28px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Stop losing hours to manual data entry, slow lead follow-ups, and disconnected SaaS tools. I architect and ship production-grade <strong>AI agents</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong> pipelines, <strong>n8n workflow automations</strong>, and <strong>Meta WhatsApp Cloud API</strong> conversational systems for businesses across the <strong>UK, Australia, UAE, USA, and India</strong> — at <strong>0% agency markup</strong>.
            </p>

            <div className="hero-highlights" style={{ marginBottom: '35px' }}>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> OpenAI GPT-4o • Claude 3.7 • Google Gemini</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Self-Hosted &amp; Cloud n8n Workflow Pipelines</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Private RAG Knowledge Bases (pgvector / Pinecone)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Official Meta WhatsApp Cloud API AI Bots</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 100% Data Privacy &amp; Zero Model Training</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Rates: $35–$55/hr (£28–£45/hr • ₹2,000–₹3,500/hr)</span>
            </div>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20book%20a%20free%2030-minute%20AI%20Automation%20Strategy%20Call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare className="w-5 h-5" /> Book Free 30-Min AI Strategy Call
              </a>
              <a href="#pricing" className="btn btn-outline" style={{ borderColor: 'var(--accent-orange-bright)', color: 'var(--accent-orange-bright)' }}>
                <Zap className="w-5 h-5" /> View AI Sprint Pricing
              </a>
              <a href="#process" className="btn btn-secondary">
                <Layers className="w-5 h-5" /> 5-Stage Shadow-Run Process
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Proof Bar */}
      <section style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)', padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-orange-bright)' }}>&lt; 8 Sec</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>AI Lead Triage Speed</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>24/7 WhatsApp &amp; Web Qualification</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>60% – 80%</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>Manual Admin Reduction</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Via n8n, Python &amp; ERP Webhooks</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-orange-bright)' }}>5.0 ★</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>28+ Verified Reviews</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Clients in AU, UK, DE, UAE &amp; India</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>100%</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>IP &amp; API Key Ownership</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Deployed on Your Own Cloud</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Automation Capabilities */}
      <section className="section-padding" id="capabilities">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <span className="section-badge">Production AI Engineering</span>
            <h2 className="section-title">
              What I Build &amp; Automate for Growing Businesses
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
              No hype or fragile no-code toys. I build deterministic, observable, and hallucination-guarded AI systems backed by Python, Django, Next.js, and PostgreSQL.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '28px' }}>
            {/* Card 1 */}
            <div style={{ background: 'var(--bg-card)', padding: '34px 28px', borderRadius: '18px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 85, 0, 0.12)', color: 'var(--accent-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  WhatsApp Cloud API AI Agents &amp; Booking Bots
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
                  Custom AI concierges connected to official Meta WhatsApp Cloud API that answer customer questions in English, Malayalam, or Arabic, qualify leads, calculate quotes, and sync directly into your CRM or Google Calendar.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Instant &lt;5s response on WhatsApp 24/7</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Automated human-agent handover triggers</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Direct Odoo, HubSpot &amp; Zoho CRM sync</li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-orange-bright)' }}>Typical Sprint: 7 – 14 Days</span>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: 'var(--bg-card)', padding: '34px 28px', borderRadius: '18px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 85, 0, 0.12)', color: 'var(--accent-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Database className="w-6 h-6" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Custom RAG Pipelines &amp; Knowledge Assistants
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
                  Private Retrieval-Augmented Generation (RAG) systems that let your staff or customers query thousands of PDFs, SOPs, legal contracts, and product catalogs with exact source citations and zero hallucination.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> PostgreSQL pgvector &amp; Pinecone indexing</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> OpenAI GPT-4o, Claude 3.7 &amp; Gemini Pro</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Role-based document access control (RBAC)</li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-orange-bright)' }}>Typical Sprint: 2 – 4 Weeks</span>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: 'var(--bg-card)', padding: '34px 28px', borderRadius: '18px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 85, 0, 0.12)', color: 'var(--accent-orange-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  n8n &amp; Python Business Workflow Automation
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
                  End-to-end multi-system workflow orchestration using self-hosted n8n (saving thousands in Zapier fees) and custom Python scripts to automate invoice parsing, order routing, email triage, and reporting.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Self-hosted Docker n8n on AWS / DigitalOcean</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Automated PDF invoice &amp; receipt OCR extraction</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check className="w-4 h-4 text-orange-500" /> Bidirectional ERP, CRM &amp; Slack alerts</li>
                </ul>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-orange-bright)' }}>Typical Sprint: 5 – 10 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage Production AI Delivery Process */}
      <section className="section-padding" id="process" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <span className="section-badge">Zero-Risk Implementation</span>
            <h2 className="section-title">
              5-Stage AI Engineering &amp; Shadow-Run Methodology
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '760px', margin: '0 auto' }}>
              Deploying AI directly to customers without rigorous testing risks brand reputation. Every AI project follows a strict 5-stage engineering protocol with a mandatory shadow-run validation phase.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
            {[
              {
                step: '01',
                title: 'Workflow Audit',
                desc: 'We map your current manual processes, API endpoints, and data sources to calculate exact time & cost savings before writing code.'
              },
              {
                step: '02',
                title: 'Architecture & NDA',
                desc: 'We sign a bilateral NDA, select the optimal LLM/vector stack, and provision secure cloud infrastructure under your ownership.'
              },
              {
                step: '03',
                title: 'Agent & Pipeline Build',
                desc: 'Rapid sprint engineering of prompts, RAG embeddings, n8n webhooks, and deterministic fallback guardrails.'
              },
              {
                step: '04',
                title: 'Shadow-Run Testing',
                desc: 'The AI runs in parallel ("shadow mode") on real incoming data with human review before it is allowed to reply to live clients.'
              },
              {
                step: '05',
                title: 'Cutover & Handover',
                desc: 'Full production launch, monitoring dashboard setup, team training, and 100% repository & documentation handover.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', padding: '26px 22px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-orange-bright)', marginBottom: '8px' }}>
                  STAGE {item.step}
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Multi-Currency AI Pricing */}
      <section className="section-padding" id="pricing">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Transparent International &amp; India Pricing</span>
            <h2 className="section-title">
              AI Automation &amp; Agent Engineering Rates (2026)
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Market research shows Western AI agencies charge $120–$250/hr, while mid-level freelance AI engineers average $35–$72/hr. Partnering directly with Adarsh B S gives you principal full-stack + AI architecture with 0% agency markup.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
            {/* Package 1 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '32px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-orange-bright)', textTransform: 'uppercase' }}>
                  Workflow &amp; Lead Bot Sprint
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                  WhatsApp AI Agent / n8n Pipeline
                </h3>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  $500 – $1,200 USD
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  £400 – £950 GBP • 1,850 – 4,400 AED • ₹40,000 – ₹85,000
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.55 }}>
                  Ideal for automating customer inquiries, appointment bookings, CRM lead qualification, or multi-app n8n workflows.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Official Meta WhatsApp Cloud API or Web Chat</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> OpenAI / Claude / Gemini prompt guardrails</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Self-hosted n8n or Python webhook backend</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> CRM / Google Sheets / Calendar integration</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 30 Days post-launch tuning &amp; support</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20interested%20in%20the%20WhatsApp%20AI%20Agent%20/%20n8n%20Workflow%20Sprint."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start Automation Sprint
              </a>
            </div>

            {/* Package 2 */}
            <div style={{ background: 'var(--bg-card)', border: '2px solid var(--accent-orange-bright)', borderRadius: '18px', padding: '32px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-orange-bright)', color: '#fff', padding: '3px 12px', borderRadius: '12px', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Most Popular for Enterprises
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-orange-bright)', textTransform: 'uppercase' }}>
                  Full Custom AI System
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                  Custom RAG Pipeline &amp; AI Web Portal
                </h3>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  $1,200 – $3,000 USD
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  £950 – £2,400 GBP • AUD 1,850 – 4,600 • ₹90,000 – ₹2,20,000
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.55 }}>
                  Complete private AI knowledge system or multi-agent web application trained on your proprietary documents and databases.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Next.js 16 dashboard + Python/Django API</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Vector DB (pgvector / Pinecone) ingestion</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Source-cited answers with 0% hallucination</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Role-based access control &amp; audit logs</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 60 Days post-launch engineering warranty</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20build%20a%20Custom%20RAG%20Pipeline%20or%20AI%20Web%20Portal."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Scope Custom AI System
              </a>
            </div>

            {/* Package 3 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '32px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-orange-bright)', textTransform: 'uppercase' }}>
                  Dedicated Hourly / Retainer
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                  Senior AI Architect On-Demand
                </h3>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  $35 – $55 / hr USD
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  £28 – £45/hr GBP • AUD 55 – 85/hr • ₹2,000 – ₹3,500/hr
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.55 }}>
                  Flexible weekly or monthly engineering capacity for startups and agencies needing ongoing LLM, Python, and Next.js execution.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Direct senior architect commits (no juniors)</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 20h or 40h/week dedicated sprint blocks</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Daily overlap with UK, AU, UAE &amp; US teams</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> IR35-exempt B2B invoicing (GBP/USD/AUD/AED)</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Pause or cancel anytime with 0 lock-in</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20hire%20you%20on%20an%20hourly%20or%20monthly%20AI%20engineering%20retainer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Hourly Capacity
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">AI Engineering FAQ</span>
            <h2 className="section-title">
              Frequently Asked Questions (AI Automation &amp; LLM Integration)
            </h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {aiFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '14px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    gap: '12px'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="w-5 h-5 text-orange-500"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 24px 22px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '14px 0' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                <span>Adarsh B S</span>
                <span className="brand-badge">AI &amp; Full-Stack Architect</span>
              </Link>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '340px' }}>
                Senior freelance AI automation developer, full-stack software architect, and founder of Digital Product Solutions (MSME Reg., Korani, Thiruvananthapuram, Kerala 695104, India).
              </p>
            </div>

            <div>
              <h4 className="footer-title">Specialized Hire Pages</h4>
              <ul className="footer-links">
                <li><Link href="/ai-automation-developer/" className="footer-link" style={{ color: 'var(--accent-orange-bright)', fontWeight: 600 }}>AI Automation Developer</Link></li>
                <li><Link href="/saas-mvp-developer/" className="footer-link">SaaS &amp; MVP Developer</Link></li>
                <li><Link href="/hire-developer/" className="footer-link">Hire Full-Stack Developer (Rates)</Link></li>
                <li><Link href="/web-development-kerala/" className="footer-link">Web Development Company Kerala</Link></li>
                <li><Link href="/odoo-developer-kerala/" className="footer-link">Odoo ERP Developer</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Direct Contact</h4>
              <ul className="footer-links">
                <li><a href="https://wa.me/919400355185" className="footer-link">WhatsApp: +91 94003 55185</a></li>
                <li><a href="mailto:adarshsarachandran@gmail.com" className="footer-link">adarshsarachandran@gmail.com</a></li>
                <li><Link href="/" className="footer-link">Main Portfolio &amp; Case Studies</Link></li>
                <li><a href="/llms.txt" className="footer-link">LLM Ground Truth (llms.txt)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Adarsh B S &amp; Digital Product Solutions. All rights reserved.</p>
            <p>Korani, Thiruvananthapuram, Kerala 695104, India • Serving UK, Australia, UAE, USA &amp; India</p>
          </div>
        </div>
      </footer>
    </>
  );
}
