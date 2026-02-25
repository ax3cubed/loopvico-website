"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// TODO: Update with your actual WhatsApp number
const WHATSAPP_NUMBER = "1234567890";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send us a message for quick booking",
    action: "Message on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: "bg-green-500",
    primary: true,
  },
  {
    icon: Phone,
    title: "Call or Text",
    description: "Speak directly with our team",
    action: "Call Now",
    href: `tel:+${WHATSAPP_NUMBER}`,
    color: "bg-[#1a365d]",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries",
    action: "Send Email",
    href: "mailto:loopvico@gmail.com",
    color: "bg-slate-600",
    primary: false,
  },
];

const serviceAreas = [
  "Mansfield",
  "Arlington",
  "Irving",
  "Las Colinas",
  "Grand Prairie",
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
              Ready for Fresh Laundry?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Book your first pickup today. We&apos;re here to answer any
              questions and make laundry day a thing of the past.
            </p>

            {/* Service Areas */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#1a365d]" />
                <h3 className="font-semibold text-[#1a365d]">Service Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-[#f9f7f2] text-slate-700 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#1a365d] mt-0.5" />
              <div>
                <h3 className="font-semibold text-[#1a365d] mb-2">
                  Pickup Schedule
                </h3>
                <p className="text-slate-600 text-sm">
                  Monday – Thursday: Pickup available
                  <br />
                  Friday: Morning deliveries only
                  <br />
                  <span className="text-slate-400">
                    No weekend pickups or Monday deliveries
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1a365d]">
                          {method.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {method.description}
                        </p>
                      </div>
                      <Button
                        asChild
                        className="bg-[#1a365d] hover:bg-[#152a4a] text-white"
                      >
                        <a href={method.href}>{method.action}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Card className="border-0 shadow-lg bg-[#1a365d]">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    First-Time Customer?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Mention this website for a special welcome offer on your
                    first order!
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-[#1a365d] hover:bg-white/90"
                  >
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
