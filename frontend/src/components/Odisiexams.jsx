import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Odissiexams = () => {
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
              Odissi Exams
            </h2>

<div className="text-gray-700 leading-relaxed space-y-5">
 <div className="max-w-4xl text-gray-700 leading-relaxed space-y-6">
  <p>
    <span className="font-semibold text-gray-900">
      Mantrah School of Performing Arts
    </span>{" "}
    is a distinguished institution that takes immense pride in offering
    <span className="font-semibold text-gray-900">
      {" "}national-level examinations
    </span>{" "}
    in the exquisite dance form of Odissi. Our commitment to our students’
    academic growth and professional recognition is second to none, as we deeply
    value the importance of certification and academic credibility earned
    through rigorous training and dedicated practice.
  </p>

  <p>
    We are pleased to inform you that we are registered with the prestigious
    <span className="font-semibold text-gray-900">
      {" "}Akhil Bharatiya Gandharva Mahavidyala Mandal, India
    </span>
    . Over the years, numerous students from our academy have successfully
    completed their examinations with distinction, reflecting the quality and
    depth of our training methodology.
  </p>

 

  <p className="border-l-4 border-[#b56b4b] pl-5 italic text-gray-800">
    At Mantrah School of Performing Arts, we are passionate about delivering a
    holistic learning experience that enriches artistic expression while
    fostering a strong sense of academic accomplishment. We take immense pride
    in our students’ achievements and remain committed to upholding our legacy
    of excellence in Odissi dance education.
  </p>
</div>


  

  <p>
    Our classes are enriched with guest speakers and experts who share their
    insights and knowledge, enabling students to explore and understand various
    aspects of Odissi and classical dance.
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

export default Odissiexams;