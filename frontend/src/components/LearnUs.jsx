import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const programs = [
  {
    title: "Kids – Online",
    description:
      "Introduce your kids to the basics of Odissi in a fun and engaging manner.",
    type: "light",
  },
  {
    title: "Offline",
    description:
      "Learn authentic Odissi dance in a traditional physical class environment.",
    type: "dark",
  },
  {
    title: "Adults – Online",
    description:
      "Introduction to Odissi basics and theory in intensive 3-month modules.",
    type: "light",
  },
];

export default function LearnUs() {
  return (
    <section className="relative bg-[#0F1115] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-center text-[#F5F5F5] mb-20 tracking-wide"
        >
          Learn With Us
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative h-[420px] p-10 text-center flex flex-col justify-center
                overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                ${
                  item.type === "dark"
                    ? "bg-black text-white ring-1 ring-[#C9A24D]/40"
                    : "bg-[#e6decd] text-gray-900"
                }`}
            >
              {/* Background image for center card */}
              {item.type === "dark" && (
                <>
                  <img
                    src={assets.o5}
                    alt="Offline Program"
                    className="absolute inset-0 w-full h-full object-cover opacity-55 scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                </>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-[#C9A24D] mb-6 tracking-wide">
                  {item.title}
                </h3>

                <p className="mb-10 leading-relaxed max-w-xs mx-auto opacity-90">
                  {item.description}
                </p>

                <button
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                  border border-[#C9A24D] text-[#C9A24D]
                  hover:bg-[#C9A24D] hover:text-black
                  transition duration-300"
                >
                  <Link to="/contact"> Join Us</Link> <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold glow accent */}
        <div className="absolute left-0 top-1/3 w-1/3 h-1/3 bg-[#C9A24D]/10 blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
