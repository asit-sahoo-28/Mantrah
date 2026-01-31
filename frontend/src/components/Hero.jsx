// import React from "react";
// import { assets } from "../assets/assets";
// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-[90vh] bg-black overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
//         {/* Left Content */}
//         <div className="text-white">
//           <p className="tracking-widest text-sm mb-4 text-gray-300">
//             LIVE TO DANCE
//           </p>

//           <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
//             Satya Praksh  Odissi<br /> Dance Acadmy
//           </h1>

//           <p className="text-gray-300 max-w-md mb-8">
//             Discover the beauty and grace of Odissi dance at our premier academy,
//             under the guidance of an award-winning and internationally acclaimed dancer.
//           </p>

//           <button className="inline-flex items-center gap-2 bg-[#e7dccb] text-black px-6 py-3 rounded-full hover:bg-[#d9ccb6] transition font-medium">
//             → Explore Now
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="relative flex justify-center md:justify-end">
//           <img
//             src={assets.o1}
//             alt="Odissi Dancer"
//             className="max-h-[520px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;











// import React from "react";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-[90vh] bg-[#14161A] overflow-hidden">
      
//       {/* Subtle background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 " />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
//         {/* LEFT CONTENT */}
//         <div className="text-white animate-fadeInUp">
          
//           {/* Small accent */}
//           <div className="flex items-center gap-3 mb-5">
//             <span className="w-10 h-[1px] bg-[#d4af37]" />
//             <p className="tracking-widest text-sm text-[#d4af37] uppercase">
//               Live to Dance
//             </p>
//           </div>

//           <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
//            Mantrah – School  <br />
//             <span className="text-[#e7dccb]">of Performing Arts</span>
//           </h1>

//           <p className="text-gray-300 max-w-lg mb-10 leading-relaxed">
//             Discover the beauty, discipline, and grace of classical Odissi dance
//             under the guidance of an award-winning and internationally acclaimed artist.
//           </p>

//           <div className="flex items-center gap-6">
//             <button className="group inline-flex items-center gap-3 bg-[#d4af37] text-black px-7 py-3 rounded-full font-medium hover:bg-[#c9a634] transition-all duration-300">
//               Explore Now
//               <span className="group-hover:translate-x-1 transition">→</span>
//             </button>

//             <span className="text-sm text-gray-400">
//               Classical • Culture • Discipline
//             </span>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex justify-center md:justify-end animate-fadeInRight">
          
//           {/* Soft glow */}
//           <div className="absolute inset-0 blur-3xl bg-[#d4af37]/10 rounded-full" />

//           <img
//             src={assets.o30}
//             alt="Odissi Dancer"
//             className="relative max-h-[540px] object-contain drop-shadow-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#14161A] overflow-hidden">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="text-white animate-fadeInUp">
          
          {/* Small accent */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[1px] bg-[#d4af37]" />
            <p className="tracking-widest text-sm text-[#d4af37] uppercase">
              Live to Dance
            </p>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Mantrah – School <br />
            <span className="text-[#e7dccb]">of Performing Arts</span>
          </h1>

          <p className="text-gray-300 max-w-lg mb-10 leading-relaxed">
            Discover the beauty, discipline, and grace of classical Odissi dance
            under the guidance of an award-winning and internationally acclaimed artist.
          </p>

          <div className="flex items-center gap-6">
            <button className="group inline-flex items-center gap-3 bg-[#d4af37] text-black px-7 py-3 rounded-full font-medium hover:bg-[#c9a634] transition-all duration-300">
              Explore Now
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>

            <span className="text-sm text-gray-400">
              Classical • Culture • Discipline
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end animate-fadeInRight">
          
          {/* Soft glow */}
          <div className="absolute inset-0 blur-3xl bg-[#d4af37]/10 rounded-full" />

          <img
            src={assets.o30}
            alt="Odissi Dancer"
            className="relative max-h-[540px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
