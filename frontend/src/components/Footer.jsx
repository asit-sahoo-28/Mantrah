// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Youtube,
//   Linkedin,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0F1115] text-white pt-14 pb-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* About */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
//               Satya Prakash <br /> Odissi Dance Academy
//             </h3>
//             <p className="text-gray-300 leading-relaxed mb-4 text-sm">
//               Discover the beauty and grace of Odissi dance at Satya Prakash
//               Odissi Dance Academy, offering comprehensive training in this
//               ancient Indian classical dance form.
//             </p>
//             <a
//               href="#"
//               className="text-[#C9A24D] underline underline-offset-4 text-sm"
//             >
//               Read More
//             </a>
//           </motion.div>

//           {/* Learning */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//           >
//             <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
//               Learning
//             </h3>
//             <ul className="space-y-3 text-sm">
//               {["Online Classes", "Offline Classes", "Exams", "Workshops"].map(
//                 (item) => (
//                   <li key={item} className="flex items-center gap-3">
//                     <span className="text-[#C9A24D]">→</span>
//                     <a href="#" className="hover:text-[#C9A24D] transition">
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
//               Quick Links
//             </h3>
//             <ul className="space-y-3 text-sm">
//               {["Home", "Gallery", "FAQ", "Blog", "Contact"].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <span className="text-[#C9A24D]">→</span>
//                   <a href="#" className="hover:text-[#C9A24D] transition">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
//               Contact
//             </h3>

//             <ul className="space-y-4 text-gray-300 text-sm">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-1" />
//                 <span>
//                   Lane No 6, Koregaon Park,
//                   <br /> Pune 411 001
//                 </span>
//               </li>

//               <li className="flex items-center gap-3">
//                 <Phone size={16} />
//                 <span>+91 XXXXX XXXXX</span>
//               </li>

//               <li className="flex items-center gap-3">
//                 <Mail size={16} />
//                 <span>info@odissidanceacademy.com</span>
//               </li>
//             </ul>

//             {/* Social */}
//             <div className="mt-6">
//               <h4 className="text-lg font-serif text-[#C9A24D] mb-3">
//                 Follow Us
//               </h4>
//               <div className="flex gap-3">
//                 {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="bg-[#C9A24D] p-2.5 rounded-md
//                                hover:opacity-80 transition"
//                   >
//                     <Icon size={16} className="text-black" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-800 mt-12 pt-4 text-center text-xs text-gray-400">
//           © {new Date().getFullYear()} Satya Prakash Odissi Dance Academy.
//           All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }












import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] text-white pt-14 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
              Mantrah School <br /> of Performing Arts
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              Discover the beauty and grace of Odissi dance at Mantrah School of
              Performing Arts, offering comprehensive training in this ancient
              Indian classical dance form.
            </p>
            <Link
              to="/about"
              className="text-[#C9A24D] underline underline-offset-4 text-sm"
            >
              Read More
            </Link>
          </motion.div>

          {/* Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
              Learning
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Online Classes", link: "/learning/online" },
                { name: "Offline Classes", link: "/learning/offline" },
                { name: "Exams", link: "/learning/exams" },
                { name: "Workshops", link: "/learning/workshop" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">→</span>
                  <Link to={item.link} className="hover:text-[#C9A24D] transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "Gallery", link: "/gallery/photos" },
                { name: "FAQ", link: "/faq" },
                { name: "Blog", link: "/blog" },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">→</span>
                  <Link to={item.link} className="hover:text-[#C9A24D] transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-serif text-[#C9A24D] mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span>
                  Jajpur Road <br /> Odisha, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 8270192080</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>mantrah.jajpur@gmail.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-serif text-[#C9A24D] mb-3">
                Follow Us
              </h4>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61585950132844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A24D] p-2.5 rounded-md hover:opacity-80 transition"
                >
                  <Facebook size={16} className="text-black" />
                </a>

                <a
                  href="https://www.instagram.com/mantrah_jajpur?fbclid=IwY2xjawPqPJFleHRuA2FlbQIxMQBicmlkETBGYjFrRG1kc0M4WnVWd2dNc3J0YwZhcHBfaWQBMAABHkkeUcp9yqC9qixm_v6DaWOYK90vW4F4y9fzVlTp3u1zaIWgZo9okckcgZ7F_aem_m42aMac95pKeHpBYnnB9zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A24D] p-2.5 rounded-md hover:opacity-80 transition"
                >
                  <Instagram size={16} className="text-black" />
                </a>

                <a
                  href="https://www.youtube.com/@mantrahschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A24D] p-2.5 rounded-md hover:opacity-80 transition"
                >
                  <Youtube size={16} className="text-black" />
                </a>

              
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Mantrah School of Performing Arts. All rights reserved.
          <br />
          Designed & Developed by Asit Sahoo
        </div>
      </div>
    </footer>
  );
}
