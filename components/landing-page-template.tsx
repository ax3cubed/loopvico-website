"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Phone, ChevronDown, Tag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { LandingFaq, LandingPageContent } from "@/lib/landing-content";

type LandingPageTemplateProps = {
  content: LandingPageContent;
  breadcrumbs: { label: string; href: string }[];
  categoryLabel: string;
  supplementalFaq?: LandingFaq[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function FaqItem({ item }: { item: LandingFaq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-base font-medium text-[#1a365d] pr-4">{item.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function LandingPageTemplate({
  content,
  breadcrumbs,
  categoryLabel,
  supplementalFaq = [],
}: LandingPageTemplateProps) {
  const mergedFaq = [...content.faq, ...supplementalFaq];

  return (
    <main className="min-h-screen bg-[#f9f7f2]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/75 to-[#1a365d]/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pb-16 pt-8 sm:pb-24 sm:pt-12">
            <nav className="mb-8">
              <ol className="flex items-center gap-1.5 text-sm text-white/50">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center gap-1.5">
                    {index > 0 && <span>/</span>}
                    <Link href={item.href} className="hover:text-white/80 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 ring-1 ring-white/20"
              >
                {categoryLabel}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {content.headline}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-white/70">
                {content.subheadline}
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-base leading-relaxed text-white/50">
                {content.intro}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-green-600/25 hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  {content.primaryCtaLabel}
                </a>
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {content.secondaryCtaLabel}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-3"
        >
          {content.trustPoints.map((point) => (
            <motion.article
              key={point}
              variants={fadeUp}
              className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">{point}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a365d]/50">
                Simple Process
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-[#1a365d] sm:text-3xl">
                How It Works
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {content.howItWorks.map((step, index) => (
                <motion.div key={step} variants={fadeUp} className="relative">
                  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a365d] text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{step}</p>
                  </div>
                  {index < content.howItWorks.length - 1 && (
                    <div className="hidden sm:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                      <ArrowRight className="h-4 w-4 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a365d]/50">
                Transparent Pricing
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-[#1a365d] sm:text-3xl">
                Pricing Snapshot
              </h2>
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {content.pricingSnapshot.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className={`relative rounded-2xl p-6 ${
                    index === 0
                      ? "bg-[#1a365d] text-white ring-2 ring-[#1a365d]"
                      : "bg-[#f9f7f2] text-slate-700 ring-1 ring-slate-200"
                  }`}
                >
                  {index === 0 && (
                    <span className="absolute -top-3 left-5 rounded-full bg-green-600 px-3 py-0.5 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-start gap-3">
                    <Tag
                      className={`h-5 w-5 mt-0.5 shrink-0 ${index === 0 ? "text-white/60" : "text-[#1a365d]/40"}`}
                    />
                    <p className="text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1a365d]/50">
                Common Questions
              </span>
              <h2 className="mt-2 text-2xl font-semibold text-[#1a365d] sm:text-3xl">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 space-y-3">
              {mergedFaq.map((item) => (
                <FaqItem key={item.question} item={item} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1a365d] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-semibold text-white sm:text-3xl"
            >
              Ready to simplify laundry day?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-white/60 max-w-lg mx-auto">
              Book your first pickup in minutes. No commitments, no contracts — just clean laundry
              delivered to your door.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-green-600/25 hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone.display}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
