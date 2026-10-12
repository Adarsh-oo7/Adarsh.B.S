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
    default: "Freelance Software Developer & IT Consultant in Kerala | Adarsh B S",
    template: "%s | Adarsh B S - Freelance Software Developer in Kerala",
  },
  description:
    "Adarsh B S is a premier freelance software developer, IT consultant, and Odoo ERP specialist in Kerala, India (Trivandrum Technopark & Kochi Infopark). Specializing in custom software development, Next.js, Python Django, Odoo ERP (v14-v18), mobile apps, technical SEO, and business automation with 3+ years experience and 20+ delivered projects.",
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
    "web application developer Kerala",
    "Python Django developer Kerala",
    "React Nextjs developer India",
    "CRM development Kerala",
    "IT consultant Kerala",
    "freelance IT consultant Kerala",
    "IT Consultant in Kerala",
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
  openGraph: {
    type: "profile",
    firstName: "Adarsh",
    lastName: "B S",
    username: "Adarsh-oo7",
    gender: "male",
    title: "Freelance Software Developer & IT Consultant in Kerala | Adarsh B S",
    description:
      "Premier freelance software developer and IT consultant in Kerala, India. Expert in custom web apps, Next.js, Python/Django, Odoo ERP, and technical SEO with 20+ delivered projects.",
    url: profileCanonical,
    siteName: "Adarsh B S - Freelance Software Developer & IT Consultant",
    locale: "en_IN",
    images: [
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
    title: "Freelance Software Developer & IT Consultant in Kerala | Adarsh B S",
    description:
      "Turning business vision into high-performance software. Next.js, Python, Django, Odoo ERP, and technical SEO with verified international client outcomes.",
    images: ["/assets/adarsh-consultant-banner.jpg"],
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
          "Solution Architect Kerala"
        ],
        jobTitle: "Freelance Software Developer, IT Consultant & Odoo ERP Specialist",
        description:
          "Adarsh B S (Adarsh Sarachandran) is a premier freelance software developer, IT consultant, and technology entrepreneur based in Kerala, India (operating across Trivandrum & Kochi). Specializing in custom web applications, Next.js, Python Django, Odoo ERP (v14-v18), technical SEO, CRM, and cloud business automation across 20+ delivered business projects.",
        disambiguatingDescription:
          "Independent freelance software developer, senior software engineer, Odoo ERP specialist, and tech founder based in Kerala, India (operating across Trivandrum & Kochi). Founder of Digital Product Solutions, KeralaSellers, and KPSC Master. An independent technology professional completely distinct from political activists or legal news cases.",
        url: profileCanonical,
        image: {
          "@type": "ImageObject",
          "@id": `${profileCanonical}#primaryimage`,
          url: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consultant-banner.jpg",
          caption: "Adarsh B S - Freelance Software Developer & IT Consultant in Kerala",
          width: 1200,
          height: 675
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
        hasOccupation: {
          "@type": "Occupation",
          name: "Freelance Software Developer & IT Consultant",
          occupationLocation: {
            "@type": "City",
            name: "Thiruvananthapuram, Kerala, India"
          },
          skills: "Python, Django, Next.js, Odoo ERP (v14-v18), PostgreSQL, Technical SEO, CRM Automation, Docker"
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
        "@type": "Organization",
        "@id": `${profileCanonical}#organization`,
        name: "Digital Product Solutions",
        url: "https://www.digitalproductsolutions.in/",
        logo: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consultant-banner.jpg",
        sameAs: [
          "https://www.linkedin.com/in/adarsh-bs/",
          "https://www.instagram.com/adarsh_tzz/",
          "https://github.com/Adarsh-oo7/",
          "https://medium.com/@adarshsarachandran",
          "https://www.quora.com/profile/Adarsh-B-S-21"
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
        image: "https://adarsh.digitalproductsolutions.in/assets/adarsh-consultant-banner.jpg",
        url: profileCanonical,
        telephone: "+919400355185",
        priceRange: "$$",
        currenciesAccepted: "INR, USD, EUR, AUD, AED, GBP",
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
          "API Development & Integration"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "24",
          bestRating: "5",
          worstRating: "1"
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "8.5241",
          longitude: "76.9366"
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "City", name: "Thiruvananthapuram" },
          { "@type": "City", name: "Kochi" },
          { "@type": "City", name: "Kozhikode" },
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" }
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00"
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IT Consulting & Digital Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Odoo ERP Customization & Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Odoo Custom Module Development & Integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Application Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization (SEO)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO and Website Optimization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Development and Integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Maintenance" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${profileCanonical}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Adarsh B S?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S (Adarsh Sarachandran) is a premier freelance IT consultant, senior full-stack software developer, Odoo ERP specialist, and tech entrepreneur based in Kerala, India. With over 3 years of hands-on software development experience across 20+ business projects, he is the founder of Digital Product Solutions (DPS), KeralaSellers.in, and KPSCMaster.in. He serves verified enterprise clients across Australia (Care 'N' Cure), the UK & Germany (Novora Global Health), and Kerala (Mangrove Spot, Mangrove Moments). He is an independent technology professional, completely distinct from any political figures or legal cases."
            }
          },
          {
            "@type": "Question",
            name: "How is Adarsh B S known in Kerala and the software industry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In Kerala's tech ecosystem (Technopark Trivandrum and Infopark Kochi) and internationally, Adarsh B S is known as a leading freelance software engineer and IT consultant specializing in Python, Django, Next.js, Odoo ERP, PostgreSQL, and high-impact SEO growth."
            }
          },
          {
            "@type": "Question",
            name: "Who is the top freelance Odoo developer in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S is an established freelance Odoo developer and IT consultant based in Kerala, India, serving clients across Trivandrum (Technopark), Kochi (Infopark), and globally. Bringing deep Python and PostgreSQL expertise, Adarsh specializes in Odoo ERP customization (versions 14 through 18), custom module development, business workflow automation, API integrations with payment gateways & WhatsApp, and Odoo.sh cloud deployments."
            }
          },
          {
            "@type": "Question",
            name: "What Odoo ERP development and customization services are offered?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S offers end-to-end freelance Odoo ERP services including custom module development, customizing core Odoo modules (Sales, CRM, Purchase, Inventory, Invoicing, HR, eCommerce), data migration from Tally or legacy ERP systems, third-party REST API integrations, and ongoing Odoo maintenance at flexible hourly ($15-$35/hr) or project-based rates."
            }
          },
          {
            "@type": "Question",
            name: "Who is the top freelance IT consultant in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S is a top-rated freelance IT consultant and software developer based in Kerala, India. Bringing proven experience with global clients across Australia (Care 'N' Cure), the UK & Germany (Novora Global Health), and Kerala businesses (Mangrove Spot, Mangrove Moments), and having founded Digital Product Solutions, KeralaSellers, and KPSC Master."
            }
          },
          {
            "@type": "Question",
            name: "What IT services does Adarsh B S provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adarsh B S provides 12 core digital services: Odoo ERP development, IT consulting, Software development, Website development, Web application development, Mobile application development, E-commerce development, Search Engine Optimization (SEO), Technical SEO, CRM development, Business process automation, and API integration."
            }
          },
          {
            "@type": "Question",
            name: "How can I hire Adarsh B S for an Odoo or IT consulting project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach out directly via phone/WhatsApp at +91 9400355185, email at adarshsarachandran@gmail.com, or through his website at https://adarsh.digitalproductsolutions.in to schedule an immediate consultation."
            }
          },
          {
            "@type": "Question",
            name: "Does Adarsh B S work with international clients outside India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Adarsh B S actively works with international clients including Care 'N' Cure (Australia), Novora Global Health (UK, Germany, Global), as well as clients in the US, UAE, and pan-India, delivering world-class IT consulting, scalable architecture, and organic search growth."
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
