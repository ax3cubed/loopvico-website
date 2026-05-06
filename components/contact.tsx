"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-[#1a365d]/70 uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a365d] tracking-tight">
              Get Started
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Message, call, text, or scan to start your booking.
            </p>

            {/* Service Areas */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#1a365d]" />
                <span className="font-medium text-[#1a365d]">Service Areas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="text-sm text-slate-600 bg-[#fafaf9] px-3 py-1.5 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-8 flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#1a365d] mt-0.5" />
              <div>
                <span className="font-medium text-[#1a365d]">Schedule</span>
                <ul className="mt-1 text-sm text-slate-500 list-disc list-inside space-y-1">
                  {siteConfig.businessHours.map(({ day, range }) => (
                    <li key={day}>
                      <span className="font-medium text-slate-600">{day}</span>: {range}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-400 mt-2">Delivery: 48 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* WhatsApp - Primary */}
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1a365d]">WhatsApp</h3>
                  <p className="text-sm text-slate-500">
                    Quick booking and fast replies at {siteConfig.phone.display}
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
                >
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message
                  </a>
                </Button>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4">
                <div className="grid gap-4 sm:grid-cols-[112px_1fr] sm:items-center">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto block overflow-hidden rounded-2xl border border-green-100"
                    aria-label="Scan the QR code to open WhatsApp chat"
                  >
                    <Image
                      src={siteConfig.scanToChatImage}
                      alt="Scan to open WhatsApp chat with Loopvico"
                      width={300}
                      height={300}
                      className="h-28 w-28"
                    />
                  </a>
                  <div>
                    <p className="text-sm font-medium text-[#1a365d]">Scan to chat</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Open WhatsApp instantly from your phone camera and send your
                      pickup address, preferred day, or ZIP code.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-[#fafaf9] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a365d] rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1a365d]">Call or Text</h3>
                  <p className="text-sm text-slate-500">{siteConfig.phone.display}</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#1a365d]/20 text-[#1a365d] hover:bg-[#1a365d]/5 rounded-full px-6"
                >
                  <a href={`tel:${siteConfig.phone.e164}`}>Call</a>
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-[#fafaf9] rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1a365d]">Email</h3>
                  <p className="text-sm text-slate-500">Detailed inquiries</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#1a365d]/20 text-[#1a365d] hover:bg-[#1a365d]/5 rounded-full px-6"
                >
                  <a href={`mailto:${siteConfig.email}`}>Email</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
