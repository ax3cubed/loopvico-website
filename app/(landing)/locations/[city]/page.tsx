import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageTemplate } from "@/components/landing-page-template";
import { getDefaultFaq, getLocationBySlug, locationPages } from "@/lib/landing-content";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/landing-seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return locationPages.map((page) => ({ city: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const content = getLocationBySlug(city);

  if (!content) {
    return {};
  }

  return buildLandingMetadata({
    content,
    path: `/locations/${city}`,
    section: "locations",
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const content = getLocationBySlug(city);

  if (!content) {
    notFound();
  }

  const supplementalFaq = getDefaultFaq();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: content.name, url: `${siteConfig.url}/locations/${content.slug}` },
  ]);
  const serviceSchema = buildServiceSchema(content, "locations");
  const faqSchema = buildFaqSchema([...content.faq, ...supplementalFaq]);

  return (
    <>
      <LandingPageTemplate
        content={content}
        categoryLabel="Service Area"
        supplementalFaq={supplementalFaq}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: content.name, href: `/locations/${content.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
