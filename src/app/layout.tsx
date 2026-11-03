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
    default: "Adarsh B S — #1 Freelance Web & Software Developer in Kerala (₹15k Web / $25/hr)",
    template: "%s",
  },
  description:
    "Hire Adarsh B S — #1 Freelance Web Developer, Software Developer & AI Automation Architect in Kerala (Trivandrum Technopark, Kochi Infopark & Calicut). 5.0★ Google Verified (28+ Reviews) • 20+ Live Builds (Care 'N' Cure AU, Novora UK/DE, KeralaSellers). Next.js 16, Python/Django, AI Agents & Odoo ERP. Websites from ₹15k, MVPs from ₹50k ($800), $25–$55/hr. <15m WhatsApp reply.",
  keywords: [
    "freelance web developer in Kerala",
    "software developer in Kerala",
    "web developer in Kerala",
    "freelance software developer in Kerala",
    "best freelance web developer in Kerala",
    "best software developer in Kerala",
    "freelance web developer Kerala",
    "web developer Kerala",
    "software developer Kerala",
    "freelance software developer Kerala",
    "freelance developer Kerala",
    "freelance developer in Kerala",
    "hire freelance web developer in Kerala",
    "hire software developer Kerala",
    "hire web developer Kerala",
    "hire freelance software developer in Kerala",
    "hire freelance developer Kerala",
    "hire freelance developer in Kerala",
    "full stack developer Kerala",
    "freelance full stack developer in Kerala",
    "freelance software engineer in Kerala",
    "custom software development Kerala",
    "custom web development Kerala",
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
    "freelance web developer Kochi",
    "freelance web developer in Kochi",
    "freelance web developer in Trivandrum",
    "freelance software developer Trivandrum",
    "freelance software developer Kochi",
    "freelance developer Kochi",
    "freelance developer Trivandrum",
    "freelance developer Calicut",
    "freelance software developer Kozhikode",
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
    "msvalidate.01": "DA5104495A63BDB0DC26BCB169A94A40",
  },
  openGraph: {
    type: "profile",
    firstName: "Adarsh",
    lastName: "B S",
    username: "Adarsh-oo7",
    gender: "male",
    title: "Freelance Web Developer in Kerala | Software Developer in Kerala | Adarsh B S",
    description:
      "Adarsh B S is the #1 freelance web developer and senior software developer in Kerala. Custom web development, Next.js 16, Python/Django, and sub-second SEO architectures for Kerala and global clients.",
    url: profileCanonical,
    siteName: "Adarsh B S - Freelance Web Developer & Software Developer in Kerala",
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
    title: "Freelance Web Developer in Kerala | Software Developer in Kerala | Adarsh B S",
    description:
      "Premier freelance web developer & software developer in Kerala. Next.js 16, Python Django, Odoo ERP, and sub-second performance with 0% agency markup.",
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
          "Freelance Web Developer in Kerala",
          "Software Developer in Kerala",
          "Web Developer in Kerala",
          "Freelance Software Developer in Kerala",
          "Best Freelance Web Developer in Kerala",
          "Best Software Developer in Kerala",
          "Freelance Developer Kerala",
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
        jobTitle: "Senior Freelance Web Developer, Software Developer in Kerala & IT Consultant",
        description:
          "Adarsh B S (Adarsh Sarachandran) is the premier freelance web developer and senior software developer in Kerala, India (operating across Trivandrum & Kochi). Specializing in custom web applications, Next.js 16, Python Django, Odoo ERP (v14-v18), technical SEO, CRM, and cloud business automation across 20+ delivered business projects for clients in Kerala, the Gulf (UAE/Saudi Arabia/Qatar), Australia, the UK, and the USA.",
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
