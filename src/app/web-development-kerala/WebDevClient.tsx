'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
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
  Layout,
  Smartphone,
  Database,
  Search,
  Briefcase,
  ShoppingCart,
  Cpu,
  ExternalLink,
  Star,
  Users,
  Compass,
  Award
} from 'lucide-react';

export default function WebDevClient() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'websites' | 'webapps' | 'ecommerce' | 'industry'>('websites');

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

  const webSolutions = {
    websites: {
      title: 'High-Conversion Business & Corporate Websites',
      badge: 'Core Offering',
      desc: 'Modern, blazing-fast responsive websites engineered for Kerala enterprises, startups, and service providers. Handcrafted with Next.js 16 and Tailwind CSS for sub-second page loads (<0.6s) and top-rank Google organic search visibility.',
      highlights: [
        'Sub-second page speeds (<600ms LCP) with 95+ Google PageSpeed score',
        'Mobile-first responsive UX with custom micro-animations',
        'Direct WhatsApp Cloud API lead capture buttons & instant click-to-call',
        'Built-in semantic JSON-LD structured data schema for rich search snippets',
        'SEO-optimized architecture targeting regional keywords across Kerala & UAE'
      ],
      idealFor: 'Contractors, consultants, clinics, law firms, hotels, event planners, and growing MSMEs.',
      startingPrice: 'From ₹15,000 ($250)',
      deliveryTime: '7 – 14 Days'
    },
    webapps: {
      title: 'Custom Web Applications & SaaS MVPs',
      badge: 'Advanced Engineering',
      desc: 'Complex, interactive web software platforms with dynamic user dashboards, role-based access control (RBAC), and automated workflows built with Next.js 16 frontends, Python/Django REST backends, and PostgreSQL databases.',
      highlights: [
        'Full-stack architecture: Next.js 16 + React 19 + Python/Django + PostgreSQL',
        'Secure user authentication (JWT/OAuth2), multi-tenant isolation, and RBAC',
        'Interactive real-time dashboards with analytics charts and PDF/CSV export',
        'Automated background queues, email alerts, and webhook processors',
        'Dockerized deployment on AWS EC2, DigitalOcean, or Vercel cloud'
      ],
      idealFor: 'SaaS startups, enterprise portals, CRM dashboards, booking engines, and internal ERP tools.',
      startingPrice: 'From ₹45,000 ($600)',
      deliveryTime: '2 – 4 Weeks'
    },
    ecommerce: {
      title: 'D2C E-Commerce & WhatsApp Ordering Platforms',
      badge: 'High Conversion',
      desc: 'Online stores built for lightning-fast product browsing, frictionless mobile checkout, integrated Indian/international payment gateways (Razorpay, Stripe), and direct WhatsApp order notifications.',
      highlights: [
        'Ultra-fast product catalog with real-time category filtering and instant search',
        'Seamless integration with Razorpay, UPI, Stripe, and Cash on Delivery',
        'Automated WhatsApp instant order alerts for both customers and store owners',
        'Back-office inventory management, coupon codes, and customer analytics',
        'Optimized for mobile shoppers with 1-click cart and checkout workflows'
      ],
      idealFor: 'D2C retail brands, specialty foods, apparel boutiques, wholesale merchants, and grocery chains.',
      startingPrice: 'From ₹50,000 ($700)',
      deliveryTime: '2 – 3 Weeks'
    },
    industry: {
      title: 'Industry-Specific Web Portals & Platforms',
      badge: 'Specialized Expertise',
      desc: 'Purpose-built web solutions tailored to specific industries across Kerala and the Gulf diaspora, incorporating specialized workflows like 4K video showcases, multi-tier inquiry calculators, and reservation pipelines.',
      highlights: [
        'Construction & Civil Engineering: Project showcases, material estimation & WhatsApp quote engine (e.g. BuilDwellz)',
        'Wedding Cinematography & Media: 4K video portfolios, Cloudinary streaming & client bookings (e.g. Crystal Knot Films)',
        'Food & Beverage / Catering: Digital menus, guest count inquiry calculators & venue coordination (e.g. Lemon Caters, Squeeze Berriez)',
        'Resorts & Eco-Tourism: Direct room reservation engines and localized sightseeing guides (e.g. Mangrove Spot & Moments)',
        'Education & Gov Exam Portals: High-traffic test series, quiz engines & result dashboards (e.g. KPSC Master)'
      ],
      idealFor: 'Established Kerala enterprises seeking custom platforms matching their exact operational workflow.',
      startingPrice: 'Custom Quote / From ₹40,000',
      deliveryTime: '2 – 4 Weeks'
    }
  };

  const caseStudies = [
    {
      title: 'BuilDwellz - Construction & Engineering Platform',
      category: 'Civil Engineering & Construction',
      image: '/assets/clients/buildwellz.png',
      desc: 'High-performance corporate portal & portfolio showcase for Kerala construction leaders. Features sub-second Next.js 16 architecture, localized Trivandrum SEO, and instant WhatsApp quote workflows.',
      tags: ['Next.js 16', 'Tailwind CSS', 'WhatsApp Cloud API', 'Local Kerala SEO'],
      url: 'https://www.digitalproductsolutions.in/portfolio'
    },
    {
      title: 'Crystal Knot Films - Studio Showcase & Booking Pipeline',
      category: 'Wedding Cinematography & Media',
      image: '/assets/clients/crystalknot.png',
      desc: 'High-converting visual media showcase platform for premier wedding cinematographers across Kerala and UAE. Includes 4K video embedding and automated inquiry workflows.',
      tags: ['Next.js', '4K Video Streaming', 'Booking Pipeline', 'Cloudinary CDN'],
      url: 'https://www.digitalproductsolutions.in/portfolio'
    },
    {
      title: 'Squeeze Berriez - Gourmet Beverage Brand Platform',
      category: 'Food & Beverage / D2C',
      image: '/assets/clients/squeezeberriez.png',
      desc: 'Direct-to-consumer beverage brand platform, digital menu, and instant WhatsApp ordering workflow engineered for rapid mobile conversions.',
      tags: ['D2C Ordering', 'WhatsApp Commerce', 'Mobile-First UX', 'Digital Menu'],
      url: 'https://www.digitalproductsolutions.in/portfolio'
    },
    {
      title: 'Lemon Caters - Event Banquet Inquiry Engine',
      category: 'Hospitality & Event Catering',
      image: '/assets/clients/lemoncaters.png',
      desc: 'Digital banquet booking platform for premier Kerala catering service. Features interactive menu planning, guest count inquiry calculator, and localized event SEO.',
      tags: ['Interactive Quote Calculator', 'Event Booking', 'Technical SEO', 'Lead Automation'],
      url: 'https://www.digitalproductsolutions.in/portfolio'
    },
    {
      title: 'Mangrove Spot & Moments - Eco-Tourism & Resort Booking',
      category: 'Hospitality & Travel',
      image: '/assets/clients/mangrovespot.png',
      desc: 'Direct booking portal & organic travel SEO for premier Kerala mangrove retreat. Drove 300%+ increase in direct guest reservations without OTA commissions.',
      tags: ['Direct Booking Engine', 'Travel SEO', 'Local Citations', 'Zero Commission'],
      url: 'https://www.digitalproductsolutions.in/portfolio'
    },
    {
      title: "Care 'N' Cure Australia - Global Healthcare Growth",
      category: 'International Healthcare Enterprise',
      image: '/assets/clients/carencure.png',
      desc: 'Technical performance optimization and organic SEO architecture for Australian healthcare brand, driving sustained client acquisition in Sydney and Melbourne.',
      tags: ['International SEO', 'Web Performance', 'Growth Consulting', 'Australia Market'],
      url: 'https://carencure.com.au/'
    }
  ];

  const pricingPackages = [
    {
      name: 'Starter Business Website',
      price: '₹15,000 – ₹35,000',
      altPrice: '$250 – $450 USD',
      badge: 'Popular for Local Businesses',
      popular: false,
      desc: 'Ideal for Kerala startups, local service providers, doctors, and contractors needing a modern, blazing-fast web presence.',
      features: [
        'Custom Next.js 16 + React 19 architecture',
        'Mobile-first responsive design (5-8 pages)',
        'Sub-second page load (<0.6s) & 95+ PageSpeed',
        'WhatsApp instant inquiry chat button',
        'Local Kerala SEO & Google Maps optimization',
        'Semantic Schema.org JSON-LD structured data',
        'Contact form with email alerts',
        'Free SSL certificate & Vercel cloud deployment',
        '30 Days complimentary post-launch support'
      ],
      ctaText: 'Start Starter Website',
      ctaUrl: 'https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20interested%20in%20the%20Starter%20Business%20Website%20package%20(from%20₹15,000).'
    },
    {
      name: 'Custom Web Application / SaaS MVP',
      price: '₹45,000 – ₹85,000',
      altPrice: '$600 – $1,100 USD',
      badge: 'Most Popular for Tech & Startups',
      popular: true,
      desc: 'Complete full-stack web application with user authentication, database architecture, dynamic dashboard, and REST API.',
      features: [
        'Next.js 16 Frontend + Python/Django REST backend',
        'PostgreSQL database design & cloud hosting',
        'JWT / OAuth secure user authentication & RBAC',
        'Interactive client/admin dashboard & analytics',
        'Automated email notifications & WhatsApp triggers',
        'Payment gateway integration (Razorpay / Stripe)',
        'RESTful API endpoints with Swagger documentation',
        'Automated CI/CD deployment pipeline',
        '100% Source code ownership on private GitHub',
        '60 Days post-launch engineering support'
      ],
      ctaText: 'Build Custom Web App',
      ctaUrl: 'https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20build%20a%20Custom%20Web%20Application%20or%20SaaS%20MVP%20(from%20₹45,000).'
    },
    {
      name: 'E-Commerce & Industry Portal',
      price: '₹50,000 – ₹1,20,000',
      altPrice: '$700 – $1,600 USD',
      badge: 'Full Commercial Architecture',
      popular: false,
      desc: 'Custom online store or specialized industry portal engineered for maximum conversions, inventory sync, and multi-currency billing.',
      features: [
        'Full e-commerce catalog with search & multi-filters',
        'Razorpay, UPI, Stripe, & Cash-on-Delivery support',
        'Automated WhatsApp order confirmation alerts',
        'Back-office inventory & order management panel',
        'Customer account portal with order history',
        'Multi-currency support (INR, AED, USD, EUR)',
        'Abandoned cart recovery & coupon engine',
        'Technical SEO for high-converting product queries',
        '90 Days dedicated support & performance warranty'
      ],
      ctaText: 'Launch Online Store',
      ctaUrl: 'https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20want%20to%20build%20an%20E-Commerce%20or%20Industry%20Portal%20(from%20₹50,000).'
    },
    {
      name: 'Dedicated Senior Developer Sprints',
      price: '₹1,500 – ₹3,500 / hr',
      altPrice: '$25 – $45 / hr USD',
      badge: 'Agile & Milestone Engagements',
      popular: false,
      desc: 'Direct hourly or monthly sprint engagement with Adarsh B S as your senior architect and hands-on full-stack engineer.',
      features: [
        'Direct senior architect commits (0% agency markup)',
        'Next.js 16, React 19, Python/Django, Odoo ERP v14-v18',
        'Weekly sprint demos & direct private GitHub commits',
        'Direct WhatsApp voice/chat & Google Meet access',
        'Flexible hours: 20h / 40h weekly dedicated capacity',
        'Zero long-term lock-in: cancel or pause anytime',
        'Multi-currency invoicing: INR, AED, USD, EUR',
        'Codebase audit, refactoring, and Core Web Vitals fixes'
      ],
      ctaText: 'Hire on Dedicated Sprint',
      ctaUrl: 'https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20would%20like%20to%20hire%20you%20for%20dedicated%20hourly%20software%20engineering%20sprints.'
    }
  ];

  const webFaqs = [
    {
      question: 'How much does web development cost in Kerala in 2026?',
      answer:
        'Professional web development pricing in Kerala varies based on technical complexity and architecture. With Adarsh B S and Digital Product Solutions: High-performance business websites built with Next.js 16 start from ₹15,000 to ₹35,000 ($250 to $450). Custom web applications, client portals, and SaaS MVPs powered by Python/Django and PostgreSQL range between ₹45,000 and ₹85,000 ($600 to $1,100). E-commerce platforms start from ₹50,000. Dedicated senior hourly engineering is ₹1,500 to ₹3,500/hr ($25 to $45/hr) with 0% agency markup and 100% IP ownership.'
    },
    {
      question: 'Who is the best web developer in Kerala for custom business websites and web apps?',
      answer:
        'Adarsh B S is widely recognized as one of Kerala’s premier freelance full-stack web developers and software consultants. As the founder of Digital Product Solutions, he has delivered 20+ commercial production websites and software systems across Kerala, Australia, the UK, Germany, and the UAE. His engineering focuses on modern Next.js 16, React 19, and Python/Django backends, paired with technical SEO to ensure every site ranks high on Google and generates real customer inquiries.'
    },
    {
      question: 'Why choose Next.js and Python over WordPress or PHP for web development?',
      answer:
        'Traditional WordPress and PHP websites in Kerala are notoriously slow (taking 3 to 6 seconds to load), vulnerable to plugin hacks, and bloated with unnecessary code. Next.js 16 delivers sub-second page loads (<0.6s), unmatched security, static server-side pre-rendering, and flawless Core Web Vitals scores that Google directly rewards with higher search engine rankings.'
    },
    {
      question: 'How fast can you build and launch a custom business website in Kerala?',
      answer:
        'A high-converting business website is typically delivered in 7 to 14 days. Custom web applications, SaaS platforms, or e-commerce stores take between 2 to 4 weeks across structured agile sprints. We provide live staging preview links throughout development so you can review progress every step of the way.'
    },
    {
      question: 'Do you work with Malayalis and businesses in Dubai, UAE, and the GCC?',
      answer:
        'Yes! Over 40% of our web development and custom software projects are engineered for Malayali entrepreneurs and businesses across Dubai, Abu Dhabi, Sharjah, Saudi Arabia, and Qatar. Gulf Standard Time (GST UTC+4) is just 1.5 hours behind IST, making real-time collaboration via WhatsApp and Google Meet effortless. Multi-currency billing in AED, SAR, USD, or INR is fully supported.'
    },
    {
      question: 'Who owns the website source code, domain, and hosting accounts?',
      answer:
        'You retain 100% ownership of all source code, design assets, database schemas, domains, and hosting configurations from day one. All code is committed directly to your private GitHub repository with zero vendor lock-in.'
    },
    {
      question: 'What is included in your SEO and post-launch maintenance support?',
      answer:
        'Every web development project includes foundational technical SEO, Schema.org JSON-LD structured data, meta tags, XML sitemaps, Google Search Console indexing, and 30 to 60 days of complimentary technical warranty. Ongoing monthly maintenance and organic ranking growth retainers are also available.'
    }
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
            <li><Link href="/web-development-kerala/" className="nav-link active" style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>Web Dev Kerala</Link></li>
            <li><Link href="/odoo-developer-kerala/" className="nav-link">Odoo ERP</Link></li>
            <li><Link href="/hire-developer/" className="nav-link">Hire Developer</Link></li>
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
              href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20looking%20for%20web%20development%20services%20in%20Kerala."
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
          <Link href="/web-development-kerala/" className="nav-link active" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-orange-bright)', fontWeight: 700 }}>Web Development Kerala</Link>
          <Link href="/hire-developer/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Hire Freelance Developer (Rates)</Link>
          <Link href="/odoo-developer-kerala/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Odoo ERP Development</Link>
          <Link href="/#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>12 Core Services</Link>
          <Link href="/#clients" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Clients &amp; Ventures</Link>
          <Link href="/#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact &amp; Quote</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="subpage-hero" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Web Development in Kerala</span>
          </div>

          <div style={{ maxWidth: '900px' }}>
            <div className="hero-pill">
              <span className="pulse-dot" />
              <span>Kerala&apos;s Premier Web Engineering &amp; SaaS Architecture</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '20px' }}>
              Web Development Company in <span className="text-gradient">Kerala</span> &amp; Senior Web Developer
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-secondary)' }}>
              Looking to build a high-converting business website, scalable web application, or custom e-commerce system in Kerala? <strong>Adarsh B S</strong> and <strong>Digital Product Solutions</strong> engineer blazing-fast web platforms using Next.js 16, React 19, and Python/Django. Direct senior architect collaboration with <strong>0% agency markup</strong>, sub-second speeds (&lt;0.6s), and guaranteed Google search dominance.
            </p>

            <div className="hero-highlights" style={{ marginBottom: '35px' }}>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 20+ Commercial Web Deployments</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Next.js 16, React 19 &amp; Python Django</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Sub-Second Speeds &amp; 95+ Core Web Vitals</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> 100% IP &amp; Private GitHub Commits</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Trivandrum • Kochi • Calicut • Dubai/UAE</span>
              <span className="highlight-tag"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Transparent Pricing: From ₹15,000 / ₹1,500/hr</span>
            </div>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20looking%20for%20web%20development%20services%20in%20Kerala."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp Instant Quote
              </a>
              <a href="#pricing" className="btn btn-outline" style={{ borderColor: 'var(--accent-orange-bright)', color: 'var(--accent-orange-bright)' }}>
                <Zap className="w-5 h-5" /> View Web Packages
              </a>
              <a href="#projects" className="btn btn-secondary">
                <Globe className="w-5 h-5" /> Explore Live Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust & Key Metrics Bar */}
      <section style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)', padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-orange-bright)', lineHeight: 1 }}>5.0 / 5.0</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '8px 0', color: '#ffb703' }}>
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>28+ Verified Client Reviews</div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: '8px 0 2px' }}>Web Deployments</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Kerala, UAE, Australia, UK</div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent-orange-bright)', lineHeight: 1 }}>&lt;600ms</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: '8px 0 2px' }}>Sub-Second LCP Speed</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>95+ Google PageSpeed Score</div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>0%</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: '8px 0 2px' }}>Agency Markup</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Direct Senior Architect Commits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Web Solutions Showcase */}
      <section className="section-padding" id="solutions">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Full-Stack Capabilities</span>
            <h2 className="section-title">
              Engineered for Speed, Google Rankings &amp; Business Growth
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              We build production web platforms that load instantaneously, dominate regional organic searches across Kerala and UAE, and convert casual visitors into qualified clients.
            </p>
          </div>

          {/* Solution Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '35px' }}>
            <button
              onClick={() => setActiveTab('websites')}
              className={`btn ${activeTab === 'websites' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: '30px', padding: '10px 22px' }}
            >
              <Globe className="w-4 h-4" /> Business Websites
            </button>
            <button
              onClick={() => setActiveTab('webapps')}
              className={`btn ${activeTab === 'webapps' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: '30px', padding: '10px 22px' }}
            >
              <Layout className="w-4 h-4" /> Custom Web Apps &amp; SaaS
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`btn ${activeTab === 'ecommerce' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: '30px', padding: '10px 22px' }}
            >
              <ShoppingCart className="w-4 h-4" /> D2C &amp; WhatsApp E-Commerce
            </button>
            <button
              onClick={() => setActiveTab('industry')}
              className={`btn ${activeTab === 'industry' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: '30px', padding: '10px 22px' }}
            >
              <Briefcase className="w-4 h-4" /> Industry Web Portals
            </button>
          </div>

          {/* Active Tab Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'var(--card-shadow)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255, 85, 0, 0.12)',
                    color: 'var(--accent-orange-bright)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '10px'
                  }}
                >
                  {webSolutions[activeTab].badge}
                </span>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {webSolutions[activeTab].title}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-orange-bright)' }}>
                  {webSolutions[activeTab].startingPrice}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Estimated Turnaround: {webSolutions[activeTab].deliveryTime}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.7 }}>
              {webSolutions[activeTab].desc}
            </p>

            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Technical Deliverables
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
                {webSolutions[activeTab].highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 className="w-5 h-5 text-orange-500" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                <strong>Ideal For:</strong> {webSolutions[activeTab].idealFor}
              </div>
              <a
                href={`https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20inquiring%20about%20${encodeURIComponent(webSolutions[activeTab].title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.92rem' }}
              >
                <MessageSquare className="w-4 h-4" /> Inquire About This Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Adarsh B S & DPS vs Traditional IT Agencies */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Client Advantage</span>
            <h2 className="section-title">
              Why Hire Adarsh B S Instead of Traditional Kerala IT Agencies?
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Traditional agencies in Kochi and Technopark bill 200% markups to support bloated offices and pass your code to junior interns. Here is why discerning businesses choose direct senior engineering.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 85, 0, 0.08)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontWeight: 700, color: 'var(--text-primary)' }}>Engineering Factor</th>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontWeight: 700, color: 'var(--accent-orange-bright)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    Adarsh B S &amp; DPS (Senior Architect)
                  </th>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontWeight: 700, color: 'var(--text-muted)' }}>
                    Traditional Kerala IT Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Developer Experience</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>Senior Architect (3+ yrs, 20+ projects, company founder)</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    Junior freshers or rotated trainees with zero ownership
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Core Technology Stack</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>Next.js 16, React 19, Python/Django, Odoo ERP</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    Outdated WordPress, Elementor, PHP templates with heavy plugins
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Page Load Speeds</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>Sub-second (&lt;0.6s LCP) with 95+ PageSpeed</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    Slow 3.5 to 6.0 seconds with poor Core Web Vitals
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Pricing &amp; Margins</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>0% Agency Markup. Transparent rates from ₹15,000</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    200%–400% management markup for office overhead
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Code &amp; IP Ownership</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>100% Client Ownership. Private GitHub commits from Day 1</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    Proprietary holding, vendor lock-in &amp; withheld credentials
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--text-primary)' }}>Communication Channel</td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-primary)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                      <strong>Direct WhatsApp &amp; Google Meet with senior architect (&lt;15m)</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>
                    Slow ticketing systems, middleman project managers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Featured Real-World Web Deployments (Case Studies) */}
      <section className="section-padding" id="projects">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Verified Production Portfolio</span>
            <h2 className="section-title">
              Real-World Web Platforms Engineered in Kerala &amp; Globally
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Explore commercial production websites and full-stack platforms engineered by Adarsh B S and Digital Product Solutions across various high-value industries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '200px', background: 'var(--bg-secondary)' }}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(10, 10, 12, 0.85)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent-orange-bright)',
                      border: '1px solid rgba(255, 85, 0, 0.3)'
                    }}
                  >
                    {study.category}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
                      {study.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--accent-orange-bright)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      <span>Explore Deployment</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20saw%20your%20work%20on%20${encodeURIComponent(study.title)}%20and%20want%20a%20similar%20web%20solution.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> Similar Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kerala Regional Hubs & Gulf NRI Coverage */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Regional &amp; Global Reach</span>
            <h2 className="section-title">
              Serving Kerala Tech Corridors &amp; UAE Malayali Founders
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Whether you need in-person technical scoping in Trivandrum or Kochi, or rapid-turnaround development for your business in Dubai or Abu Dhabi, we deliver with zero communication friction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Technopark Trivandrum</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Directly serving Kazhakkoottam, Phase 1, 2, 3 and corporate IT firms. In-person technical reviews and high-performance Next.js architectures.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Infopark Kochi &amp; SmartCity</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Supporting Kakkanad startups, logistics agencies, and corporate clients with custom full-stack web applications and CRM automations.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Calicut, Thrissur &amp; Kollam</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Engineering specialized e-commerce, healthcare portals, and retail platforms for merchants across Malabar, Cyberpark, and Central Kerala.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Globe className="w-5 h-5 text-orange-500" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Dubai, Abu Dhabi &amp; GCC</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                GST UTC+4 alignment (1.5h time gap), WhatsApp voice/chat, and AED multi-currency billing for Malayali NRI founders and trading enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Packages */}
      <section className="section-padding" id="pricing">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Transparent Commercials</span>
            <h2 className="section-title">
              Clear, Predictable Web Development Packages
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Zero hidden agency retainers. 100% intellectual property ownership from day one. Clearly defined deliverables for every stage of your digital growth.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {pricingPackages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: pkg.popular ? '2px solid var(--accent-orange-bright)' : '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  boxShadow: 'var(--card-shadow)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {pkg.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent-orange-bright)',
                      color: '#fff',
                      padding: '3px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Recommended Choice
                  </div>
                )}

                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-orange-bright)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {pkg.badge}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', margin: '8px 0 12px' }}>
                    {pkg.name}
                  </h3>
                  <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                    {pkg.price}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    {pkg.altPrice}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
                    {pkg.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 className="w-4 h-4 text-orange-500" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={pkg.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                >
                  <MessageSquare className="w-4 h-4" /> {pkg.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" id="faq" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '45px' }}>
            <span className="section-badge">Direct Answers</span>
            <h2 className="section-title">
              Frequently Asked Questions (Web Development Kerala)
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Everything you need to know about pricing, timelines, technology selection, and code ownership before starting your web project.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {webFaqs.map((faq, idx) => (
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
                    <a
                      href={`https://wa.me/919400355185?text=Hi%20Adarsh,%20regarding%20the%20FAQ:%20${encodeURIComponent(faq.question)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--accent-orange-bright)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ask Adarsh about this directly on WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.15) 0%, rgba(20, 20, 24, 0.95) 100%)',
              border: '1px solid var(--border-highlight)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'center',
              boxShadow: 'var(--accent-glow)',
              position: 'relative'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255, 85, 0, 0.2)',
                color: 'var(--accent-orange-bright)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              Get Your Web Project Started
            </span>

            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', maxWidth: '750px', margin: '0 auto 16px' }}>
              Have a Web Development Project in Mind? Let&apos;s Build Something Extraordinary.
            </h2>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 35px', lineHeight: 1.6 }}>
              Receive an architectural blueprint, transparent milestone estimate, and tech-stack recommendation within 24 hours. Zero sales pressure, just direct senior engineering guidance.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919400355185?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project%20in%20Kerala."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: '1.05rem' }}
              >
                <MessageSquare className="w-5 h-5" /> Start WhatsApp Discovery Call
              </a>

              <a
                href="tel:+919400355185"
                className="btn btn-outline"
                style={{ padding: '14px 28px', fontSize: '1.05rem' }}
              >
                <Phone className="w-5 h-5" /> Call: +91 94003 55185
              </a>

              <Link
                href="/hire-developer/"
                className="btn btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1.05rem' }}
              >
                <Briefcase className="w-5 h-5" /> View Developer Rates
              </Link>
            </div>
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
                <span className="brand-badge">Senior Architect</span>
              </Link>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '340px', marginBottom: '20px' }}>
                Senior freelance software developer, full-stack architect, and founder of Digital Product Solutions. Engineering sub-second web applications, Python Django backends, and Odoo ERP systems across Kerala, UAE, and global markets.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="WhatsApp Direct">
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a href="tel:+919400355185" className="footer-social-link" title="Call Direct">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:adarshsarachandran@gmail.com" className="footer-social-link" title="Email Inquiries">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Web &amp; Software Solutions</h4>
              <ul className="footer-links">
                <li><Link href="/web-development-kerala/" className="footer-link" style={{ color: 'var(--accent-orange-bright)', fontWeight: 600 }}>Web Development Kerala</Link></li>
                <li><Link href="/odoo-developer-kerala/" className="footer-link">Odoo ERP Developer Kerala</Link></li>
                <li><Link href="/hire-developer/" className="footer-link">Hire Freelance Developer (Rates)</Link></li>
                <li><a href="/#services" className="footer-link">Custom Software Engineering</a></li>
                <li><a href="/#services" className="footer-link">Technical SEO &amp; Speed Audits</a></li>
                <li><a href="/#services" className="footer-link">WhatsApp Cloud API &amp; Automations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Navigation &amp; Legal</h4>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Home Portfolio</Link></li>
                <li><a href="/#clients" className="footer-link">Clients &amp; Deployments</a></li>
                <li><a href="/#projects" className="footer-link">Case Studies &amp; Demos</a></li>
                <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/delete-data" className="footer-link">User Data Deletion</Link></li>
                <li><a href="/llms.txt" target="_blank" className="footer-link">LLM Index (llms.txt)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Adarsh B S &amp; Digital Product Solutions. All rights reserved.</p>
            <p>Kerala, India • Remote Engineering for UAE, Australia, UK &amp; USA</p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Quick Bar */}
      <div className="mobile-quick-bar">
        <a
          href="https://wa.me/919400355185?text=Hi%20Adarsh,%20I%20am%20looking%20for%20web%20development%20services%20in%20Kerala."
          className="quick-bar-btn quick-bar-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </a>
        <a href="tel:+919400355185" className="quick-bar-btn quick-bar-call">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="#pricing" className="quick-bar-btn btn-primary" style={{ flex: 1, padding: '10px' }}>
          Packages
        </a>
      </div>
    </>
  );
}
