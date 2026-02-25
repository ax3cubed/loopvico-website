"use client";

import { motion } from "framer-motion";
import { Shirt, Bath, Scale, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Clothing Bag",
    price: "$40",
    unit: "per bag",
    description: "Everyday laundry, washed and folded",
    features: ["Up to 15 lbs", "Regular clothing only", "48-hour turnaround"],
  },
  {
    icon: Bath,
    title: "Towel & Linen",
    price: "$48",
    unit: "per bag",
    description: "Heavy items, handled separately",
    features: ["Up to 15 lbs + $8 surcharge", "Towels, robes, bath mats", "Separate from clothing"],
  },
  {
    icon: Scale,
    title: "By-the-Pound",
    price: "$2.29",
    unit: "per lb",
    description: "Best for large family loads",
    features: ["20 lb minimum", "Flexible quantity", "Same quality care"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fafaf9]">
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
            Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a365d] tracking-tight">
            Simple Pricing
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Choose the option that fits your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#1a365d] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-semibold text-[#1a365d]">
                      {service.price}
                    </span>
                    <span className="text-slate-400">{service.unit}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1a365d] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <ArrowRight className="w-3 h-3 text-[#1a365d]/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
