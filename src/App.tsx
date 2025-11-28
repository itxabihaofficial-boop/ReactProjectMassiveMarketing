import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const navItems = [
  // { name: "Founders", path: "/" },
  // { name: "Investors", path: "/investors" },
  // { name: "About", path: "/about" },
  // { name: "Pricing", path: "/pricing" },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // --- GLOBAL SCROLL RESET ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // --- Global Cursor Logic ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "#e97e3a",
    },
  };

  // --- Scroll Handler for "Services" Button ---
  const handleServiceScroll = () => {
    setIsMenuOpen(false);
    const scrollToElement = () => {
      const element = document.getElementById("services-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (location.pathname === "/") {
      scrollToElement();
    } else {
      navigate("/");
      setTimeout(scrollToElement, 100);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      
      {/* --- Global Custom Cursor --- */}
      {/* UPDATED: Added 'hidden md:block' to hide this on mobile devices */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* --- Header --- */}
      <header className="relative top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="./src/assets/solutionbox-logo.png"
                  alt="SolutionBox"
                  className="h-22 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-slate-600 hover:text-[#e97e3a] transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleServiceScroll}
                className="text-slate-900 bg-transparent border border-gray-300 hover:border-[#e97e3a] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Services
              </button>

              <Link
                to="/contact"
                className="bg-[#e97e3a] hover:bg-[#bf1e2e] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              {/* UPDATED: Added bg-transparent, border-none, and removed rounded background styles */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-black focus:outline-none bg-transparent border-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-orange-50 hover:text-[#e97e3a]"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleServiceScroll}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white-600 hover:bg-orange-50 hover:text-[#e97e3a]"
              >
                Services
              </button>

              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#e97e3a] text-white hover:bg-[#bf1e2e]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* --- Main Content (Routes) --- */}
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;