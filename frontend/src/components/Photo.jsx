import React from "react";
import { assets } from "../assets/assets";

const Photo = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={assets.o20}
            alt="With Honorable Prime Minister Narendra Modi & Prince Charles"
            className="w-full max-w-4xl object-cover"
          />
        </div>

        {/* Caption */}
        <p className="mt-6 text-center text-sm text-gray-600 italic">
          With Honorable  Chief Minister Mohan Charan Majhi
        </p>

      </div>
    </section>
  );
};

export default Photo;
