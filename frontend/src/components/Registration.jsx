import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center bg-black overflow-hidden">
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center text-white px-6 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="uppercase tracking-widest text-sm mb-3 text-[#C9A24D]"
        >
          Registration Is Open Now
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base mb-4 opacity-90"
        >
          Not Sure If Odissi Is For You?
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-serif leading-tight mb-6"
        >
          Join Our Free Trial Class Today <br />
          And Find Out For Yourself!
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#bfa14f] transition px-7 py-3 rounded-full text-white font-medium shadow-lg"
        > <Link to="/contact"> → Join Trial Class</Link>
          
        </motion.button>
      </motion.div>

      {/* Subtle gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/3 bg-[#C9A24D]/10 blur-3xl pointer-events-none" />
    </section>
  );
};

export default Registration;


