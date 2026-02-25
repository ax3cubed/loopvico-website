"use client";

import { motion } from "framer-motion";
import { Phone, Package, Truck, Sparkles, Shirt, Check } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Schedule",
    description: "Text or WhatsApp us to book your pickup at a convenient time.",
  },
  {
    icon: Package,
    title: "Bag Items",
    description: "Place items in standard kitchen trash bags. Keep clothing and towels separate.",
  },
  {
    icon: Truck,
    title: "We Pick Up",
    description: "Our team collects your bags from your door and transports them.",
  },
  {
    icon: Sparkles,
    title: "Professional Care",
    description: "Items are washed, dried, and folded with premium attention to detail.",
  },
  {
    icon: Shirt,
    title: "Fresh Delivery",
    description: "Clean laundry delivered to your door within 48 hours.",
  },
];

const features = [
  "Hanging service available",
  "Button reattachment",
  "Closet-ready delivery",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-[#1a365d]/70 uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a365d] tracking-tight">
            Simple Process
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Five easy steps from pickup to delivery
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              {/* Icon Container */}
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 bg-[#1a365d] rounded-2xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#1a365d]">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-[#1a365d] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Premium Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-slate-100"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-[#1a365d]/70 uppercase tracking-widest">
                Premium Care
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#1a365d] tracking-tight">
                What Sets Us Apart
              </h3>
              <p className="mt-4 text-slate-500">
                Attention to detail that makes the difference
              </p>
              
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#1a365d]" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-semibold text-[#1a365d] mb-2">Hanging Service</h4>
                <p className="text-sm text-slate-500">
                  Dress shirts and delicate items returned on hangers, ready for your closet.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-semibold text-[#1a365d] mb-2">Button Care</h4>
                <p className="text-sm text-slate-500">
                  Loose buttons reattached at no extra charge for subscribers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
