

// import React from "react";
// import { FaWhatsapp } from "react-icons/fa"; // WhatsApp from Font Awesome

// export default function WhatsAppButton() {
//   return (
//     <a
//       href="https://wa.me/918270192080?text=Hello%2C%20I%20want%20to%20contact%20you!"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
//       title="Chat with us on WhatsApp"
//     >
//       <FaWhatsapp size={24} className="text-white" />
//     </a>
//   );
// }  





import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918270192080?text=Greetings%2C%20I%20am%20interested%20in%20learning%20Odissi%20and%20would%20like%20more%20details%20about%20classes%20and%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50
                   bg-[#25D366] p-4 rounded-full shadow-lg
                   animate-whatsappPulse
                   hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp size={26} className="text-white" />
      </a>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes whatsappPulse {
            0% { transform: scale(1); }
            20% { transform: scale(1.08); }
            40% { transform: scale(1); }
            60% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }

          .animate-whatsappPulse {
            animation: whatsappPulse 2.5s infinite;
          }
        `}
      </style>
    </>
  );
}
