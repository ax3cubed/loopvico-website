import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageTemplate } from "@/components/landing-page-template";
import { getDefaultFaq, getServiceBySlug, servicePages } from "@/lib/landing-content";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildOfferSchema,
  buildServiceSchema,
} from "@/lib/landing-seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ service: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const content = getServiceBySlug(service);

  if (!content) {
    return {};
  }

  return buildLandingMetadata({
    content,
    path: `/services/${service}`,
    section: "services",
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const content = getServiceBySlug(service);

  if (!content) {
    notFound();
  }

  const supplementalFaq = getDefaultFaq();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: content.name, url: `${siteConfig.url}/services/${content.slug}` },
  ]);
  const serviceSchema = buildServiceSchema(content, "services");
  const offerSchema = buildOfferSchema(content);
  const faqSchema = buildFaqSchema([...content.faq, ...supplementalFaq]);

  return (
    <>
      <LandingPageTemplate
        content={content}
        categoryLabel="Service"
        supplementalFaq={supplementalFaq}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: content.name, href: `/services/${content.slug}` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
