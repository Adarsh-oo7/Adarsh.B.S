'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Check,
  X,
  Sun,
  Moon,
  Menu,
  Download,
  Code2,
  Layers,
  Zap,
  Globe,
  Database,
  Cpu,
  ShoppingCart
} from 'lucide-react';

export default function OdooClient() {
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

  const odooCapabilities = [
    {
      title: 'Custom Module Development',
      badge: 'Python & XML',
      desc: 'Architecting bespoke Odoo modules from the ground up for unique operational workflows that cannot be solved by standard apps. Includes custom models, business logic, automated actions, and views.',
      features: ['Odoo v14 through v18 architecture', 'Custom models & relational fields', 'Automated server actions & scheduled crons', 'Clean, upgrade-compatible Python code']
    },
    {
      title: 'Core App Tailoring & Workflows',
      badge: 'Sales, CRM & Inventory',
      desc: 'Extending and customizing default Odoo modules (Sales, CRM, Purchase, Inventory, Accounting, Manufacturing, HR, eCommerce, Point of Sale) to match your company’s exact real-world processes.',
      features: ['Multi-warehouse inventory routing', 'Custom pricing rules & approval matrices', 'Custom PDF report & invoice layout design', 'Role-based access security rules (RBAC)']
    },
    {
      title: 'Tally to Odoo Data Migration',
      badge: 'Data Integrity',
      desc: 'Seamless data extraction, transformation, and import from Tally ERP 9 / Tally Prime or legacy accounting systems to Odoo without business downtime or balance discrepancies.',
      features: ['Chart of accounts & ledger mapping', 'Customer & vendor balance transfers', 'Opening stock & inventory valuation', 'Historical transaction audit trails']
    },
    {
      title: 'WhatsApp & Payment Integrations',
      badge: 'Automations',
      desc: 'Integrating Odoo with Meta WhatsApp Cloud API for automated dispatch of order confirmations, invoices, and payment reminders. Seamless Razorpay, Stripe, and UPI gateway flows.',
      features: ['WhatsApp invoice PDF automation', 'Instant Razorpay payment link triggers', 'SMS & transactional email notifications', 'External REST & GraphQL API bridges']
    },
    {
      title: 'Odoo.sh & Docker Cloud Hosting',
      badge: 'DevOps & Reliability',
      desc: 'Configuring bulletproof deployment architectures on Odoo.sh, self-hosted Docker containers, or cloud VPS (AWS, DigitalOcean, Hetzner) with automated daily backups and SSL.',
      features: ['Odoo.sh staging & production pipelines', 'PostgreSQL database query tuning', 'Automated daily cloud backups', 'Nginx reverse proxy & SSL certificates']
    },
    {
      title: 'Version Migrations & Maintenance',
      badge: 'Long-Term Support',
      desc: 'Upgrading older Odoo instances (v14/v15/v16) to modern Odoo v17/v18. Ongoing maintenance contracts, emergency bug-fixing, and continuous operational support for business continuity.',
      features: ['Database schema version upgrades', 'Deprecated code refactoring', 'Speed optimization & latency reduction', 'Emergency troubleshooting SLAs']
    }
  ];

  const odooFaqs = [
    {
      question: 'Which versions of Odoo ERP do you develop and customize?',
      answer:
        'Adarsh develops and customizes Odoo versions 14, 15, 16, 17, and 18 for both Community and Enterprise editions, deploying on Odoo.sh, self-hosted Docker, and cloud VPS environments.',
    },
    {
      question: 'Can you migrate our business data from Tally to Odoo in Kerala?',
      answer:
        'Yes! Adarsh specializes in complete data migration from Tally ERP 9 / Tally Prime to Odoo. This includes Chart of Accounts mapping, customer/vendor master ledgers, inventory valuation, stock on hand, and opening balance reconciliation.',
    },
    {
      question: 'Can you integrate Odoo with WhatsApp Business API and Indian payment gateways?',
      answer:
        'Yes. Adarsh engineers automated WhatsApp notifications for invoice generation, payment receipts, order dispatch, and payment link triggers via Razorpay, Stripe, and UPI.',
    },
    {
      question: 'Why hire a freelance Odoo developer instead of an official Odoo Gold/Silver Partner?',
      answer:
        'Official ERP partner agencies charge heavy corporate retainers and assign junior trainees to your project. Working directly with Adarsh B S saves up to 60% on implementation budgets, provides direct access to the senior Python developer, and guarantees rapid turnaround on custom business logic without bureaucratic ticketing delays.',
    },
    {
      question: 'What are your rates and pricing models for Odoo projects?',
      answer:
        'Hourly rates for specialized Odoo Python development and architectural consulting range between ₹1,800 and ₹3,500 per hour ($25 to $45/hour for GCC/international clients). Fixed-price module development packages start from ₹25,000 per module, and full ERP migration projects are structured in transparent milestones.',
    },
    {
      question: 'Do you work with businesses and Malayali entrepreneurs in Dubai/UAE?',
      answer:
        'Yes! Many businesses in Dubai, Abu Dhabi, and the GCC utilize Odoo for VAT-compliant accounting, inventory, and point-of-sale. With only a 1.5-hour timezone difference, Adarsh acts as a remote ERP engineering partner with multi-currency billing in AED and USD.',
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar" id="top-nav">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-logo">
            <span>Adarsh B S</span>
            <span className="brand-badge">Odoo Specialist</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/hire-developer/" className="nav-link">Hire Developer</Link></li>
            <li><Link href="/odoo-developer-kerala/" className="nav-link active" style={{ color: '#fff', fontWeight: 700 }}>Odoo ERP Kerala</Link></li>
            <li><Link href="/#services" className="nav-link">Services</Link></li>
            <li><Link href="/#clients" className="nav-link">Clients</Link></li>
            <li><Link href="/#projects" className="nav-link">Projects</Link></li>
            <li><Link href="/#contact" className="nav-link">Contact</Link></li>
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
              href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20discuss%20an%20Odoo%20ERP%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '9px 18px', fontSize: '0.9rem' }}
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp
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
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/odoo-developer-kerala/" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Odoo ERP Development</Link>
          <Link href="/hire-developer/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Hire Developer (Kerala &amp; Global)</Link>
          <Link href="/#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>12 Core Services</Link>
          <Link href="/#clients" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clients &amp; Ventures</Link>
          <Link href="/#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact &amp; Quote</Link>
        </div>
      </nav>

      {/* Subpage Hero Section */}
      <header className="subpage-hero" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Freelance Odoo Developer in Kerala</span>
          </div>

          <div style={{ maxWidth: '860px' }}>
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>Enterprise ERP Engineering &amp; Custom Automations</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Freelance <span className="text-gradient">Odoo Developer</span> in Kerala
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '28px' }}>
              Partner directly with <strong style={{ color: 'var(--text-primary)' }}>Adarsh B S</strong> for custom Odoo ERP development (v14 through v18), bespoke Python modules, Tally &amp; legacy data migrations, and automated WhatsApp/payment workflows. Delivering production ERP systems across Technopark Trivandrum, Infopark Kochi, and the Gulf/UAE.
            </p>

            <div className="hero-highlights" style={{ marginBottom: '32px' }}>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Odoo Community &amp; Enterprise (v14–v18)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Custom Python Modules &amp; Business Rules</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Tally ERP / Prime to Odoo Data Migration</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> WhatsApp Cloud API &amp; Razorpay Integration</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Odoo.sh, Docker &amp; Cloud VPS Deployment</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Rates: ₹1,800 – ₹3,500/hr ($25–$45) &bull; Modules from ₹25,000</span>
            </div>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20looking%20for%20a%20Freelance%20Odoo%20ERP%20Developer%20for%20my%20business.%20Let's%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare className="w-5 h-5 text-white" /> Discuss Odoo Project on WhatsApp
              </a>
              <a href="#capabilities" className="btn btn-secondary">
                <Layers className="w-5 h-5 text-orange-500" /> Core Odoo Capabilities
              </a>
              <a href="/hire-developer/" className="btn btn-outline">
                <ArrowUpRight className="w-5 h-5" /> Hire Developer Overview
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities Section */}
      <section className="section-padding" id="capabilities" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Full-Lifecycle ERP Services</span>
            <h2 className="section-title">6 Core Odoo ERP Capabilities</h2>
            <p className="section-description">
              From building custom business logic to migrating legacy Tally databases, get tailored Odoo ERP solutions designed specifically for your company&apos;s workflow.
            </p>
          </div>

          <div className="services-grid">
            {odooCapabilities.map((cap, index) => (
              <div key={index} className="service-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="service-icon-box">
                    <Database className="w-6 h-6 text-orange-500" />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', background: 'rgba(255, 85, 0, 0.1)', color: 'var(--accent-orange-bright)', border: '1px solid rgba(255, 85, 0, 0.25)' }}>
                    {cap.badge}
                  </span>
                </div>
                <h3 className="service-title">{cap.title}</h3>
                <p className="service-desc">{cap.desc}</p>
                <ul className="service-bullets">
                  {cap.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 className="w-4 h-4 bullet-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20interested%20in%20your%20Odoo%20service:%20${encodeURIComponent(cap.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Request Consultation <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Freelance Odoo Specialist vs Agency */}
      <section className="section-padding" id="advantages">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Cost &amp; Velocity Advantage</span>
            <h2 className="section-title">Why Choose a Freelance Odoo Specialist?</h2>
            <p className="section-description">
              Compare the cost and execution efficiency of hiring a dedicated senior Odoo Python engineer versus bloated ERP partner agencies.
            </p>
          </div>

          <div className="diaspora-grid">
            <div className="diaspora-card">
              <div>
                <div className="diaspora-header">
                  <div className="diaspora-icon-box">💰</div>
                  <div>
                    <h3 className="diaspora-title">60%+ Budget Savings</h3>
                    <span className="diaspora-subtitle">No Corporate Bloat</span>
                  </div>
                </div>
                <p className="diaspora-desc">
                  Traditional Odoo partner agencies charge heavy corporate retainers, project management fees, and overheads. Partnering with Adarsh ensures 100% of your investment directly funds senior Python development.
                </p>
              </div>
              <div className="diaspora-pill">
                <Check className="w-3.5 h-3.5 text-orange-500" /> Transparent Milestone Billing
              </div>
            </div>

            <div className="diaspora-card" style={{ borderColor: 'rgba(255, 85, 0, 0.4)' }}>
              <div>
                <div className="diaspora-header">
                  <div className="diaspora-icon-box">⚡</div>
                  <div>
                    <h3 className="diaspora-title">Direct Python Engineer</h3>
                    <span className="diaspora-subtitle">No Middlemen</span>
                  </div>
                </div>
                <p className="diaspora-desc">
                  You communicate directly with the engineer writing your models, views, and automations. Need an urgent change to an invoice report or inventory rule? Get it deployed within hours instead of waiting weeks for ticket approvals.
                </p>
              </div>
              <div className="diaspora-pill" style={{ color: 'var(--accent-orange-bright)', borderColor: 'rgba(255, 85, 0, 0.3)' }}>
                <Check className="w-3.5 h-3.5" /> Rapid Turnaround Velocity
              </div>
            </div>

            <div className="diaspora-card">
              <div>
                <div className="diaspora-header">
                  <div className="diaspora-icon-box">🔒</div>
                  <div>
                    <h3 className="diaspora-title">100% Clean Code &amp; IP</h3>
                    <span className="diaspora-subtitle">Upgrade-Compatible</span>
                  </div>
                </div>
                <p className="diaspora-desc">
                  Every custom module adheres strictly to Odoo architectural best practices, ensuring your system remains upgrade-compatible with future Odoo major releases. Full code ownership committed to your private GitHub.
                </p>
              </div>
              <div className="diaspora-pill">
                <Check className="w-3.5 h-3.5 text-orange-500" /> Private GitHub Ownership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Odoo FAQ Section */}
      <section className="section-padding" id="faq" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Odoo FAQ</span>
            <h2 className="section-title">Frequently Asked Questions on Odoo ERP</h2>
            <p className="section-description">
              Key details regarding Odoo version compatibility, Tally data migration, hosting, and ongoing support.
            </p>
          </div>

          <div className="faq-container">
            {odooFaqs.map((faq, index) => (
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

      {/* Direct Contact & Booking Section */}
      <section className="section-padding" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">ERP Consultation</span>
            <h2 className="section-title">Ready to Transform Your Business with Odoo?</h2>
            <p className="section-description">
              Get in touch to schedule a free 30-minute Odoo workflow discovery session.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Connect with Adarsh B S</h3>
              <p className="text-secondary mt-2">
                Available for on-site discovery across Kerala (Trivandrum &amp; Kochi) and remote implementation for Gulf/UAE clients.
              </p>

              <div className="contact-channels" style={{ marginTop: '24px' }}>
                <a
                  href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20looking%20for%20Odoo%20ERP%20customization%20and%20development%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>WhatsApp Direct (Instant Reply)</h5>
                    <p>+91 9400355185 &bull; Chat Now</p>
                  </div>
                </a>

                <a href="tel:+919400355185" className="contact-channel-item">
                  <div className="channel-icon">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>Direct Phone Call</h5>
                    <p>+91 9400355185</p>
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
              </div>
            </div>

            <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '40px 32px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.12)', border: '1px solid rgba(255, 85, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--accent-orange)' }}>
                <Cpu className="w-8 h-8" />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>Request an Odoo Demo</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Message on WhatsApp to discuss your current ERP bottlenecks, review module feasibility, or schedule a live video demonstration.
              </p>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20request%20an%20Odoo%20ERP%20consultation%20and%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'center', fontSize: '1.05rem', padding: '15px 28px' }}
              >
                <MessageSquare className="w-5 h-5" /> Chat on WhatsApp Now
              </a>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                Odoo v14–v18 &bull; Community &amp; Enterprise &bull; Tally Migration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>&copy; {new Date().getFullYear()} Adarsh B S &bull; Freelance Odoo Developer &amp; IT Consultant. All Rights Reserved.</p>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/hire-developer/">Hire Developer</Link>
              <Link href="/odoo-developer-kerala/">Odoo ERP</Link>
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <Link href="/terms/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
