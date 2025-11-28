import React from "react";
import { Menu } from "lucide-react";

const HomeHero = () => {
  return (
    // UPDATED: Changed 'h-screen' to 'h-[60vh] md:h-screen'
    // This makes the banner 60% height on mobile, and 100% on desktop.
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden font-sans">
      
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Note: Ensure this path is correct for your project structure */}
        <source
          src="src/assets/BannerVideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay to match the Red/Purple tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#590d22]/80 to-[#9f1239]/80 z-10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        
        {/* UPDATED: Changed 'text-5xl' to 'text-3xl' for mobile */}
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-tight">
          Local IT support in Reigate
          <br />
          computers, printers, Wi‑Fi, 365
        </h1>
  
        {/* Bottom Pill Navigation (Commented out as in your code) */}
        {/* <div className="absolute bottom-10 bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-6 text-sm font-medium border border-white/10 shadow-2xl backdrop-blur-md">
          <span className="cursor-pointer hover:text-green-400 transition-colors">Startups</span>
          <span className="cursor-pointer hover:text-green-400 transition-colors">Fractional</span>
          <span className="cursor-pointer hover:text-green-400 transition-colors">Company</span>
          <div className="w-px h-4 bg-white/20"></div>
          <Menu className="w-4 h-4 cursor-pointer hover:text-green-400 transition-colors" />
        </div> */}
      </div>
    </section>
  );
};

export default HomeHero;