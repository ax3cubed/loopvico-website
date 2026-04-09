import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageTemplate } from "@/components/landing-page-template";
import { getDefaultFaq, getSolutionBySlug, solutionPages } from "@/lib/landing-content";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/landing-seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ segment: string }>;
};

export function generateStaticParams() {
  return solutionPages.map((page) => ({ segment: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segment } = await params;
  const content = getSolutionBySlug(segment);

  if (!content) {
    return {};
  }

  return buildLandingMetadata({
    content,
    path: `/solutions/${segment}`,
    section: "solutions",
  });
}

export default async function SegmentPage({ params }: PageProps) {
  const { segment } = await params;
  const content = getSolutionBySlug(segment);

  if (!content) {
    notFound();
  }

  const supplementalFaq = getDefaultFaq();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Solutions", url: `${siteConfig.url}/solutions` },
    { name: content.name, url: `${siteConfig.url}/solutions/${content.slug}` },
  ]);
  const serviceSchema = buildServiceSchema(content, "solutions");
  const faqSchema = buildFaqSchema([...content.faq, ...supplementalFaq]);

  return (
    <>
      <LandingPageTemplate
        content={content}
        categoryLabel="Use Case"
        supplementalFaq={supplementalFaq}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: content.name, href: `/solutions/${content.slug}` },
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
