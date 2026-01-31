// import React from "react";
// import { assets } from "../assets/assets";

// export default function Welcome() {
//   return (
//     <section className="relative bg-white py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Left Image */}
//         <div className="relative flex justify-center">
//           {/* Frame */}
//           <div className="absolute inset-6 border-[10px] border-[#e6decd] -z-10" />

//           <img
//             src={assets.o5}// replace with actual dancer image
//             alt="Odissi Dancer"
//             className="max-h-[520px] object-contain"
//           />
//         </div>

//         {/* Right Content */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
//             Welcome To Satya Prakash
// Odissi Dance Academy
//           </h1>

//           <p className="text-gray-600 leading-relaxed mb-8">
//             SATYA PRAKASH Dange has been teaching Odissi for the past 15 years and has
//             established "SATYA PRAKASH
//             ODISSI DANCE ACADAMY" where she imparts training
//             to young and promising Odissi dancers. Our focus is not only on providing
//             a strong foundation in the technique of Odissi but also on the holistic
//             development and growth of our students. To achieve this, we include
//             body-conditioning exercises, yoga, music, history, and theoretical
//             knowledge of Odissi in our training program. We also introduce elements
//             of rhythm, choreography, and presentation to enhance the overall learning
//             experience.
//           </p>

//           <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#e6decd] text-gray-900 hover:bg-[#d6cbb6] transition">
//             Learn More <span>→</span>
//           </button>
//         </div>
//       </div>

//       {/* Background texture (right side) */}
//       <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/images/temple-bg.png')] bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none" />
//     </section>
//   );
// }







import React from "react";
import { assets } from "../assets/assets";

export default function Welcome() {
  return (
    <section className="relative bg-[#14161A] py-8 overflow-hidden">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/90 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* RIGHT CONTENT (shows FIRST on small screens) */}
        <div className="text-white animate-fadeInRight order-1 lg:order-2">
          
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[#d4af37]" />
            <p className="uppercase tracking-widest text-sm text-[#d4af37]">
              Welcome
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Welcome to <br />
            <span className="text-[#e7dccb]">
              Mantrah School of Performing Arts
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-xl mb-10">
            Mantrah School has been teaching Odissi for over 15 years and has
            established a premier academy dedicated to nurturing young and
            promising Odissi dancers. The training focuses not only on strong
            technical foundations but also on holistic artistic development
            through body conditioning, yoga, music, history, rhythm, choreography,
            and presentation.
          </p>

          <button className="group inline-flex items-center gap-3 bg-[#d4af37] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c9a634] transition-all duration-300">
            Learn More
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>
        </div>

        {/* LEFT IMAGE (shows SECOND on small screens) */}
        <div className="relative flex justify-center animate-fadeInUp order-2 lg:order-1">
          
          {/* Soft gold frame */}
          <div className="absolute inset-6 border border-[#d4af37]/40 rounded-sm" />

          <img
            src={assets.o5}
            alt="Odissi Dancer"
            className="relative max-h-[520px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
