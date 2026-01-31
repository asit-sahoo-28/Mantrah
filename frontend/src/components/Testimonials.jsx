import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: `My 11 year old daughter enrolled for the Kids beginners module. It was a wonderful experience for her! Satya Prakash's teaching style is wonderful and she introduced the children to tales from mythology as well as modern children's literature and taught them to express themselves using Odissi`,
    name: "Ankita Pakrashi",
    country: "Delhi",
  },
  {
    text: `My daughter enrolled in the online Odissi classes and we are extremely happy with her progress. Satya Prakash is very patient and attentive, ensuring that every child feels confident and motivated. The use of storytelling, theory, and practical demonstrations makes learning Odissi both meaningful and enjoyable for young learners.`,
    name: "Rohit Mishra",
    country: "Pune",
  },
  {
    text: `Enrolling my child in the kids beginner’s Odissi course was a wonderful decision. The teaching style is gentle yet disciplined, allowing children to gradually build confidence and expression. The integration of traditional stories with movement helps the children connect deeply with Odissi vocabulary and culture.`,
    name: "Priya Sen",
    country: "Odisha",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={assets.o2}
          alt="Testimonials"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-px w-14 bg-[#b87352]" />
          <span className="uppercase tracking-widest text-xs text-[#b87352]">
            Testimonials
          </span>
          <span className="h-px w-14 bg-[#b87352]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          What They Say
        </h2>

        {/* Animated Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-200 leading-relaxed text-base md:text-lg mb-6">
              “{testimonials[index].text}”
            </p>

            <div>
              <p className="text-[#b87352] font-semibold">
                {testimonials[index].name}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[index].country}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-[#b87352]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

