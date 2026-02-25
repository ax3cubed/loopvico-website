"use client";

import { motion } from "framer-motion";
import { Shirt, Bath, Scale, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Clothing Bag",
    price: "$40",
    unit: "per bag",
    description: "Our most popular option for everyday laundry",
    features: [
      "Up to 15 lbs of regular clothing",
      "Washed, dried & folded",
      "T-shirts, pants, dresses, socks",
      "No towels or heavy items",
    ],
    popular: true,
    color: "bg-[#1a365d]",
  },
  {
    icon: Bath,
    title: "Towel & Linen Bag",
    price: "$48",
    unit: "per bag",
    description: "Specialized care for heavy items",
    features: [
      "Up to 15 lbs + $8 surcharge",
      "Separate from clothing",
      "Bath towels, beach towels",
      "Bath mats, thick robes",
    ],
    popular: false,
    color: "bg-[#2d4a6f]",
  },
  {
    icon: Scale,
    title: "By-the-Pound",
    price: "$2.29",
    unit: "per lb",
    description: "Best for large or family-sized loads",
    features: [
      "20 lb minimum order",
      "Perfect for big families",
      "Flexible quantity",
      "Same quality care",
    ],
    popular: false,
    color: "bg-[#3d5a7f]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Simple Laundry Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Choose the service that fits your needs. All options include pickup,
            professional cleaning, and delivery right to your door.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  service.popular ? "ring-2 ring-[#1a365d]" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#1a365d] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-[#1a365d]">
                      {service.price}
                    </span>
                    <span className="text-slate-500">{service.unit}</span>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#1a365d] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overweight Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-[#f9f7f2] rounded-2xl border border-slate-200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a365d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-[#1a365d]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a365d] mb-1">
                  Overweight Bags
                </h4>
                <p className="text-sm text-slate-600">
                  Over 15 lbs: $2.75 per lb • Overstuffed bags may be counted as
                  additional bags or priced by weight
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 md:text-right">
              <Clock className="w-4 h-4" />
              <span>48-hour standard turnaround</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
