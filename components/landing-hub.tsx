"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { LandingPageContent } from "@/lib/landing-content";

type LandingHubProps = {
  title: string;
  description: string;
  basePath: string;
  pages: LandingPageContent[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export function LandingHub({ title, description, basePath, pages }: LandingHubProps) {
  return (
    <main className="min-h-screen bg-[#f9f7f2]">
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#1a365d]/50"
            >
              Browse Options
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-2 text-3xl font-semibold tracking-tight text-[#1a365d] sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {pages.map((item) => (
            <motion.article
              key={item.slug}
              variants={fadeUp}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`${basePath}/${item.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.heroImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h2 className="absolute bottom-4 left-5 text-xl font-semibold text-white">
                    {item.name}
                  </h2>
                </div>
              </Link>

              <div className="p-5">
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>

                <ul className="mt-4 space-y-2">
                  {item.trustPoints.slice(0, 2).map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`${basePath}/${item.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#1a365d] hover:text-[#142a4a] group/link"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#1a365d] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-white sm:text-3xl">
              Not sure which option fits?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-white/60 max-w-lg mx-auto">
              Message us on WhatsApp or give us a call — we&apos;ll help you pick the right service
              in minutes.
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
                Message on WhatsApp
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
