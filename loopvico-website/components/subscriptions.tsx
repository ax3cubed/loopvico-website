"use client";

import { motion } from "framer-motion";
import { Check, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Weekly Loop",
    price: "$149",
    period: "/month",
    description: "Perfect for individuals or couples",
    icon: Star,
    features: [
      "1 clothing bag per week (4/month)",
      "Same pickup day weekly",
      "Hanging service included (up to 10 items)",
      "Courtesy button reattachment",
      "No route fees",
      "Priority scheduling",
    ],
    popular: false,
  },
  {
    name: "Family Loop",
    price: "$249",
    period: "/month",
    description: "Best value for families",
    icon: Users,
    features: [
      "2 clothing bags per week (8/month)",
      "Same pickup day weekly",
      "Hanging service included (up to 10 items)",
      "Courtesy button reattachment",
      "No route fees",
      "Priority scheduling",
    ],
    popular: true,
  },
];

const savings = [
  { plan: "Weekly Loop", regular: "$160", subscription: "$149", savings: "$11" },
  { plan: "Family Loop", regular: "$320", subscription: "$249", savings: "$71" },
];

const WHATSAPP_NUMBER = "1234567890";

export function Subscriptions() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="subscriptions" className="py-20 lg:py-32 bg-[#1a365d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
            Subscription Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Best Value for Regular Customers
          </h2>
          <p className="text-lg text-white/80">
            Save money and never worry about laundry again. Subscriptions cover
            clothing bags — towels, linens, and bulky items charged separately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full border-0 shadow-xl ${
                  plan.popular
                    ? "bg-white scale-105 shadow-2xl"
                    : "bg-white/95"
                }`}
              >
                <CardContent className="p-8">
                  {plan.popular && (
                    <Badge className="bg-[#1a365d] text-white hover:bg-[#1a365d] mb-4">
                      BEST VALUE
                    </Badge>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-[#1a365d]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a365d]">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-[#1a365d]">
                      {plan.price}
                    </span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openWhatsApp}
                    className={`w-full py-6 text-lg font-semibold rounded-xl ${
                      plan.popular
                        ? "bg-[#1a365d] hover:bg-[#152a4a] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-[#1a365d]"
                    }`}
                  >
                    Subscribe via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Savings Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Your Savings
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {savings.map((item) => (
              <div
                key={item.plan}
                className="bg-white/10 rounded-xl p-4 text-center"
              >
                <p className="text-white/70 text-sm mb-1">{item.plan}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-white/50 line-through">
                    {item.regular}
                  </span>
                  <span className="text-2xl font-bold text-white">
                    {item.subscription}
                  </span>
                </div>
                <p className="text-green-400 text-sm mt-1">
                  Save {item.savings}/month
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 text-sm mt-6">
            Based on 4 weeks of service at regular pricing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
