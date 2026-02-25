"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shirt, Sparkles, Truck, Clock, MessageCircle } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Pickup & Delivery" },
  { icon: Clock, text: "48-Hour Turnaround" },
  { icon: Sparkles, text: "Premium Care" },
  { icon: Shirt, text: "Closet-Ready" },
];

export function Hero() {
  const WHATSAPP_NUMBER = "1234567890";
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#f9f7f2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,54,93,0.03)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(26,54,93,0.03)_0%,transparent_50%)]" />
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-[#1a365d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-1/4 h-1/4 bg-[#1a365d]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-[#1a365d]/10 text-[#1a365d] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a365d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1a365d]"></span>
              </span>
              Now serving DFW Metroplex
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a365d] leading-[1.1] tracking-tight mb-6">
              Laundry Day,
              <br />
              <span className="text-[#2d4a6f]">Simplified.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 max-w-xl mb-8 leading-relaxed">
              Premium pickup and delivery laundry service in Mansfield,
              Arlington, Irving, Las Colinas & Grand Prairie. We pick up dirty,
              deliver clean — all from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-green-600/20 transition-all hover:shadow-xl hover:shadow-green-600/30"
              >
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#pricing")}
                className="border-2 border-[#1a365d]/20 text-[#1a365d] hover:bg-[#1a365d]/5 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                View Pricing
              </Button>
            </div>

            {/* Location Pills */}
            <div className="flex flex-wrap gap-2">
              {["Mansfield", "Arlington", "Irving", "Las Colinas", "Grand Prairie"].map(
                (city) => (
                  <span
                    key={city}
                    className="text-xs font-medium text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200"
                  >
                    {city}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Visual/Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#1a365d]/10 p-8 lg:p-10 border border-slate-100">
              <div className="absolute -top-4 -right-4 bg-[#1a365d] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                $40/bag
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
                  Simple, Flat-Rate Pricing
                </h3>
                <p className="text-slate-500">No hidden fees. No surprises.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center text-center p-4 bg-[#f9f7f2] rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-[#1a365d]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Standard turnaround</span>
                  <span className="font-semibold text-[#1a365d]">48 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-slate-500">Next-day available</span>
                  <span className="font-semibold text-[#1a365d]">+$20</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 -right-8 w-64 h-64 bg-[#1a365d]/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-[#1a365d]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
