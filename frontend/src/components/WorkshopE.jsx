import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const WorkshopE = () => {
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
              src={assets.o28}
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
            

<div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">

  <h2 className="text-4xl font-serif text-gray-900 mb-4">
    Odissi Workshop
  </h2>

  <p>
    <span className="font-semibold text-gray-900">
      Mantrah School of Performing Arts
    </span>{" "}
    is a premier institution that goes above and beyond in offering a wide range
    of workshops catering to diverse levels, age groups, and corporate entities.
    Our workshops are meticulously designed and thoughtfully curated to provide
    an immersive and transformative learning experience.
  </p>

  <p>
    We take great pride in tailoring our workshops to the unique needs and
    abilities of each student. From introductory workshops for kids and adults
    to intensive traditional Odissi choreography sessions, our programs offer a
    comprehensive learning experience. We also provide both group and one-on-one
    workshops in online and offline formats, ensuring flexibility and
    personalized guidance.
  </p>

  <p>
    We strongly believe in the power of dance to create meaningful connections.
    Alongside artistic training, we offer corporate workshops and interactive
    movement sessions that help organizations engage their teams in a fun,
    innovative, and impactful way. Our lecture-based workshops explore the
    interrelation between dance and other disciplines such as space and
    architecture, opening new horizons of creativity and intellectual
    stimulation.
  </p>

  <p className="border-l-4 border-[#b56b4b] pl-5 italic text-gray-800">
    At Mantrah School of Performing Arts, we are dedicated to providing a holistic
    learning experience that enriches the mind, strengthens the body, and
    nourishes the soul. We strive to create a nurturing environment that fosters
    creativity, curiosity, and a lifelong passion for dance.
  </p>

  <p className="font-semibold text-[#b56b4b]">
    Join us today and experience the transformative power of Odissi dance.
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

export default WorkshopE;