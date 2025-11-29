import React from "react";
// import { Menu } from "lucide-react"; 

const HomeHero: React.FC = () => {
  return (
    // 1. HEIGHT & PADDING:
    // - 'h-auto': Height grows/shrinks to fit the text exactly on mobile.
    // - 'min-h-[40vh]': Ensures it's not *too* small if text is short.
    // - 'md:h-screen': Becomes full screen on desktop.
    // - 'py-10': Adds exactly 40px padding to top and bottom on mobile.
    <section className="relative w-full overflow-hidden font-sans h-auto min-h-[40vh] md:h-screen py-10 md:py-0 flex items-center">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="src/assets/BannerVideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#590d22]/90 to-[#9f1239]/90 z-10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-6">
        
        {/* TEXT READABILITY FIX: 
            Using a Flex column with a 'gap' separates the title from the list cleanly.
        */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium text-white uppercase tracking-tight leading-snug">
            Local IT support <br className="block md:hidden" /> in Reigate Computers, Printers Wi‑Fi, 365
          </h1>
        </div>
  
      </div>
    </section>
  );
};

export default HomeHero;