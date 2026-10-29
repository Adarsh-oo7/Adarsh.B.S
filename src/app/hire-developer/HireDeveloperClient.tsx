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
  Globe
} from 'lucide-react';

export default function HireDeveloperClient() {
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

  const commercialFaqs = [
    {
      question: 'Why should I hire a freelance software developer in Kerala instead of an agency?',
      answer:
        'Hiring Adarsh B S connects you directly with the senior architect building your product. Traditional IT agencies in Kochi and Technopark charge 200% to 400% markups and pass work to junior trainees or interns. Working directly with Adarsh guarantees 0% agency markup, 100% intellectual property ownership from day one, direct Git commit access, and sub-second Next.js and Python performance.',
    },
    {
      question: 'What are the typical freelance software developer rates in Kerala for 2026?',
      answer:
        'Senior freelance software developer and architecture rates in Kerala range between ₹1,500 and ₹3,500 per hour (or $25 to $45 per hour for global and Gulf/UAE clients). Fixed-price MVP sprints for modern web apps powered by Next.js 15, Python/Django, and PostgreSQL start from ₹50,000 ($800) with clearly defined milestone deliverables.',
    },
    {
      question: 'How do you work with Malayalis and businesses in Dubai, UAE, and the GCC?',
      answer:
        'Adarsh collaborates actively with Malayali entrepreneurs and businesses across Dubai, Abu Dhabi, Sharjah, Saudi Arabia, and Qatar. Gulf Standard Time (GST UTC+4) is only 1.5 hours behind IST, making coordination effortless. Communication is handled via direct WhatsApp voice/chat and Google Meet, with multi-currency billing in AED, SAR, USD, or INR.',
    },
    {
      question: 'Can you build a custom web application or MVP completely from scratch?',
      answer:
        'Yes. Adarsh handles end-to-end custom product delivery, from initial data modeling and architecture blueprints to backend REST APIs (Python/Django or Node.js), frontend responsive UI (Next.js 15 / React 19), and production deployment on AWS, Vercel, or Docker.',
    },
    {
      question: 'Who owns the intellectual property (IP) and source code?',
      answer:
        'You own 100% of all intellectual property, source code, database architectures, and documentation from day one. All commits are pushed directly to your private GitHub or GitLab repository.',
    },
    {
      question: 'How quickly can we start and what is the onboarding process?',
      answer:
        'You can reach out via WhatsApp at +91 9400355185 or email adarshsarachandran@gmail.com. We schedule a 30-minute discovery call within 24 hours, define technical specifications and milestones, sign an NDA if required, and kick off development immediately.',
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar" id="top-nav">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-logo">
            <span>Adarsh B S</span>
            <span className="brand-badge">Senior Architect</span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/#about" className="nav-link">About</Link></li>
            <li><Link href="/#services" className="nav-link">Services</Link></li>
            <li><Link href="/#clients" className="nav-link">Clients</Link></li>
            <li><Link href="/#projects" className="nav-link">Projects</Link></li>
            <li><Link href="/odoo-developer-kerala/" className="nav-link" style={{ color: 'var(--accent-orange-bright)' }}>Odoo ERP</Link></li>
            <li><Link href="/hire-developer/" className="nav-link active" style={{ color: '#fff', fontWeight: 700 }}>Hire Developer</Link></li>
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
              href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20hire%20you%20for%20a%20software%20development%20project."
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
          <Link href="/hire-developer/" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Hire Developer (Kerala &amp; Global)</Link>
          <Link href="/odoo-developer-kerala/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Odoo ERP Development</Link>
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
            <span className="breadcrumb-current">Hire Freelance Developer in Kerala</span>
          </div>

          <div style={{ maxWidth: '860px' }}>
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>Commercial Engagement &amp; Direct Senior Collaboration</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Hire a <span className="text-gradient">Freelance Software Developer</span> in Kerala
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '28px' }}>
              Partner directly with <strong style={{ color: 'var(--text-primary)' }}>Adarsh B S</strong> — Senior Full-Stack Engineer, Python/Django Architect, and Odoo ERP Specialist based in Kerala (operating across Trivandrum Technopark &amp; Kochi Infopark). Zero agency markups, zero junior hand-offs, 100% intellectual property ownership from Day 1.
            </p>

            <div className="hero-highlights" style={{ marginBottom: '32px' }}>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Kerala: Trivandrum (Technopark) &amp; Kochi (Infopark)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Gulf &amp; UAE: Dubai / GCC Aligned (GST UTC+4)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Hourly: ₹1,500 – ₹3,500/hr ($25 – $45/hr)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Fixed MVP Sprints: Starting from ₹50,000 ($800)</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 100% IP &amp; Private GitHub Repository Ownership</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Fast Response (&lt; 15m WhatsApp Reply)</span>
            </div>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20interested%20in%20hiring%20you%20for%20a%20software%20development%20project.%20Can%20we%20discuss%20scope%20and%20rates%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare className="w-5 h-5 text-white" /> Chat on WhatsApp Direct
              </a>
              <a href="#engagement-models" className="btn btn-secondary">
                <Layers className="w-5 h-5 text-orange-500" /> View Engagement Models
              </a>
              <a href="/assets/cv.pdf" download="Adarsh_BS_CV.pdf" className="btn btn-outline">
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Engagement Models Section */}
      <section className="section-padding" id="engagement-models" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Flexible Commercial Collaboration</span>
            <h2 className="section-title">Transparent Project Engagement Models</h2>
            <p className="section-description">
              Choose the collaboration framework that aligns with your company&apos;s product development stage and budget. Direct billing without hidden agency retainers.
            </p>
          </div>

          <div className="engagement-grid">
            {/* Model 1 */}
            <div className="engagement-card featured">
              <div>
                <span className="engagement-badge">Most Popular for Startups</span>
                <h3 className="engagement-title">Fixed-Scope MVP Delivery</h3>
                <div className="engagement-price">
                  ₹50,000 <span>/ project start ($800)</span>
                </div>
                <p className="engagement-desc">
                  Ideal for entrepreneurs and new product launches requiring a clearly defined launch deadline. We establish technical specifications, milestone deliverables, and a fixed investment with zero cost overruns.
                </p>
                <ul className="engagement-features">
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Comprehensive system architecture &amp; database schema</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> High-speed Next.js 15 &amp; React 19 frontend</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Secure Python/Django REST API &amp; PostgreSQL persistence</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Payment gateway (Razorpay/Stripe) &amp; auth integration</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Cloud deployment on AWS / Vercel with SSL &amp; domain DNS</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 30-day post-launch warranty &amp; bug-fix guarantee</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20interested%20in%20the%20Fixed-Scope%20MVP%20Delivery%20package.%20Let's%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Discuss MVP Project
              </a>
            </div>

            {/* Model 2 */}
            <div className="engagement-card">
              <div>
                <span className="engagement-badge">For Scaling Businesses</span>
                <h3 className="engagement-title">Milestone-Based Agile Sprints</h3>
                <div className="engagement-price">
                  ₹1,500 – ₹3,500 <span>/ hr ($25–$45)</span>
                </div>
                <p className="engagement-desc">
                  Agile bi-weekly sprints for growing platforms needing continuous feature additions, third-party integrations, Odoo ERP customization, or backend refactoring.
                </p>
                <ul className="engagement-features">
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Dedicated sprint hours aligned to your timezone</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Direct WhatsApp, Slack &amp; Google Meet standups</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Continuous staging code releases &amp; sprint demos</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Direct commits to your private GitHub repository</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Flexible scope adjustments as user feedback evolves</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Multi-currency invoices (INR, AED, USD, EUR, GBP)</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20interested%20in%20booking%20Milestone-Based%20Sprint%20hours%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Book Sprint Capacity
              </a>
            </div>

            {/* Model 3 */}
            <div className="engagement-card">
              <div>
                <span className="engagement-badge">Targeted Consultation</span>
                <h3 className="engagement-title">Architecture &amp; Code Audit</h3>
                <div className="engagement-price">
                  48-Hour <span>Turnaround</span>
                </div>
                <p className="engagement-desc">
                  Deep technical audit of existing Python/Django, Next.js, or Odoo ERP applications experiencing performance bottlenecks, database latency, or SEO drop-offs.
                </p>
                <ul className="engagement-features">
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> PostgreSQL query profiling &amp; index optimization</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Next.js Core Web Vitals audit (LCP, CLS, INP tuning)</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> API security analysis &amp; webhook validation checks</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Schema markup &amp; AI crawlability evaluation</li>
                  <li><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Actionable refactoring roadmap with code patches</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20need%20an%20Architecture%20and%20Code%20Performance%20Audit%20for%20my%20application."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Request Technical Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Delivery Process */}
      <section className="section-padding" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Predictable Delivery</span>
            <h2 className="section-title">How We Build &amp; Ship Your Software</h2>
            <p className="section-description">
              A battle-tested software engineering process designed for transparency, fast delivery cycles, and zero communication friction.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h4 className="step-title">Discovery &amp; Blueprint</h4>
              <p className="step-desc">
                We review your business vision, user personas, database requirements, and timeline. I deliver an architecture blueprint with exact tech recommendations and milestone pricing within 24 hours.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h4 className="step-title">Private Git &amp; Staging</h4>
              <p className="step-desc">
                We establish a private GitHub repository under your account. Staging pipelines on Vercel or AWS are configured immediately so you have preview access from day one.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h4 className="step-title">Agile Sprint Execution</h4>
              <p className="step-desc">
                Features are coded in structured weekly or bi-weekly sprints. We communicate continuously via WhatsApp or Slack with live progress demos and transparent Git commit logs.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <h4 className="step-title">Launch &amp; 30-Day Support</h4>
              <p className="step-desc">
                Production deployment with SSL, DNS configuration, search indexing, and performance monitoring. Every project includes a 30-day post-launch warranty for seamless peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Freelance Senior Architect vs Agency */}
      <section className="section-padding" id="why-hire" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">The Engineering Advantage</span>
            <h2 className="section-title">Direct Architect vs. Traditional IT Agency</h2>
            <p className="section-description">
              Compare why startups and enterprises in Kerala and internationally choose direct senior collaboration over corporate IT agencies.
            </p>
          </div>

          <div className="comparison-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Project Aspect</th>
                  <th className="highlight-col" style={{ width: '33%', color: 'var(--accent-orange-bright)' }}>
                    Adarsh B S (Principal Architect)
                  </th>
                  <th style={{ width: '33%', color: 'var(--text-muted)' }}>
                    Traditional IT Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="feature-title">Who Writes Your Code?</span>
                    <span className="feature-desc">Technical seniority &amp; execution depth</span>
                  </td>
                  <td className="highlight-col">
                    <span style={{ color: '#22c55e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check className="w-4 h-4" /> 100% Senior Architect (Adarsh)
                    </span>
                    <span className="feature-desc">Zero delegation to junior trainees or interns</span>
                  </td>
                  <td>
                    <span style={{ color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <X className="w-4 h-4" /> Trainees &amp; Rotated Interns
                    </span>
                    <span className="feature-desc">Passed to junior staff after the sales pitch</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="feature-title">Agency Overhead &amp; Pricing</span>
                    <span className="feature-desc">Cost efficiency &amp; transparent billing</span>
                  </td>
                  <td className="highlight-col">
                    <span style={{ color: '#22c55e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check className="w-4 h-4" /> 0% Agency Markup
                    </span>
                    <span className="feature-desc">Transparent hourly rates (₹1,500–₹3,500/hr) &amp; fixed MVPs</span>
                  </td>
                  <td>
                    <span style={{ color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <X className="w-4 h-4" /> 200%–400% Corporate Markup
                    </span>
                    <span className="feature-desc">Paying for sales teams, office rent &amp; management</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="feature-title">Communication Velocity</span>
                    <span className="feature-desc">Direct interaction &amp; sprint coordination</span>
                  </td>
                  <td className="highlight-col">
                    <span style={{ color: '#22c55e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check className="w-4 h-4" /> Direct WhatsApp / Slack / Video
                    </span>
                    <span className="feature-desc">&lt; 15-minute response times during business hours</span>
                  </td>
                  <td>
                    <span style={{ color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <X className="w-4 h-4" /> Multi-Layered Account Managers
                    </span>
                    <span className="feature-desc">Slow email tickets and bureaucratic communication</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="feature-title">Intellectual Property &amp; Git</span>
                    <span className="feature-desc">Ownership of codebases, schemas &amp; assets</span>
                  </td>
                  <td className="highlight-col">
                    <span style={{ color: '#22c55e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check className="w-4 h-4" /> 100% Client Ownership from Day 1
                    </span>
                    <span className="feature-desc">Pushed directly to your private GitHub or GitLab</span>
                  </td>
                  <td>
                    <span style={{ color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <X className="w-4 h-4" /> Agency Lock-In
                    </span>
                    <span className="feature-desc">Code held hostage or tied to proprietary frameworks</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commercial FAQ Section */}
      <section className="section-padding" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Hiring FAQ</span>
            <h2 className="section-title">Frequently Asked Questions on Hiring</h2>
            <p className="section-description">
              Clear answers regarding contracts, rates, IP rights, delivery timelines, and Gulf diaspora collaboration.
            </p>
          </div>

          <div className="faq-container">
            {commercialFaqs.map((faq, index) => (
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
      <section className="section-padding" id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">Start Your Project</span>
            <h2 className="section-title">Book a 30-Minute Discovery Session</h2>
            <p className="section-description">
              Have a new product idea, web application, or need Odoo ERP consultation? Get in touch directly.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Direct Communication Channels</h3>
              <p className="text-secondary mt-2">
                Fast responses within 15 minutes during business hours. Connect via WhatsApp, phone, or email.
              </p>

              <div className="contact-channels" style={{ marginTop: '24px' }}>
                <a
                  href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I'm%20looking%20to%20hire%20a%20freelance%20developer%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25d366' }}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>WhatsApp Direct (Recommended)</h5>
                    <p>+91 9400355185 &bull; Instant Reply</p>
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

                <div className="contact-channel-item">
                  <div className="channel-icon">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="channel-info">
                    <h5>Location Hubs</h5>
                    <p>Kerala, India (Trivandrum &amp; Kochi) &bull; Remote Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '40px 32px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255, 85, 0, 0.12)', border: '1px solid rgba(255, 85, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--accent-orange)' }}>
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px' }}>Ready to Kick Off?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Skip the back-and-forth emails. Message directly on WhatsApp to share your scope or schedule an instant Google Meet discovery call.
              </p>
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20discuss%20hiring%20you%20for%20my%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'center', fontSize: '1.05rem', padding: '15px 28px' }}
              >
                <MessageSquare className="w-5 h-5" /> Chat with Adarsh on WhatsApp
              </a>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                NDA signed upon request &bull; Direct Senior Engineer Access &bull; 100% IP Ownership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>&copy; {new Date().getFullYear()} Adarsh B S &bull; Senior Freelance Software Developer &amp; IT Consultant. All Rights Reserved.</p>
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
