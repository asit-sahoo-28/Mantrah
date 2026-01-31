import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section className="relative bg-[#f9f6f2] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={assets.o5}
              alt="Odissi Philosophy"
              className="w-full max-w-md rounded-md shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Philosophy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Welcome to the online learning at Mantrah School of Performing Arts.
              Learn this graceful and alluring dance form in short structured
              modules. At Mantrah School of Performing Arts we believe it is our
              responsibility, as the cultural ambassadors of Odissi, to carry
              forward this rich 2000-year-old tradition in an authentic manner.
              Imparting training in Odissi in the contemporary context while
              maintaining the integrity of the form is at the heart of our
              institution with the changes in the teaching methodology in the
              post-pandemic world.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We now have 50+ students globally, learning, practising and
              performing Odissi in all the corners of the world. Keeping in line
              with the contemporary times, we have carefully planned and
              designed short modules that the students can learn and perform
              from the comfort and safety of their homes while gaining insight
              into the rich legacy and history of Odissi. Transforming our
              teaching methodology in these dynamic times while preserving and
              nurturing the traditional style and form of Odissi has led to an
              avant-garde teaching approach.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-[#c9a24d]/10 blur-3xl pointer-events-none" />
    </section>
  );
};

export default Philosophy;
