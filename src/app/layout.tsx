import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.digitalproductsolutions.in";
const profileCanonical = "https://www.digitalproductsolutions.in/adarsh-b-s";

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adarsh B S | Top Freelance IT Consultant & Software Developer Kerala, India",
    template: "%s | Adarsh B S - IT Consultant",
  },
  description:
    "Adarsh B S is a premier freelance IT consultant and software developer based in Kerala, India. Specializing in custom web applications, Python/Django, Next.js, SEO, CRM development, and business automation with 3+ years experience across 20+ business projects.",
  keywords: [
    "IT consultant Kerala",
    "freelance IT consultant Kerala",
    "top IT consultant India",
    "software developer Kerala",
    "freelance software developer Trivandrum",
    "web application developer Kerala",
    "Python Django developer Kerala",
    "React Nextjs developer India",
    "CRM development Kerala",
    "SEO consultant Kerala",
    "business process automation India",
    "hire freelance IT consultant",
    "Adarsh B S",
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
    title: "Adarsh B S | Top Freelance IT Consultant & Software Developer Kerala, India",
    description:
      "Helping businesses turn ideas into scalable digital solutions. 3+ years experience, 20+ business projects in Web, Mobile, SEO, CRM & Automation.",
    url: profileCanonical,
    siteName: "Adarsh B S Portfolio & IT Consulting",
    locale: "en_IN",
    images: [
      {
        url: "/assets/adarsh-consultant-banner.jpg",
        width: 1200,
        height: 675,
        alt: "Adarsh B S - Freelance IT Consultant & Software Developer Kerala",
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
    title: "Adarsh B S | Freelance IT Consultant & Software Developer Kerala",
    description:
      "Turning business ideas into practical digital solutions. Python, Django, React, Next.js, SEO, CRM & Automation.",
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
        alternateName: ["Adarsh BS", "Adarsh Sarachandran", "Adarsh.B.S"],
        jobTitle: "Freelance IT Consultant & Senior Fullstack Developer",
        description:
          "Adarsh B S is a freelance IT consultant and software developer based in Kerala, India, helping businesses turn their ideas into practical digital solutions. With over 3 years of experience, he specializes in website development, custom web applications, mobile app development, SEO, CRM systems, and business process automation across 20+ business projects.",
        url: profileCanonical,
        image: "https://www.digitalproductsolutions.in/assets/adarsh-executive-portrait.jpg",
        telephone: "+91-9400355185",
        email: "mailto:adarshsarachandran@gmail.com",
        sameAs: [
          "https://www.linkedin.com/in/adarsh-bs/",
          "https://github.com/Adarsh-oo7/",
          "https://adarsh.digitalproductsolutions.in",
          "https://www.digitalproductsolutions.in/adarsh-b-s"
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thiruvananthapuram",
          addressRegion: "Kerala",
          addressCountry: "India"
        },
        knowsAbout: [
          "IT Consulting",
          "Software Development",
          "Website Development",
          "Web Application Development",
          "Mobile Application Development",
          "E-commerce Development",
          "Search Engine Optimization (SEO)",
          "Technical SEO and Website Optimization",
          "CRM Development",
          "Business Process Automation",
          "API Development and Integration",
          "Website Maintenance",
          "Python",
          "Django",
          "React.js",
          "Next.js",
          "PostgreSQL",
          "MySQL"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${profileCanonical}#business`,
        name: "Adarsh B S - Freelance IT Consulting & Software Engineering",
        image: "https://www.digitalproductsolutions.in/assets/adarsh-consultant-banner.jpg",
        url: profileCanonical,
        telephone: "+919400355185",
        priceRange: "$$",
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
              text: "Adarsh B S provides 12 core digital services: IT consulting, Software development, Website development, Web application development, Mobile application development, E-commerce development, Search Engine Optimization (SEO), Technical SEO and website optimization, CRM development, Business process automation, API development and integration, and Website maintenance."
            }
          },
          {
            "@type": "Question",
            name: "How can I hire Adarsh B S for my business project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach out directly via phone at +91 9400355185, email at adarshsarachandran@gmail.com, or through his website at https://www.digitalproductsolutions.in/adarsh-b-s to schedule a consultation."
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
