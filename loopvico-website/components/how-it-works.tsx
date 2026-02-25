"use client";

import { motion } from "framer-motion";
import { Phone, Package, Sparkles, Truck, Shirt } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Schedule",
    description: "Text, call or WhatsApp us to book your pickup. Choose a convenient time that works for your schedule.",
    color: "bg-blue-500",
  },
  {
    icon: Package,
    title: "Bag Your Items",
    description: "Place your items in standard 13-gallon kitchen trash bags. Keep clothing and towels separate.",
    color: "bg-indigo-500",
  },
  {
    icon: Truck,
    title: "We Pick Up",
    description: "Our team arrives at your door, collects your bags, and transports them to our facility.",
    color: "bg-violet-500",
  },
  {
    icon: Sparkles,
    title: "Professional Care",
    description: "Your items are washed, dried, and folded with premium care. Add hanging service for closet-ready delivery.",
    color: "bg-purple-500",
  },
  {
    icon: Shirt,
    title: "Fresh Delivery",
    description: "Clean, fresh laundry delivered back to your door within 48 hours (or next-day with premium).",
    color: "bg-fuchsia-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Laundry Made Simple
          </h2>
          <p className="text-lg text-slate-600">
            From pickup to delivery, we handle everything so you can focus on
            what matters most.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-${step.color}/30`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1a365d] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Services Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 p-8 lg:p-12 bg-[#f9f7f2] rounded-3xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-4">
                Premium Care Services
              </h3>
              <p className="text-slate-600 mb-6">
                What sets us apart from ordinary laundry services
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1a365d]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shirt className="w-3 h-3 text-[#1a365d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">
                      Hanging Service
                    </h4>
                    <p className="text-sm text-slate-600">
                      Closet-ready delivery for dress shirts, blouses, and
                      delicate items. Customer provides hangers.
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Subscribers: Included (up to 10 items) • Non-subscribers: +$5
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1a365d]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#1a365d]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">
                      Courtesy Button Reattachment
                    </h4>
                    <p className="text-sm text-slate-600">
                      We reattach loose buttons when the original is provided.
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Free for subscribers • $2/button for non-subscribers (max 2)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1a365d]/5 to-[#1a365d]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-12 h-12 text-[#1a365d]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a365d] mb-2">
                    Quality Guaranteed
                  </h4>
                  <p className="text-slate-600">
                    Every item receives the same careful attention we&apos;d give
                    our own clothes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
