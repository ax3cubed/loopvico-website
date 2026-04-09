import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { locationPages, servicePages, solutionPages } from "@/lib/landing-content";
import type { LandingPageContent } from "@/lib/landing-content";

function LinkGroup({
  title,
  description,
  href,
  items,
}: {
  title: string;
  description: string;
  href: string;
  items: LandingPageContent[];
}) {
  return (
    <article className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#1a365d]">{title}</h3>
          <Link
            href={href}
            className="flex items-center gap-1 text-xs font-medium text-[#1a365d]/60 hover:text-[#1a365d] transition-colors"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>

      <div className="border-t border-slate-100">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${href}/${item.slug}`}
            className="flex items-center gap-3 px-6 py-3 hover:bg-[#f9f7f2] transition-colors border-b border-slate-50 last:border-b-0 group"
          >
            <div className="relative h-9 w-9 shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.heroImage}
                alt={item.name}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-700 group-hover:text-[#1a365d] transition-colors">
                {item.name}
              </p>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#1a365d] transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </article>
  );
}

export function LandingLinksSection() {
  return (
    <section className="py-20 bg-[#f3efe6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1a365d]/40">
          Explore More
        </span>
        <h2 className="mt-2 text-2xl font-semibold text-[#1a365d] sm:text-3xl">
          Browse by Category
        </h2>
        <p className="mt-3 max-w-2xl text-slate-500">
          Find the right laundry service for your city, lifestyle, or needs.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <LinkGroup
            title="Service Areas"
            description="Pickup & delivery by city"
            href="/locations"
            items={locationPages.slice(0, 5)}
          />
          <LinkGroup
            title="Services"
            description="Choose your service type"
            href="/services"
            items={servicePages.slice(0, 5)}
          />
          <LinkGroup
            title="Solutions"
            description="Tailored to your lifestyle"
            href="/solutions"
            items={solutionPages}
          />
        </div>
      </div>
    </section>
  );
}
