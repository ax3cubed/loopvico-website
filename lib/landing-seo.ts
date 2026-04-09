import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { LandingFaq, LandingPageContent } from "@/lib/landing-content";

type LandingSeoParams = {
  content: LandingPageContent;
  path: string;
  section: string;
};

export function buildLandingMetadata({ content, path }: LandingSeoParams): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: content.seoTitle,
      description: content.seoDescription,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${content.name} | ${siteConfig.shortName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.seoDescription,
      images: ["/twitter-image.svg"],
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(faq: LandingFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema(content: LandingPageContent, section: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${content.name} Laundry Service`,
    name: content.headline,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone.e164,
      areaServed: siteConfig.serviceAreas,
    },
    category: section,
    description: content.intro,
  };
}

export function buildOfferSchema(content: LandingPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${content.name} Pricing`,
    itemListElement: content.pricingSnapshot.map((line, index) => ({
      "@type": "Offer",
      position: index + 1,
      description: line,
      priceCurrency: "USD",
    })),
  };
}
