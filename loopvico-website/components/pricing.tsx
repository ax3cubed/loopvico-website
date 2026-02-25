"use client";

import { motion } from "framer-motion";
import { Check, X, Info, Truck, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const acceptedBags = [
  "Common kitchen trash bags (Glad, Hefty, Kirkland, etc.)",
  "Drawstring or tie-top bags",
  "Bags must be able to close normally",
];

const notAccepted = [
  "Contractor bags",
  "Lawn & leaf bags",
  "Oversized trash bags",
  "Laundry baskets or hampers",
  "Duffel bags or storage bins",
];

const turnaroundSchedule = [
  { day: "Monday pickup", delivery: "Tuesday delivery" },
  { day: "Tuesday pickup", delivery: "Wednesday delivery" },
  { day: "Wednesday pickup", delivery: "Thursday delivery" },
  { day: "Thursday pickup", delivery: "Friday morning delivery" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4">
            Bag Requirements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Proper Bag Preparation
          </h2>
          <p className="text-lg text-slate-600">
            Flat-rate pricing applies to standard 13-gallon kitchen trash bags
            only. Please follow these guidelines for the best experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Accepted Bags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d]">
                    Accepted Bags
                  </h3>
                </div>
                <ul className="space-y-4">
                  {acceptedBags.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Not Accepted */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d]">
                    Not Accepted
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notAccepted.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <Info className="w-4 h-4 inline mr-2" />
                    Overstuffed or oversized bags may be counted as additional
                    bags or priced by weight.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Turnaround Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
              Turnaround Options
            </h3>
            <p className="text-slate-600">
              Choose the service level that fits your schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Service */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#1a365d]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a365d]">
                        Standard Service
                      </h4>
                      <p className="text-sm text-slate-500">Included</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    Free
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4">
                  48-hour turnaround time from pickup to delivery
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Pickup Monday → Delivery Wednesday
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Professional cleaning & folding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Same quality care
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Next-Day Delivery */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a365d]">
                        Next-Day Delivery
                      </h4>
                      <p className="text-sm text-slate-500">Premium Upgrade</p>
                    </div>
                  </div>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                    +$20
                  </Badge>
                </div>
                <p className="text-slate-600 mb-4">
                  Next-day delivery available on select weekdays
                </p>
                <div className="space-y-2">
                  {turnaroundSchedule.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between text-sm py-1.5 px-3 bg-slate-50 rounded-lg"
                    >
                      <span className="text-slate-600">{schedule.day}</span>
                      <span className="font-medium text-[#1a365d]">
                        {schedule.delivery}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  <X className="w-3 h-3 inline mr-1" />
                  No weekend deliveries or Monday drop-offs
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Route Fee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-[#1a365d] rounded-2xl text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Pickup & Delivery</h4>
                <p className="text-white/80">
                  $6.95 per stop • Waived on orders $75+ • Free for subscription
                  customers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
