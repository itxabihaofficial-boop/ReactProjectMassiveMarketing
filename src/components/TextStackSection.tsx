import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// --- DATA WITH BULB COLORS ---
const cardsData = [
  {
    title: "Computer & Laptop Support",
    description: "Keep your devices running smoothly with reliable, professional support. Whether your computer feels slow, is showing errors, or simply needs a fresh start, I offer full health checks, malware and virus removal, SSD and RAM upgrades for improved performance, data recovery for lost or corrupted files, and complete setup for new PCs and laptops. Fast, friendly, and jargon-free help — at home or in your office.",
    buttonText: "Enquire Now",
    theme: "bg-[#F9A01B] text-white" 
  },
  {
    title: "Printers & Scanners",
    description: "From stubborn paper jams to confusing driver issues, I handle all aspects of printer and scanner support. I can set up scan-to-folder or scan-to-email workflows, configure Wi-Fi printing, enable AirPrint for Apple devices, and optimise your setup so it works reliably every time. No more printing frustrations — just a setup that works when you need it.",
    buttonText: "Enquire Now",
    theme: "bg-[#BF1E2E] text-white" 
  },
  {
    title: "Wi‑Fi & Networks",
    description: "Enjoy strong, stable Wi-Fi throughout your home or workplace. I provide full network improvements, including mesh systems and access points, router upgrades, guest network configuration, and tidy, organised cabling. Say goodbye to dead zones and buffering — get fast, secure coverage everywhere.",
    buttonText: "Enquire Now",
    theme: "bg-[#37C2E0] text-white" 
  },
  {
    title: "Microsoft 365 & Email",
    description: "Whether you’re setting up Microsoft 365 for the first time or migrating from another platform, I offer clear, stress-free support. Services include licence management, mailbox configuration, shared mailboxes for teams, email security, and retention/backup policies to protect your data. Professional setup to keep your email and productivity tools running seamlessly.",
    buttonText: "Enquire Now",
    theme: "bg-[#00A1C9] text-white" 
  },
  {
    title: "Cyber Basics & Backups",
    description: "Protect your devices and data with practical, affordable cyber-security measures. I set up antivirus and patching, MFA (multi-factor authentication), secure password vaults, and image-based backup systems that include regular test restores so you know they actually work. Real-world cyber protection — without the complexity.",
    buttonText: "Enquire Now",
    theme: "bg-[#F15A24] text-white" 
  },
  {
    title: "Website Design & Small Business Web Services",
    description: "Give your business a clean, modern, easy-to-use website designed with your goals in mind. I provide complete website design and build services, including mobile-friendly layouts, clear navigation, SEO-friendly structure, fast hosting configuration, domain setup, and ongoing support or updates. Whether you need a simple one-page site, a small business website, or a full refresh of what you already have, I’ll create something professional, secure, and easy for you to manage.",
    buttonText: "Enquire Now",
    theme: "bg-[#37C2E0] text-white" 
  }
];

const TextStackSection = () => {
  return (
    <div className="relative w-full bg-white py-20 pb-40" id="services-section">
      
      {/* --- Heading --- */}
      <div className="max-w-full mx-auto px-6 mb-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          What We Can <br/>Help With:
        </h2>
      </div>

      <div className="max-w-full mx-auto px-4 flex flex-col gap-0">
        {cardsData.map((card, index) => {
          const targetScale = 1 - ((cardsData.length - index) * 0.05);
          return (
            <Card 
              key={index} 
              data={card} 
              index={index} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ data, index, targetScale }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale * 0.9, 1]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          top: `calc(2vh + ${index * 10}px)`, 
          scale
        }} 
        // UPDATED: Changed h-[60vh] to h-[70vh] for mobile to fit more text
        className={`relative w-[95%] md:w-[80%] max-w-[1600px] h-[70vh] md:h-[95vh] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl origin-top border border-slate-200 ${data.theme}`}
      >
        {/* UPDATED: Reduced vertical padding (py-6) and margin (mb-6) for tighter fit on mobile */}
        <div className="w-full h-full flex flex-col items-center justify-center px-5 py-6 md:p-24 text-center">
            
            {/* Heading */}
            <h3 className="text-2xl md:text-7xl font-black text-white mb-4 md:mb-8 tracking-tight">
                {data.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm md:text-2xl text-white max-w-4xl leading-relaxed mb-6 md:mb-12 opacity-90">
                {data.description}
            </p>
            
            {/* Button */}
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-gray-100"
            >
                {data.buttonText}
                <div className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                </div>
            </Link>
            
        </div>
      </motion.div>
    </div>
  );
};

export default TextStackSection;