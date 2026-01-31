import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Learn and perform traditional Odissi dance in 12 online lessons",
  "Innovative teaching while preserving authentic Odissi technique",
  "Structured learning with weekly tutorials and free resources",
  "Performance opportunities and Odissi examinations",
  "Live classes with expert faculty in exclusive batches",
  "Learn from the comfort and safety of your home",
  "Continuous help and guidance for all things Odissi",
];

const WhyChoose = () => {
  return (
    <section className="relative bg-[#0F1115] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-gray-100">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center text-[#F5F5F5] mb-12 tracking-wide"
        >
          Why Choose Us
        </motion.h2>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="flex gap-3 items-start"
            >
              <CheckCircle className="text-[#C9A24D] mt-1 flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Gold Glow Accent */}
        <div className="absolute right-0 top-1/3 w-1/4 h-1/4 bg-[#C9A24D]/10 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default WhyChoose;
