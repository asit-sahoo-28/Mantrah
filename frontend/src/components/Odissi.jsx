import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Odissi = () => {
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
              src={assets.o25}
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
              Odissi Offline Classes
            </h2>

<div className="text-gray-700 leading-relaxed space-y-5">
  <p>
    Join us in our in-person classes located in the heart of
    <span className="font-semibold text-gray-900">
      {" "}Near Town Hall, Jajpur
    </span>
    , and learn the authentic traditional Odissi of the
    <span className="font-semibold text-gray-900">
      {" "}Guru  Satya Prakash
    </span>
    , under the tutelage of the award-winning and internationally acclaimed
    Odissi dancer and teacher,
    <span className="font-semibold text-gray-900">
      {" "}Mantrah School Dange
    </span>.
  </p>

  <p>
    At <span className="font-semibold text-gray-900">
     Mantrah School of Performing Arts
    </span>, we strive to provide our students with a comprehensive learning
    experience. Along with imparting the fundamentals of Odissi dance, music,
    and theory, we also focus on body-conditioning exercises and yoga to help
    students achieve their physical and mental potential.
  </p>

  <p>
    Our classes are enriched with guest speakers and experts who share their
    insights and knowledge, enabling students to explore and understand various
    aspects of Odissi and classical dance.
  </p>

  <p>
    Our training does not end in the classroom. We offer Odissi examinations and
    prepare students for competitions and performances. Our past students have
    won prestigious competitions and have presented their dances at esteemed
    festivals.
  </p>

  <p>
    We offer Odissi dance classes for
    <span className="font-semibold text-gray-900">
      {" "}both kids and adults
    </span>, making it accessible for everyone to experience the mesmerizing
    beauty of Odissi.
  </p>

  <p className="font-semibold text-[#b56b4b]">
    Join us today and take your first step towards unlocking your true potential
    in the enchanting world of Odissi dance.
  </p>
</div>


            <p className="text-gray-700 leading-relaxed">
          
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-[#c9a24d]/10 blur-3xl pointer-events-none" />
    </section>
  );
};

export default Odissi;