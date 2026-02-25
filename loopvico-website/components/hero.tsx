"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Shirt, Truck, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";

const features = [
  { icon: Truck, text: "Free Pickup & Delivery" },
  { icon: Clock, text: "48-Hour Turnaround" },
  { icon: Shirt, text: "Closet-Ready" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafaf9]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-[#1a365d]/70 mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Now serving DFW Metroplex
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a365d] tracking-tight leading-tight">
              Laundry Day,
              <br />
              <span className="text-[#1a365d]/60">Simplified</span>
            </h1>

            <p className="mt-6 text-lg text-slate-500 max-w-md leading-relaxed">
              Premium pickup and delivery laundry service. We pick up dirty, 
              deliver clean — all from your home.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 h-14 text-base font-medium rounded-full"
              >
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </Button>
            </div>

            {/* Service Areas */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-2">
                {["Mansfield", "Arlington", "Irving", "Las Colinas", "Grand Prairie"].map((city) => (
                  <span
                    key={city}
                    className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Flat-Rate Pricing</p>
                  <p className="text-4xl font-semibold text-[#1a365d]">$40<span className="text-lg text-slate-400 font-normal">/bag</span></p>
                </div>
                <div className="w-14 h-14 bg-[#1a365d] rounded-2xl flex items-center justify-center">
                  <Shirt className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#1a365d]" />
                    </div>
                    <span className="text-slate-600">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm">
                <span className="text-slate-400">Up to 15 lbs per bag</span>
                <span className="text-[#1a365d] font-medium">$2.75/lb over</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
