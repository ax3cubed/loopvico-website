"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const plans = [
  {
    name: "Weekly Loop",
    price: "$149",
    period: "/month",
    description: "1 bag per week",
    features: [
      "4 bags per month",
      "Same pickup day",
      "Hanging service (10 items)",
      "Button reattachment",
      "No route fees",
    ],
  },
  {
    name: "Family Loop",
    price: "$249",
    period: "/month",
    description: "2 bags per week",
    features: [
      "8 bags per month",
      "Priority scheduling",
      "Hanging service (10 items)",
      "Button reattachment",
      "No route fees",
    ],
    popular: true,
  },
];

export function Subscriptions() {
  const openWhatsApp = () => {
    window.open(siteConfig.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="subscriptions" className="py-24 lg:py-32 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-white/60 uppercase tracking-widest">
            Subscriptions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Best Value
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Save with regular service. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className={`h-full border-0 ${plan.popular ? "bg-white" : "bg-white/10"}`}>
                <CardContent className="p-8">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-semibold ${plan.popular ? "text-[#1a365d]" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className={plan.popular ? "text-slate-400" : "text-white/60"}>
                      {plan.period}
                    </span>
                  </div>

                  <h3 className={`text-lg font-semibold mt-4 mb-1 ${plan.popular ? "text-[#1a365d]" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={plan.popular ? "text-slate-500 text-sm" : "text-white/60 text-sm"}>
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-slate-600" : "text-white/80"}`}>
                        <Check className={`w-4 h-4 ${plan.popular ? "text-[#1a365d]" : "text-white/60"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openWhatsApp}
                    className={`w-full mt-8 h-12 rounded-full ${
                      plan.popular
                        ? "bg-[#1a365d] hover:bg-[#152a4a] text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Savings Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-white/40 text-sm mt-10"
        >
          Subscriptions cover clothing bags only. Towels and bulky items charged separately.
        </motion.p>
      </div>
    </section>
  );
}
