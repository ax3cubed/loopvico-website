"use client";

import { motion } from "framer-motion";

const items = [
  { name: "Standard Blanket", price: "$20" },
  { name: "Weighted Blanket", price: "$28" },
  { name: "Comforter (Twin/Full)", price: "$30" },
  { name: "Comforter (Queen/King)", price: "$40" },
  { name: "Quilt / Bedspread", price: "$25" },
  { name: "Sleeping Bag", price: "$25" },
  { name: "Mattress Pad", price: "$30" },
  { name: "Pillow / Sham", price: "$8–$12" },
];

export function SpecialtyItems() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-[#1a365d]/70 uppercase tracking-widest">
            Specialty Items
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#1a365d] tracking-tight">
            Bulky Items
          </h2>
          <p className="mt-4 text-slate-500">
            Priced individually. Contact us for oversized items.
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {items.map((item) => (
            <div
              key={item.name}
              className="p-5 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-sm transition-shadow"
            >
              <p className="text-2xl font-semibold text-[#1a365d]">{item.price}</p>
              <p className="text-sm text-slate-500 mt-1">{item.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
