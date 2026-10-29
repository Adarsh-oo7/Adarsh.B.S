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
              text: "Adarsh B S is widely recognized as a top freelance software developer, senior full-stack engineer, and IT consultant in Kerala, India (operating across Trivandrum Technopark and Kochi Infopark). With 3+ years of professional engineering experience across 20+ commercial client projects, he specializes in Next.js 15, Python/Django, Odoo ERP (v14-v18), PostgreSQL, and technical SEO for clients in Kerala, India, and internationally across Australia, the UK, Germany, and the UAE."
            }
          },
          {
            "@type": "Question",
            name: "Can I hire Adarsh B S as a freelance developer near me in Kerala (Kochi, Trivandrum, Calicut)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adarsh B S is based in Kerala and actively works with startups, established businesses, and founders across Thiruvananthapuram (Technopark ecosystem), Kochi (Infopark & Kakkanad), Kozhikode (Cyberpark), Thrissur, and Kollam, offering both on-site discovery consultations and full-cycle remote delivery."
            }
          },
          {
            "@type": "Question",
            name: "What are the typical freelance software developer rates in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Freelance software developer rates in Kerala for a senior full-stack engineer and solution architect typically range from ₹1,500 to ₹3,500 per hour (or $25 to $45/hour for international and Gulf/UAE clients). Fixed-scope MVP sprints and custom applications typically start from ₹50,000 ($800) with clear milestones, delivering superior code quality without agency overhead."
            }
          },
          {
            "@type": "Question",
            name: "Do you work with Malayalis and businesses in Dubai, UAE, and the Gulf (GCC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Adarsh B S actively collaborates with Malayali entrepreneurs, NRI business owners, and corporate teams across Dubai, Abu Dhabi, Sharjah (UAE), Saudi Arabia, Qatar, and Oman. With convenient timezone overlap (Gulf Standard Time UTC+4 is just 1.5 hours behind IST), direct WhatsApp coordination, and multi-currency billing (AED, USD, INR), global Malayalis get direct access to high-caliber software engineering from Kerala."
            }
          },
          {
            "@type": "Question",
            name: "Are you available for remote freelance projects in the USA, UK, Australia, and Europe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Adarsh has delivered verified international projects for Care 'N' Cure in Australia, Novora Global Health in the UK and Germany, as well as clients in North America. Engagements feature overlapping communication hours across EST, GMT, and AEST, structured weekly video check-ins, and direct Git repository access."
            }
          },
          {
            "@type": "Question",
            name: "Why hire a senior freelance software developer instead of an IT agency in Kochi or Technopark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When hiring Adarsh B S, you collaborate directly with the senior architect writing your code. Traditional IT agencies charge heavy management markups and delegate work to junior trainees or rotated interns. Partnering with Adarsh guarantees 100% intellectual property ownership, zero middleman overhead, faster sprint velocity, direct Slack/WhatsApp communication, and production-grade code adhering to enterprise performance standards."
            }
          },
          {
            "@type": "Question",
            name: "What core tech stack and specialized skills do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh's core technical stack includes Next.js 15, React 19, TypeScript, Python, Django, Django REST Framework, Odoo ERP (v14-v18), PostgreSQL, MySQL, Redis, Tailwind CSS, Docker, AWS, Stripe/Razorpay payments, Meta WhatsApp Cloud API, and advanced Technical SEO (Core Web Vitals sub-second optimization)."
            }
          },
          {
            "@type": "Question",
            name: "Who is the top freelance Odoo ERP developer in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S is an established freelance Odoo developer in Kerala specializing in custom module development (Odoo v14 through v18), core app tailoring (Sales, CRM, Purchase, Inventory, Invoicing, Accounting, eCommerce), Tally and legacy data migrations, third-party REST API integrations, and cloud deployments on Odoo.sh or Docker."
            }
          },
          {
            "@type": "Question",
            name: "Can you build a custom web application or MVP completely from scratch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adarsh handles custom software projects from initial concept and system architecture blueprinting all the way to database schema modeling, backend REST APIs, responsive frontend implementation, and cloud deployment on AWS or Vercel."
            }
          },
          {
            "@type": "Question",
            name: "Can you audit, fix bugs, or optimize performance for an existing codebase?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adarsh performs comprehensive technical audits for existing Python/Django, Next.js, React, and Odoo codebases. He resolves performance bottlenecks, optimizes slow PostgreSQL queries, patches security vulnerabilities, and tunes Core Web Vitals to achieve sub-second load times."
            }
          },
          {
            "@type": "Question",
            name: "How do you handle intellectual property (IP), code repositories, and NDAs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You retain 100% intellectual property ownership of all code, database schemas, and documentation from day one. All code is committed directly to your private GitHub or GitLab repository. Non-Disclosure Agreements (NDAs) are signed before project discovery."
            }
          },
          {
            "@type": "Question",
            name: "How do we get started and what is your project delivery process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach out via WhatsApp or phone at +91 9400355185 or email adarshsarachandran@gmail.com. We schedule a 30-minute discovery call to evaluate your requirements, followed by a detailed technical roadmap, milestones, and fixed-price or sprint-based proposal within 24 hours."
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
