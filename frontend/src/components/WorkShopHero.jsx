import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const WorkShopHero = () => {
  return (
    <section className="relative h-[70vh] md:h-[75vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={assets.o22}
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
        Workshop
        </h1>

        {/* Breadcrumb */}
       <p className="text-sm uppercase tracking-widest text-[#C9A24D] flex items-center gap-2">
  <Link
    to="/"
    className="hover:text-white transition-colors duration-300"
  >
    Home
  </Link>
  <span className="text-white">›</span>
  <span className="text-[#C9A24D]">Workshop</span>
</p>

      </div>

      {/* Soft vignette for premium depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]"></div>
    </section>
  );
};

export default WorkShopHero;