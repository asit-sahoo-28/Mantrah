// import React from "react";
// import { assets } from "../assets/assets";
// const offers = [
//   {
//     id: "01.",
//     title: "Online Classes",
//     image: assets.o7,
//     offset: "lg:mt-0",
//   },
//   {
//     id: "02.",
//     title: "Offline Classes",
//     image: assets.o8,
//     offset: "lg:mt-16",
//   },
//   {
//     id: "03.",
//     title: "Exams",
//     image:assets.o10,
//     offset: "lg:mt-0",
//   },
//   {
//     id: "04.",
//     title: "Workshop",
//     image: assets.o11,
//     offset: "lg:mt-16",
//   },
// ];

// export default function WhatWeOffer() {
//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-20">
//           What We Offer
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
//           {offers.map((item) => (
//             <div
//               key={item.id}
//               className={`text-center ${item.offset}`}
//             >
//               <div className="relative bg-gray-100 p-6">
//                 {/* Number */}
//                 <span className="absolute top-4 left-4 text-3xl font-serif text-[#b87352]">
//                   {item.id}
//                 </span>

//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="mt-8 text-xl font-serif text-[#b87352]">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { assets } from "../assets/assets";

const offers = [
  { id: "01.", title: "Online Classes", image: assets.o7, offset: "lg:mt-0" },
  { id: "02.", title: "Offline Classes", image: assets.o8, offset: "lg:mt-20" },
  { id: "03.", title: "Exams", image: assets.o10, offset: "lg:mt-0" },
  { id: "04.", title: "Workshop", image: assets.o11, offset: "lg:mt-20" },
];

export default function WhatWeOffer() {
  return (
    <section className="relative bg-[#0F1115] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#F5F5F5] mb-24 tracking-wide">
          What We Offer
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {offers.map((item, index) => (
            <div
              key={item.id}
              className={`group text-center ${item.offset} animate-fadeUp`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative bg-[#161A20] p-6 
                              transition-all duration-500
                              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                              group-hover:-translate-y-3
                              group-hover:shadow-[0_20px_60px_rgba(201,162,77,0.25)]">

                {/* Number */}
                <span className="absolute top-4 left-4 text-3xl font-serif text-[#C9A24D]">
                  {item.id}
                </span>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[380px] object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-serif text-[#C9A24D] tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Gold glow accent */}
      <div className="absolute right-0 top-1/3 w-1/3 h-1/3 
                      bg-[#C9A24D]/10 blur-3xl pointer-events-none" />
    </section>
  );
}
