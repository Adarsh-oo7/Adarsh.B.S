'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  ArrowUpRight,
  Check,
  X,
  Sun,
  Moon,
  Menu,
  Code2,
  Zap,
  Globe,
  Database,
  Layout,
  Layers,
  ShieldCheck,
  CreditCard,
  Users,
  Rocket
} from 'lucide-react';

export default function SaasMvpClient() {
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

  const saasFaqs = [
    {
      question: 'How much does a SaaS MVP cost in India in 2026?',
      answer:
        'Building a production-grade SaaS MVP with a senior full-stack architect in India ranges from $850 to $1,800 USD (£680 to £1,450 GBP / AUD 1,300 to 2,800 / ₹55,000 to ₹1,40,000 INR) for a focused 3-to-4-week sprint. Complex multi-tenant SaaS platforms with AI integrations and custom workflows range between $2,000 and $4,500 USD. You save 70% compared to Western dev agencies because there is 0% middleman markup.'
    },
    {
      question: 'How long does it take to build and launch a SaaS MVP?',
      answer:
        'A focused, revenue-ready Minimum Viable Product (MVP) takes 3 to 4 weeks from kickoff to live cloud deployment. Week 1 covers database schema design (PostgreSQL), authentication, and core API endpoints. Weeks 2 and 3 build the Next.js 16 dashboard UI and core product workflow. Week 4 integrates Stripe/Razorpay subscription billing, end-to-end testing, and production deployment.'
    },
    {
      question: 'Do I own 100% of the source code and intellectual property?',
      answer:
        'Yes. You own 100% of all source code, database schemas, design assets, and cloud infrastructure from Day 1. All code is pushed daily to your private GitHub repository under a signed bilateral Non-Disclosure Agreement (NDA).'
    },
    {
      question: 'Why use Next.js 16 and Python/Django for a SaaS MVP instead of no-code tools like Bubble?',
      answer:
        'No-code platforms lock you into proprietary hosting, suffer from severe performance degradation as user counts grow, and make investor technical due diligence difficult. With Next.js 16, Python/Django, and PostgreSQL, you own clean, scalable, industry-standard code that handles 50,000+ concurrent users and integrates effortlessly with any AI or enterprise API.'
    }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar" id="top-nav">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-logo">
            <span>Adarsh B S</span>
            <span className="brand-badge">SaaS &amp; MVP Architect</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/ai-automation-developer/" className="nav-link">AI Automation</Link></li>
            <li><Link href="/saas-mvp-developer/" className="nav-link active" style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>SaaS &amp; MVP</Link></li>
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
              href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20book%20a%20free%20MVP%20Scoping%20Call%20for%20my%20SaaS%20idea."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '9px 18px', fontSize: '0.9rem' }}
            >
              <MessageSquare className="w-4 h-4" /> Book MVP Scoping Call
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
          <Link href="/ai-automation-developer/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>AI Automation Developer</Link>
          <Link href="/saas-mvp-developer/" className="nav-link active" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>SaaS &amp; MVP Developer</Link>
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
            <span className="breadcrumb-current">Hire SaaS &amp; MVP Developer</span>
          </div>

          <div style={{ maxWidth: '940px' }}>
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>✅ Available for New SaaS &amp; MVP Sprints — Ship Your Product in 3–4 Weeks</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '2.9rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Freelance <span className="text-gradient">SaaS &amp; MVP Developer</span> — From Idea to Revenue-Ready Product
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '28px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Founders don&apos;t need bloated agency slide decks — they need working software that onboard users and collects Stripe payments. As a founder who has built and scaled my own multi-vendor and EdTech platforms (<strong>KeralaSellers.in</strong> &amp; <strong>KPSCMaster.in</strong>), I partner directly with startup founders in the <strong>UK, Australia, UAE, US, and India</strong> to ship production-ready <strong>Next.js 16 + Python/Django SaaS MVPs</strong> in 3 to 4 weeks.
            </p>

            <div className="hero-highlights" style={{ marginBottom: '35px' }}>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 3–4 Week Rapid MVP Delivery</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Next.js 16 + React 19 + Python/Django + PostgreSQL</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Built-In Multi-Tenancy, Auth &amp; Stripe/Razorpay Billing</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 100% Private GitHub Code &amp; IP Ownership</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Fixed-Scope MVPs from $850 (£680 • ₹55,000)</span>
            </div>

            <div className="psych-cta-box" style={{ marginBottom: '10px' }}>
              <div className="psych-primary-row">
                <a
                  href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20book%20a%20free%2030-minute%20SaaS%20MVP%20Scoping%20Call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-psych-primary"
                >
                  <MessageSquare className="w-5 h-5" /> Book Free 30-Min MVP Scoping Call (&lt;15m Reply)
                </a>
                <a href="#pricing" className="btn btn-outline" style={{ borderColor: 'var(--accent-orange-bright)', color: 'var(--accent-orange-bright)' }}>
                  <Zap className="w-5 h-5" /> View Fixed-Scope MVP Pricing
                </a>
                <a href="#roadmap" className="btn btn-secondary">
                  <Layers className="w-5 h-5" /> See 4-Week Build Roadmap
                </a>
              </div>
              <div className="psych-risk-strip">
                <span className="psych-risk-item"><ShieldCheck className="w-4 h-4 text-orange-500" /> 100% Bilateral NDA</span>
                <span>•</span>
                <span className="psych-risk-item"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 24h DB Schema &amp; Cost Blueprint</span>
                <span>•</span>
                <span className="psych-risk-item"><Code2 className="w-4 h-4 text-orange-500" /> 100% GitHub IP Ownership from Day 1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* What Comes Standard in Every SaaS MVP */}
      <section className="section-padding" id="deliverables" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <span className="section-badge">Complete SaaS Foundation</span>
            <h2 className="section-title">
              Everything Required to Onboard &amp; Bill Paying Users
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Every SaaS MVP includes the foundational engineering modules that usually take junior teams months to wire together.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <ShieldCheck className="w-6 h-6 text-orange-500" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Multi-Tenant Auth &amp; RBAC
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Google/GitHub OAuth2, JWT session security, organization workspaces, team invites, and granular Role-Based Access Control (Admin, Manager, Member).
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <CreditCard className="w-6 h-6 text-orange-500" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Subscription &amp; Usage Billing
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Complete Stripe, LemonSqueezy, or Razorpay integration with tiered monthly/annual plans, free trial logic, webhook listeners, and automated PDF invoices.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <Layout className="w-6 h-6 text-orange-500" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Next.js 16 App &amp; Admin Portal
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Blazing-fast React 19 interactive customer dashboard paired with a super-admin backoffice to monitor active users, MRR, and feature usage.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <Database className="w-6 h-6 text-orange-500" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                Python/Django API &amp; PostgreSQL
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Normalized PostgreSQL relational schema, Django REST Framework APIs, Redis caching, background task queues, and Dockerized CI/CD cloud deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week SaaS MVP Delivery Roadmap */}
      <section className="section-padding" id="roadmap">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '50px' }}>
            <span className="section-badge">Predictable Velocity</span>
            <h2 className="section-title">
              How Your SaaS MVP Ships in 4 Structured Weeks
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '22px' }}>
            {[
              {
                week: 'WEEK 01',
                title: 'Architecture, DB Schema & Auth',
                desc: 'Sign NDA, finalize user flows, model PostgreSQL tables, configure private GitHub repo, and deploy authentication + multi-tenant workspace scaffolding.'
              },
              {
                week: 'WEEK 02',
                title: 'Core Backend Engine & REST APIs',
                desc: 'Build the core business logic, Python/Django REST endpoints, third-party API integrations (or LLM pipelines), and automated background jobs.'
              },
              {
                week: 'WEEK 03',
                title: 'Next.js 16 Dashboard & UX',
                desc: 'Connect the React 19 / Next.js 16 frontend to live APIs, build interactive charts and data tables, and release a live staging URL for your testing.'
              },
              {
                week: 'WEEK 04',
                title: 'Stripe Billing, QA & Production Launch',
                desc: 'Wire up subscription webhooks, perform security & load testing, deploy to AWS / Vercel / DigitalOcean, and hand over 100% of documentation.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-orange-bright)', marginBottom: '8px' }}>
                  {item.week}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Multi-Currency SaaS Pricing */}
      <section className="section-padding" id="pricing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Founder-Friendly Commercials</span>
            <h2 className="section-title">
              Transparent SaaS &amp; MVP Pricing (2026)
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '760px', margin: '0 auto' }}>
              Milestone-linked payments. Zero equity taken. 100% code ownership on your private GitHub from commit #1.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '26px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Tier 1 */}
            <div style={{ background: 'var(--bg-card)', border: '2px solid var(--accent-orange-bright)', borderRadius: '18px', padding: '34px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-orange-bright)', color: '#fff', padding: '3px 12px', borderRadius: '12px', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Most Popular for Seed Founders
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-orange-bright)', textTransform: 'uppercase' }}>
                  3 – 4 Weeks Turnaround
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                  Revenue-Ready SaaS MVP Sprint
                </h3>
                <div style={{ fontSize: '1.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  $850 – $1,800 USD
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  £680 – £1,450 GBP • AUD 1,300 – 2,800 • ₹55,000 – ₹1,40,000
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Next.js 16 Frontend + Python/Django REST API</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> PostgreSQL schema + JWT / Google OAuth</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Core product workflow (2–3 primary modules)</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Stripe or Razorpay subscription checkout</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> High-converting SEO landing page included</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 60 Days post-launch bug &amp; support warranty</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20discuss%20the%20Revenue-Ready%20SaaS%20MVP%20Sprint."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Free MVP Estimate
              </a>
            </div>

            {/* Tier 2 */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '18px', padding: '34px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-orange-bright)', textTransform: 'uppercase' }}>
                  6 – 8 Weeks Turnaround
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                  Full-Scale Multi-Tenant &amp; AI SaaS
                </h3>
                <div style={{ fontSize: '1.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  $2,000 – $4,500 USD
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  £1,600 – £3,600 GBP • AUD 3,100 – 6,900 • ₹1,60,000 – ₹3,50,000
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Everything in SaaS MVP Sprint +</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Advanced multi-tenant RBAC &amp; team invites</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Embedded AI agents / LLM / RAG workflows</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Third-party webhooks, WhatsApp &amp; CRM sync</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Dockerized AWS / DigitalOcean cluster setup</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 90 Days priority engineering support</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20discuss%20a%20Full-Scale%20Multi-Tenant%20SaaS%20Platform."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Scope Enterprise SaaS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Founder FAQ</span>
            <h2 className="section-title">
              Frequently Asked Questions (SaaS &amp; MVP Development)
            </h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {saasFaqs.map((faq, idx) => (
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
                <span className="brand-badge">SaaS &amp; MVP Architect</span>
              </Link>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '340px' }}>
                Senior freelance SaaS &amp; MVP developer, full-stack architect, and founder of Digital Product Solutions (MSME Reg., Korani, Thiruvananthapuram, Kerala 695104, India).
              </p>
            </div>

            <div>
              <h4 className="footer-title">Specialized Hire Pages</h4>
              <ul className="footer-links">
                <li><Link href="/saas-mvp-developer/" className="footer-link" style={{ color: 'var(--accent-orange-bright)', fontWeight: 600 }}>SaaS &amp; MVP Developer</Link></li>
                <li><Link href="/ai-automation-developer/" className="footer-link">AI Automation Developer</Link></li>
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

