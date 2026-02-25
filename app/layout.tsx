import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#1a365d" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Loopvico | Premium Laundry Pickup & Delivery Service",
    template: "%s | Loopvico Laundry",
  },
  description: "Professional laundry and linen pickup & delivery service in Mansfield, Arlington, Irving, Las Colinas, and Grand Prairie. $40 flat-rate bags, subscription plans available. Same-day scheduling via WhatsApp.",
  keywords: [
    "laundry service",
    "pickup delivery laundry",
    "laundry near me",
    "wash and fold",
    "laundry delivery",
    "Mansfield laundry",
    "Arlington laundry service",
    "Irving laundry delivery",
    "Las Colinas laundry",
    "Grand Prairie laundry",
    "DFW laundry service",
    "Texas laundry delivery",
    "commercial laundry",
    "residential laundry",
    "laundry subscription",
    "same day laundry",
    "next day laundry",
    "professional laundry service",
    "linen service",
    "towel service",
  ],
  authors: [{ name: "Loopvico Laundry & Linen" }],
  creator: "Loopvico Laundry & Linen",
  publisher: "Loopvico Laundry & Linen",
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
  metadataBase: new URL("https://loopvico.com"),
  alternates: {
    canonical: "https://loopvico.com",
    languages: {
      "en-US": "https://loopvico.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loopvico.com",
    siteName: "Loopvico Laundry & Linen",
    title: "Loopvico | Premium Laundry Pickup & Delivery Service",
    description: "Professional laundry and linen pickup & delivery service in DFW. $40 flat-rate bags, subscription plans available. Schedule via WhatsApp today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loopvico Laundry & Linen - Premium Pickup and Delivery Service",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Loopvico Laundry & Linen Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopvico | Premium Laundry Pickup & Delivery Service",
    description: "Professional laundry pickup & delivery in Mansfield, Arlington, Irving & more. $40 flat-rate bags. Schedule via WhatsApp!",
    images: ["/twitter-image.jpg"],
    creator: "@loopvico",
    site: "@loopvico",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification",
    },
  },
  category: "business",
  classification: "Laundry Service",
  applicationName: "Loopvico Laundry",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-UA-Compatible": "IE=edge",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Loopvico",
    "msapplication-TileColor": "#1a365d",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#1a365d",
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://loopvico.com/#business",
  "name": "Loopvico Laundry & Linen",
  "image": [
    "https://loopvico.com/og-image.jpg",
    "https://loopvico.com/logo.png",
  ],
  "description": "Premium pickup and delivery laundry service serving the DFW Metroplex. We offer flat-rate pricing, subscription plans, and professional care for all your laundry needs.",
  "url": "https://loopvico.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "loopvico@gmail.com",
  "priceRange": "$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970",
    },
    "geoRadius": "50 km",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mansfield",
    "addressRegion": "TX",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.5632",
    "longitude": "-97.1417",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "12:00",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/loopvico",
    "https://www.instagram.com/loopvico",
    "https://wa.me/1234567890",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Laundry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clothing Bag Service",
          "description": "Flat-rate laundry service for regular clothing items",
        },
        "price": "40.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Towel & Linen Service",
          "description": "Heavy items including towels, robes, and bath mats",
        },
        "price": "48.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "By-the-Pound Service",
          "description": "Flexible pricing for large or family-sized loads",
        },
        "price": "2.29",
        "priceCurrency": "USD",
        "unitCode": "LBR",
        "priceValidUntil": "2025-12-31",
      },
    ],
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Laundry Delivery Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Loopvico Laundry & Linen",
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Mansfield",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas",
      },
    },
    {
      "@type": "City",
      "name": "Arlington",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas",
      },
    },
    {
      "@type": "City",
      "name": "Irving",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas",
      },
    },
    {
      "@type": "City",
      "name": "Las Colinas",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas",
      },
    },
    {
      "@type": "City",
      "name": "Grand Prairie",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas",
      },
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Laundry Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weekly Subscription",
            "description": "1 bag per week with priority scheduling",
          },
          "price": "149.00",
          "priceCurrency": "USD",
          "billingIncrement": "month",
        },
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Subscription",
            "description": "2 bags per week with priority scheduling",
          },
          "price": "249.00",
          "priceCurrency": "USD",
          "billingIncrement": "month",
        },
      },
    ],
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://loopvico.com",
    },
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Mansfield, Arlington, Irving, Las Colinas, and Grand Prairie in the DFW Metroplex area.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does your laundry service cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our flat-rate clothing bag service is $40 for up to 15 lbs. Towel and linen bags are $48. We also offer by-the-pound service at $2.29/lb with a 20 lb minimum.",
      },
    },
    {
      "@type": "Question",
      "name": "What is your turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our standard turnaround is 48 hours. We also offer next-day delivery for an additional $20 on select weekdays.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer subscription plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Weekly Loop subscription is $149/month for 1 bag per week, and our Family Loop is $249/month for 2 bags per week. Both include free pickup/delivery and hanging service.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I schedule a pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can schedule a pickup by messaging us on WhatsApp, calling, or texting us. We offer same-week scheduling for your convenience.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Security Meta Tags */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
        
        {/* Content Security Policy */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' fonts.gstatic.com; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
