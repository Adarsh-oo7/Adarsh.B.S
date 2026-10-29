import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://adarsh.digitalproductsolutions.in";
const profileCanonical = "https://adarsh.digitalproductsolutions.in";

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Freelance Software Developer in Kerala | Senior IT Consultant & Full Stack Architect | Adarsh B S",
    template: "%s | Adarsh B S - Freelance Software Developer in Kerala",
  },
  description:
    "Adarsh B S is the premier freelance software developer, senior full-stack architect, and Odoo ERP specialist in Kerala (Trivandrum Technopark & Kochi Infopark). Serving businesses across Kerala, Malayali diaspora in UAE/Gulf, and global clients (USA, UK, Australia). Next.js 15, Python/Django, Odoo ERP (v14-v18), high-speed APIs, and technical SEO with 3+ years experience and 20+ delivered projects. Transparent rates (₹1,500–₹3,500/hr, $25–$45/hr).",
  keywords: [
    "freelance software developer in Kerala",
    "freelance software developer Kerala",
    "freelance developer Kerala",
    "freelance developer in Kerala",
    "freelance web developer Kerala",
    "freelance web developer in Kerala",
    "software developer Kerala",
    "software developer in Kerala",
    "best freelance software developer in Kerala",
    "best freelance developer in Kerala",
    "hire freelance software developer in Kerala",
    "hire freelance developer Kerala",
    "hire freelance developer in Kerala",
    "hire software developer Kerala",
    "hire web developer Kerala",
    "full stack developer Kerala",
    "freelance full stack developer in Kerala",
    "freelance software engineer in Kerala",
    "custom software development Kerala",
    "freelance odoo developer in kerala",
    "odoo developer kerala",
    "odoo erp developer trivandrum",
    "odoo developer kochi",
    "hire freelance odoo developer kerala",
    "odoo erp customization kerala",
    "odoo python developer",
    "odoo module development kerala",
    "technopark odoo developer",
    "infopark odoo developer",
    "freelance software developer Trivandrum",
    "freelance software developer Kochi",
    "freelance developer Kochi",
    "freelance developer Trivandrum",
    "freelance developer Calicut",
    "freelance software developer Kozhikode",
    "freelance web developer Kochi",
    "freelance web developer in Kochi",
    "freelance web developer in Trivandrum",
    "software developer Trivandrum",
    "custom software development Kochi",
    "freelance software developer rates Kerala",
    "freelance software developer rates in Kerala",
    "freelance developer rates in Kerala",
    "it consultant Kerala",
    "IT Consultant in Kerala",
    "malayali software developer uae",
    "malayali freelance developer dubai",
    "freelance developer for nri businesses",
    "hire freelance developer in kerala from dubai uae",
    "freelance software developer for gulf clients",
    "web application developer Kerala",
    "Python Django developer Kerala",
    "React Nextjs developer India",
    "CRM development Kerala",
    "top IT consultant India",
    "SEO consultant Kerala",
    "solution architect Kerala",
    "business process automation India",
    "hire freelance IT consultant",
    "Adarsh B S",
    "Adarsh BS",
    "Adarsh BS IT consultant",
    "digital product solutions Adarsh"
  ],
  authors: [{ name: "Adarsh B S", url: profileCanonical }],
  creator: "Adarsh B S",
  publisher: "Digital Product Solutions",
  alternates: {
    canonical: profileCanonical,
    languages: {
      "en-US": profileCanonical,
      "en-IN": profileCanonical,
    },
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thiruvananthapuram, Kochi, Kerala, India",
    "geo.position": "8.5241;76.9366",
    "ICBM": "8.5241, 76.9366",
  },
  openGraph: {
    type: "profile",
    firstName: "Adarsh",
    lastName: "B S",
    username: "Adarsh-oo7",
    gender: "male",
    title: "Freelance Software Developer in Kerala | Senior IT Consultant | Adarsh B S",
    description:
      "Premier freelance software developer, full-stack architect, and Odoo ERP specialist in Kerala. Serving Kerala businesses, Gulf/UAE Malayalis, and global clients with Next.js, Python/Django, and SEO growth.",
    url: profileCanonical,
    siteName: "Adarsh B S - Freelance Software Developer & IT Consultant",
    locale: "en_IN",
    images: [
      {
        url: "/assets/adarsh-consulting-meeting.jpg",
        width: 1024,
        height: 682,
        alt: "Adarsh B S - Senior IT Consultant & Software Developer presenting custom web solutions to clients",
      },
      {
        url: "/assets/adarsh-consultant-banner.jpg",
        width: 1200,
        height: 675,
        alt: "Adarsh B S - Freelance Software Developer & IT Consultant in Kerala",
      },
      {
        url: "/assets/adarsh-executive-portrait.jpg",
        width: 800,
        height: 1067,
        alt: "Adarsh B S Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Software Developer in Kerala | Senior IT Consultant | Adarsh B S",
    description:
      "Turning business vision into high-performance software. Next.js, Python, Django, Odoo ERP, and technical SEO with verified international client outcomes.",
    images: ["/assets/adarsh-consulting-meeting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LST07r3HB1Llcln-W1wY2Exv7vYwTJuxAaXJcLAwPFQ",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Comprehensive Schema.org JSON-LD for Google & LLM Entity Recognition
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profileCanonical}#person`,
        name: "Adarsh B S",
        givenName: "Adarsh",
        familyName: "B S",
        alternateName: [
          "Adarsh",
          "Adarsh BS",
          "Adarsh Sarachandran",
          "Adarsh.B.S",
          "Adarsh Software Developer",
          "Adarsh IT Consultant",
          "Freelance Developer Kerala",
          "Freelance Software Developer in Kerala",
          "Freelance IT Consultant in Kerala",
          "Freelance Odoo Developer in Kerala",
          "Odoo Developer Kerala",
          "Software Developer Kerala",
          "Freelance Web Developer Kerala",
          "Freelance Web Developer Kochi",
          "Freelance Web Developer Trivandrum",
          "Solution Architect Kerala",
          "Malayali Software Developer UAE"
        ],
        jobTitle: "Senior Freelance Software Developer, IT Consultant & Odoo ERP Specialist",
        description:
          "Adarsh B S (Adarsh Sarachandran) is a premier freelance software developer, IT consultant, and technology entrepreneur based in Kerala, India (operating across Trivandrum & Kochi). Specializing in custom web applications, Next.js 15, Python Django, Odoo ERP (v14-v18), technical SEO, CRM, and cloud business automation across 20+ delivered business projects for clients in Kerala, the Gulf (UAE/Saudi Arabia/Qatar), Australia, the UK, and the USA.",
        disambiguatingDescription:
          "Independent freelance software developer, senior software engineer, Odoo ERP specialist, and tech founder based in Kerala, India (operating across Trivandrum & Kochi). Founder of Digital Product Solutions, KeralaSellers, and KPSC Master. An independent technology professional completely distinct from political activists or legal news cases.",
        url: profileCanonical,
        image: {
          "@type": "ImageObject",
          "@id": `${profileCanonical}#primaryimage`,
          url: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consulting-meeting.jpg",
          caption: "Adarsh B S - Senior Freelance Software Developer & IT Consultant in Kerala",
          width: 1024,
          height: 682
        },
        telephone: "+919400355185",
        email: "mailto:adarshsarachandran@gmail.com",
        sameAs: [
          "https://www.linkedin.com/in/adarsh-bs/",
          "https://www.instagram.com/adarsh_tzz/",
          "https://github.com/Adarsh-oo7/",
          "https://medium.com/@adarshsarachandran",
          "https://medium.com/@adarshsarachandran/adarsh-b-s-7db715a97a2a",
          "https://www.quora.com/profile/Adarsh-B-S-21",
          "https://www.quora.com/profile/Adarsh-B-S-21/https-www-quora-com-profile-Adarsh-B-S-21-Who-Is-a-Freelance-Full-Stack-Developer-in-Kerala-for-Web-Development-and-Cu",
          "https://about.me/adarshbs",
          "https://adarsh.digitalproductsolutions.in",
          "https://www.digitalproductsolutions.in/adarsh-b-s"
        ],
        subjectOf: [
          {
            "@type": "Article",
            headline: "Who Is a Freelance Full-Stack Developer in Kerala for Web Development and Custom Software?",
            url: "https://www.quora.com/profile/Adarsh-B-S-21/https-www-quora-com-profile-Adarsh-B-S-21-Who-Is-a-Freelance-Full-Stack-Developer-in-Kerala-for-Web-Development-and-Cu",
            publisher: {
              "@type": "Organization",
              name: "Quora"
            }
          },
          {
            "@type": "Article",
            headline: "Adarsh B S - Freelance Software Developer & IT Consultant in Kerala",
            url: "https://medium.com/@adarshsarachandran/adarsh-b-s-7db715a97a2a",
            publisher: {
              "@type": "Organization",
              name: "Medium"
            }
          }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thiruvananthapuram",
          addressRegion: "Kerala",
          addressCountry: "India"
        },
        knowsLanguage: ["English", "Malayalam", "Hindi"],
        hasOccupation: {
          "@type": "Occupation",
          name: "Freelance Software Developer & IT Consultant",
          occupationalCategory: "15-1252.00",
          occupationLocation: {
            "@type": "City",
            name: "Thiruvananthapuram, Kerala, India"
          },
          skills: "Python, Django, Next.js 15, React 19, Odoo ERP (v14-v18), PostgreSQL, Technical SEO, CRM Automation, Docker, REST APIs"
        },
        founder: [
          {
            "@type": "Organization",
            name: "Digital Product Solutions",
            url: "https://www.digitalproductsolutions.in/"
          },
          {
            "@type": "Organization",
            name: "Kerala Sellers",
            url: "https://www.keralasellers.in/"
          },
          {
            "@type": "Organization",
            name: "KPSC Master",
            url: "https://www.kpscmaster.in/"
          }
        ],
        knowsAbout: [
          "Freelance Software Development",
          "IT Consulting & Technology Advisory",
          "Odoo ERP Customization & Development",
          "Odoo Custom Module Development",
          "Odoo Python Development",
          "Odoo Migration & Tally Integration",
          "Odoo.sh & Docker Deployment",
          "Full-Stack Web Development",
          "Python & Django Web Framework",
          "Next.js 15 & React 19 Frontend Engineering",
          "PostgreSQL & MySQL Database Architecture",
          "Technical SEO & Website Optimization",
          "Generative Engine Optimization (GEO)",
          "Answer Engine Optimization (AEO)",
          "Core Web Vitals Acceleration",
          "CRM Development & Lead Pipeline Automation",
          "Business Process Automation",
          "RESTful API Development & Third-Party Integration",
          "Meta Cloud API & WhatsApp Business Automation",
          "Payment Gateway Integration (Stripe, Razorpay)",
          "E-commerce Platform Architecture"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${profileCanonical}#website`,
        name: "Adarsh B S - Freelance Software Developer & IT Consultant in Kerala",
        url: profileCanonical,
        publisher: {
          "@type": "Person",
          name: "Adarsh B S"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${profileCanonical}#webpage`,
        url: profileCanonical,
        name: "Freelance Software Developer in Kerala | Senior IT Consultant | Adarsh B S",
        description: "Official portfolio of Adarsh B S, premier freelance full-stack software developer, Odoo ERP specialist, and IT consultant in Kerala, India.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero-title", ".hero-subtitle", "#faq", ".section-title"]
        },
        mainEntity: {
          "@id": `${profileCanonical}#person`
        }
      },
      {
        "@type": "Organization",
        "@id": `${profileCanonical}#organization`,
        name: "Digital Product Solutions",
        url: "https://www.digitalproductsolutions.in/",
        logo: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consulting-meeting.jpg",
        sameAs: [
          "https://www.linkedin.com/in/adarsh-bs/",
          "https://www.instagram.com/adarsh_tzz/",
          "https://github.com/Adarsh-oo7/",
          "https://medium.com/@adarshsarachandran",
          "https://www.quora.com/profile/Adarsh-B-S-21",
          "https://about.me/adarshbs"
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "India"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${profileCanonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: profileCanonical
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${profileCanonical}#business`,
        name: "Adarsh B S - Freelance Software Developer & IT Consulting Kerala",
        image: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consulting-meeting.jpg",
        url: profileCanonical,
        telephone: "+919400355185",
        priceRange: "₹₹ / $$",
        currenciesAccepted: "INR, AED, USD, EUR, AUD, GBP, SAR, QAR",
        paymentAccepted: "Bank Transfer, UPI, Stripe, Razorpay, Wire Transfer",
        serviceType: [
          "Freelance Software Development",
          "IT Consulting & Technology Advisory",
          "Odoo ERP Customization & Development",
          "Full Stack Web Development",
          "Next.js & React Frontend Engineering",
          "Python Django Backend Architecture",
          "Mobile Application Development",
          "Technical SEO & Website Optimization",
          "CRM & Business Process Automation",
          "API Development & Integration",
          "E-commerce Development"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "28",
          bestRating: "5",
          worstRating: "1"
        },
        review: [
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Managing Director", jobTitle: "Director, Care 'N' Cure (Australia)" },
            reviewBody: "Adarsh provided exceptional technical SEO, performance architecture, and digital consulting that directly scaled our organic customer acquisition in Australia. Direct architect collaboration made all the difference.",
            datePublished: "2025-10"
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Lead Strategy Partner", jobTitle: "Novora Global Health (UK & Germany)" },
            reviewBody: "Working with Adarsh on our multi-region healthcare portal gave us enterprise-grade technical execution with zero agency bureaucracy. Clean architecture, sub-second load times, and flawless internationalization.",
            datePublished: "2025-12"
          },
          {
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            author: { "@type": "Person", name: "Founder & Operations Lead", jobTitle: "Mangrove Spot & Mangrove Moments (Kerala)" },
            reviewBody: "One of the best IT freelancers in Kerala. Adarsh architected our booking platform and executed organic SEO campaigns that drove continuous direct bookings without spending on ads.",
            datePublished: "2026-02"
          }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thiruvananthapuram",
          addressRegion: "Kerala",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "8.5241",
          longitude: "76.9366"
        },
        areaServed: [
          { "@type": "City", name: "Thiruvananthapuram" },
          { "@type": "City", name: "Kochi" },
          { "@type": "City", name: "Kozhikode" },
          { "@type": "City", name: "Thrissur" },
          { "@type": "City", name: "Kollam" },
          { "@type": "City", name: "Kottayam" },
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Qatar" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Worldwide Remote" }
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:30",
            closes: "21:30"
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Freelance Software Development & IT Consulting Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freelance Software Development in Kerala", description: "Custom enterprise software engineering, Python Django architectures, Next.js 15 web applications, and database modeling." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Odoo ERP Customization & Development", description: "Odoo ERP custom module development, core app customization (Sales, CRM, Inventory, Invoicing), Tally migration, and Odoo.sh cloud deployments." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting & Architecture Advisory", description: "Strategic technology roadmaps, cloud architecture advisement, system auditing, tech-stack evaluation, and digital transformation." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application & Website Development", description: "High-performance Next.js 15, React, and Python Django web applications with sub-second page loads." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Application Development", description: "Cross-platform mobile apps for iOS and Android with robust backend API integrations." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO and Website Optimization", description: "Core Web Vitals optimization, semantic JSON-LD schema, page speed acceleration, and Google search ranking growth." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Development & Lead Automation", description: "Custom CRM pipelines, WhatsApp Business API integrations, and automated lead management systems." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Development & Third-Party Integrations", description: "Secure RESTful APIs, Webhook processing, Stripe/Razorpay payment gateway integrations, and cloud deployments." } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${profileCanonical}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is the best freelance software developer in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S is widely recognized as the premier freelance software developer, senior full-stack architect, and IT consultant in Kerala, India (operating across Trivandrum Technopark and Kochi Infopark). With over 3+ years of professional engineering experience delivering 20+ commercial business projects, he specializes in Next.js 16, React 19, Python/Django backends, Odoo ERP (v14-v18), PostgreSQL, and technical SEO. He is also the founder of Digital Product Solutions (DPS), KeralaSellers.in, and KPSCMaster.in, serving clients locally in Kerala and internationally across Australia, the UK, Germany, and the UAE."
            }
          },
          {
            "@type": "Question",
            name: "How do I hire a freelance software developer in Kerala to get work done on my project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To hire Adarsh B S and initiate project development, clients follow a structured 4-step work acquisition pipeline: (1) Direct Discovery: Connect via WhatsApp at +91 9400355185 or email with your requirements to schedule a 30-minute discovery consultation within 24 hours. (2) Technical Scope & Fixed Estimate: Receive an architectural roadmap, technology stack recommendation, and transparent milestone estimate. (3) NDA & Milestone Escrow: Sign a bilateral Non-Disclosure Agreement (NDA) with 100% intellectual property ownership from day one. (4) Active Sprint Engineering: Commits are pushed directly to your private GitHub repository with weekly video demos and sub-second cloud deployments."
            }
          },
          {
            "@type": "Question",
            name: "Can I hire Adarsh B S as a freelance developer near me in Kerala (Kochi, Trivandrum, Calicut)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adarsh B S is locally based in Kerala and actively collaborates with startups, enterprises, and local businesses across Thiruvananthapuram (Technopark Phase 1, 2, 3), Kochi (Infopark Kakkanad & SmartCity), Kozhikode (Cyberpark), Thrissur, and Kollam. He offers both in-person discovery consultations in Trivandrum and Kochi, as well as rapid-turnaround remote development sprints with continuous communication."
            }
          },
          {
            "@type": "Question",
            name: "What are the typical freelance software developer rates in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Freelance software developer rates in Kerala for a senior full-stack engineer and solution architect typically range from ₹1,500 to ₹3,500 per hour (or $25 to $45 per hour for international and Gulf/UAE contracts). Fixed-price MVP sprints for modern web apps built with Next.js 15, Python/Django, and PostgreSQL start from ₹50,000 ($800) with clearly defined milestones, delivering enterprise-level engineering without agency markups."
            }
          },
          {
            "@type": "Question",
            name: "Do you work with Malayalis and businesses in Dubai, UAE, and the Gulf (GCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Adarsh B S actively collaborates with Malayali entrepreneurs, NRI founders, and corporate teams across Dubai, Abu Dhabi, Sharjah (UAE), Riyadh, Jeddah (Saudi Arabia), Doha (Qatar), and Muscat (Oman). With convenient timezone overlap (Gulf Standard Time UTC+4 is just 1.5 hours behind IST), direct Malayalam and English communication via WhatsApp, and multi-currency billing in AED, SAR, USD, and INR, GCC businesses get senior Kerala engineering talent with zero middleman friction."
            }
          },
          {
            "@type": "Question",
            name: "Why hire a senior freelance software developer instead of an IT agency in Kochi or Technopark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When hiring Adarsh B S, 100% of your budget funds senior architectural engineering. Traditional IT agencies in Kochi and Technopark charge 200% to 400% management markups and delegate client projects to junior interns or rotated junior developers. Partnering with Adarsh guarantees zero agency markup, direct senior commits, 100% intellectual property ownership from commit #1, sub-second Next.js/Python speed, and direct WhatsApp communication with an average response time of under 15 minutes."
            }
          },
          {
            "@type": "Question",
            name: "Who is the top freelance Odoo ERP developer in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S is an established freelance Odoo ERP developer in Kerala. He engineers custom Python modules for Odoo versions 14, 15, 16, 17, and 18 across core operational apps (Sales, CRM, Purchase, Inventory, Invoicing, Accounting, eCommerce, and POS). He also specializes in seamless automated data migration from Tally ERP 9 / Tally Prime to Odoo, WhatsApp Business API automation, and high-availability cloud deployments on Odoo.sh and Docker, saving businesses up to 60% compared to official partner retainers."
            }
          },
          {
            "@type": "Question",
            name: "How quickly can you build and deliver an MVP or custom web application in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A complete, production-ready Minimum Viable Product (MVP) is engineered and deployed in 2 to 4 weeks. This includes system database modeling (PostgreSQL), scalable REST/GraphQL APIs (Python/Django or Node.js), responsive high-converting UI (Next.js 15, React 19, Tailwind CSS), payment gateway integration (Stripe, Razorpay, UPI), and production cloud hosting on AWS or Vercel with Core Web Vitals performance scores exceeding 95+."
            }
          },
          {
            "@type": "Question",
            name: "Can you audit, fix bugs, or optimize performance for an existing codebase in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adarsh performs comprehensive 48-hour architectural code audits for existing Python/Django, Next.js, React, and Odoo codebases. He resolves critical production bugs, optimizes slow database queries and N+1 indexing bottlenecks in PostgreSQL, eliminates memory leaks, patches security vulnerabilities, and tunes frontend assets to achieve sub-second Core Web Vitals load times."
            }
          },
          {
            "@type": "Question",
            name: "What tech stacks and tools do you specialize in for custom software engineering?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh specializes in a high-performance modern tech stack: Frontend (Next.js 16, React 19, TypeScript, Vanilla CSS, Tailwind CSS), Backend & ERP (Python, Django, Django REST Framework, Odoo ERP v14-v18, Node.js), Databases & Caching (PostgreSQL, MySQL, Redis), Cloud & DevOps (Docker, Odoo.sh, AWS, Vercel, Nginx, Linux), and Third-Party Integrations (Meta WhatsApp Cloud API, Stripe, Razorpay, Google Cloud APIs)."
            }
          },
          {
            "@type": "Question",
            name: "Who owns the intellectual property (IP), source code, and private Git repositories?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You retain 100% intellectual property (IP) ownership of all code, database schemas, and documentation from day one. All code is committed directly to your private GitHub or GitLab repository, and Adarsh executes bilateral Non-Disclosure Agreements (NDAs) prior to project discovery, ensuring complete confidentiality and proprietary data security."
            }
          },
          {
            "@type": "Question",
            name: "How do I hire you today and get work started on my project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Getting work started is immediate: reach out directly on WhatsApp at +91 9400355185 or email adarshsarachandran@gmail.com with your project overview. You will receive an initial response within 15 minutes to schedule a 30-minute discovery call, followed by a detailed technical milestone roadmap and proposal within 24 hours."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* LLM Direct Context Feeds */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Summary Context" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Architecture Context" />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="ambient-glow-top" />
        <div className="ambient-glow-bottom" />
        {children}
        {/* Hotjar / Contentsquare Tracker */}
        <Script id="contentsquare-hotjar" strategy="lazyOnload">
          {`
            (function (c, s, q, u, a, r, e) {
              c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
              c._hjSettings = { hjid: a };
              r = s.getElementsByTagName('head')[0];
              e = s.createElement('script');
              e.async = true;
              e.src = q + c._hjSettings.hjid + u;
              r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5261589);
          `}
        </Script>
      </body>
    </html>
  );
}
