"use client";

import { motion } from "framer-motion";
import { Check, X, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const acceptedBags = [
  "Standard 13-gallon kitchen trash bags",
  "Glad, Hefty, Kirkland, etc.",
  "Drawstring or tie-top bags",
];

const notAccepted = [
  "Contractor bags",
  "Lawn & leaf bags",
  "Oversized bags",
  "Laundry baskets",
  "Duffel bags",
];

const turnaround = [
  { pickup: "Monday", delivery: "Wednesday" },
  { pickup: "Tuesday", delivery: "Thursday" },
  { pickup: "Wednesday", delivery: "Friday" },
  { pickup: "Thursday", delivery: "Friday AM" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
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
            Bag Requirements
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a365d] tracking-tight">
            Bag Preparation
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Flat-rate pricing applies to standard kitchen trash bags
          </p>
        </motion.div>

        {/* Bag Guidelines */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-0 shadow-sm bg-[#fafaf9]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#1a365d] mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Accepted
                </h3>
                <ul className="space-y-3">
                  {acceptedBags.map((item) => (
                    <li key={item} className="text-sm text-slate-600 pl-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="border-0 shadow-sm bg-[#fafaf9]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#1a365d] mb-4 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  Not Accepted
                </h3>
                <ul className="space-y-3">
                  {notAccepted.map((item) => (
                    <li key={item} className="text-sm text-slate-600 pl-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Turnaround */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#1a365d]">Turnaround Schedule</h3>
            <p className="text-sm text-slate-500 mt-1">Standard service: 48 hours</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {turnaround.map((item) => (
              <div key={item.pickup} className="text-center p-4 bg-[#fafaf9] rounded-xl">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Pickup</p>
                <p className="font-medium text-[#1a365d]">{item.pickup}</p>
                <p className="text-xs text-slate-400 mt-2 mb-1">Delivery</p>
                <p className="text-sm text-slate-600">{item.delivery}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Info className="w-4 h-4" />
            <span>Sunday closed • Next-day available (+$20) when offered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
