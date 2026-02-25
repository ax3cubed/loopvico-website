"use client";

import { motion } from "framer-motion";
import { Bed, BedDouble, Cloud, Tent, Square, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Square,
    name: "Blanket (Standard)",
    price: "$20",
    description: "Standard size blankets",
  },
  {
    icon: BedDouble,
    name: "Large / Weighted Blanket",
    price: "$28",
    description: "Heavy or oversized blankets",
  },
  {
    icon: Bed,
    name: "Comforter / Duvet (Twin/Full)",
    price: "$30",
    description: "Smaller bed comforters",
  },
  {
    icon: BedDouble,
    name: "Comforter / Duvet (Queen/King)",
    price: "$40",
    description: "Larger bed comforters",
  },
  {
    icon: Cloud,
    name: "Quilt / Bedspread",
    price: "$25",
    description: "Quilts and decorative spreads",
  },
  {
    icon: Tent,
    name: "Sleeping Bag",
    price: "$25",
    description: "All types of sleeping bags",
  },
  {
    icon: Square,
    name: "Mattress Pad / Small Rug",
    price: "$30",
    description: "Mattress protectors, small rugs",
  },
  {
    icon: Circle,
    name: "Pillow / Sham",
    price: "$8–$12",
    description: "Standard to king size",
  },
];

export function SpecialtyItems() {
  return (
    <section className="py-20 lg:py-32 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#1a365d] uppercase tracking-wider mb-4">
            Specialty Items
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Bulky Items & Bedding
          </h2>
          <p className="text-lg text-slate-600">
            Large items that don&apos;t fit in standard bags are priced
            individually. Contact us for custom quotes on oversized items.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1a365d]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#1a365d]" />
                  </div>
                  <h3 className="font-semibold text-[#1a365d] mb-1 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#1a365d] mb-2">
                    {item.price}
                  </p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Prices subject to change based on item size and condition. Contact
            us for a custom quote on specialty or oversized items.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
