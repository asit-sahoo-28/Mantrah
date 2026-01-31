import React from "react";
import { assets } from "../assets/assets";

const AboutSatiya = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}
          <div className="relative">
            <img
              src={assets.o5}
              alt="Pracheeti Dange Odissi"
              className="w-full max-w-md rounded-md object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              About Mantrah School Dange
            </h2>

            {/* Highlight paragraph */}
            <p className="border-l-4 border-[#b87352] pl-5 font-medium text-gray-900 mb-6">
              Mantrah School Dange is an award-winning internationally acclaimed Odissi dancer
              from Pune, India. With more than 20 years of experience in Odissi and she
              has performed in many prestigious concerts and festivals worldwide.
            </p>

            {/* Description */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                An empanelled artist with the Indian Council for Cultural Relations (ICCR),
                Govt. of India, she has performed at many prestigious concerts and festivals
                internationally.
              </p>

              <p>
                For her qualities like sense of rhythm, great presentation skills, and an
                excellent command over expression through bhavas (emotions) and mudras
                (gestures), she has received great acclaim and press coverage from critics
                and experts.
              </p>

              <p>
                Being blessed with an innate understanding of space, movements and
                aesthetics, she has choreographed various solo and group dance
                presentations for both traditional and contemporary themes.
              </p>

              <p>
                With her passion for Odissi and her unwavering commitment to excellence,
                Pracheeti Dange continues to inspire and captivate audiences around the
                world.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-14 max-w-md">
              <div className="border border-[#e7d6c8] text-center py-8">
                <h3 className="text-4xl font-serif text-[#b87352] mb-2">+15</h3>
                <p className="uppercase text-sm tracking-widest text-gray-700">
                  Awards
                </p>
              </div>

              <div className="border border-[#e7d6c8] text-center py-8">
                <h3 className="text-4xl font-serif text-[#b87352] mb-2">+15</h3>
                <p className="uppercase text-sm tracking-widest text-gray-700">
                  Experience Years
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSatiya;
