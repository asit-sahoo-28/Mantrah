

import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  // const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setMobileOpen(false);
    navigate("/");
  };

  return (
<nav className="fixed top-0 w-full z-50 bg-black border-b border-black">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img
            src={assets.o29}
            alt="Pracheeti Odissi Dance Academy"
            className="h-14 md:h-16 object-contain"
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link className="hover:text-[#d4af37]" to="/">Home</Link>
          <Link className="hover:text-[#d4af37]" to="/about">About</Link>

          {/* Learning */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#d4af37]">
              Learning ▾
            </span>
            <div className="absolute hidden group-hover:block bg-black/90 backdrop-blur rounded mt-2 w-52">
              {["online", "offline", "exams", "workshop"].map(item => (
                <Link
                  key={item}
                  to={`/learning/${item}`}
                  className="block px-4 py-3 hover:bg-white/10 hover:text-[#d4af37]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-[#d4af37]">
              Gallery ▾
            </span>
            <div className="absolute hidden group-hover:block bg-black/90 backdrop-blur rounded mt-2 w-40">
              <Link className="block px-4 py-3 hover:bg-white/10 hover:text-[#d4af37]" to="/gallery/photos">
                Photos
              </Link>
              <Link className="block px-4 py-3 hover:bg-white/10 hover:text-[#d4af37]" to="/gallery/videos">
                Videos
              </Link>
                            <Link className="block px-4 py-3 hover:bg-white/10 hover:text-[#d4af37]" to="/gallery/Event">
                Event
              </Link>
            </div>
          </div>

          <Link className="hover:text-[#d4af37]" to="/faq">FAQ</Link>

          {/* Contact */}
          <Link to="/contact" className="flex items-center gap-2 group">
            <span>Contact Us</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition">
              →
            </span>
          </Link>

                    <Link to="/admin" className="flex items-center gap-2 group">
            <span>Admin Login</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition">
              🔐
            </span>
          </Link>

          {/* {{isAuth && ( }
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          )} */}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl text-white px-6 py-6 space-y-5">

          <Link onClick={() => setMobileOpen(false)} className="block hover:text-[#d4af37]" to="/">
            Home
          </Link>

          <Link onClick={() => setMobileOpen(false)} className="block hover:text-[#d4af37]" to="/about">
            About
          </Link>

          {/* Learning */}
          <button
            onClick={() => setLearningOpen(!learningOpen)}
            className="w-full flex justify-between hover:text-[#d4af37]"
          >
            <span>Learning</span>
            <span>{learningOpen ? "−" : "+"}</span>
          </button>

          {learningOpen && (
            <div className="ml-4 space-y-3">
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/learning/online">Online Class</Link>
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/learning/offline">Offline Class</Link>
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/learning/exams">Exams</Link>
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/learning/workshop">Workshop</Link>
            </div>
          )}

          {/* Gallery */}
          <button
            onClick={() => setGalleryOpen(!galleryOpen)}
            className="w-full flex justify-between hover:text-[#d4af37]"
          >
            <span>Gallery</span>
            <span>{galleryOpen ? "−" : "+"}</span>
          </button>

          {galleryOpen && (
            <div className="ml-4 space-y-3">
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/gallery/photos">Photos</Link>
              <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/gallery/videos">Videos</Link>
                <Link onClick={() => setMobileOpen(false)} className="block text-sm hover:text-[#d4af37]" to="/gallery/Event">Event</Link>
            </div>
          )}

          <Link onClick={() => setMobileOpen(false)} className="block hover:text-[#d4af37]" to="/faq">
            FAQ
          </Link>

          <Link onClick={() => setMobileOpen(false)} className="block hover:text-[#d4af37]" to="/contact">
            Contact Us →
          </Link>
                    <Link onClick={() => setMobileOpen(false)} className="block hover:text-[#d4af37]" to="/admin">
            Admin Login 🔐
          </Link>

          {isAuth && (
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 py-2 rounded"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}