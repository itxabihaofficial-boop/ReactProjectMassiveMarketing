import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import BulbImage from "../assets/Bulb.png";

const expertsData = [
  {
    id: 1,
    title: "Creating business solutions with soul",
    description: "From branding to accounting. All custom made. You can have your own highly productive virtual depertments at a fraction of standard cost. Try our service and become a corporate winner with a tiny operating cost. We are here just for you and only one click away!",
    image: BulbImage, 
  },
  {
    id: 2,
    title: "About Solutionbox",
    description: "I’m Marko — 25+ years in networks & support for MSPs, hosting and enterprise (including airlines). Now I help local businesses get reliable IT without the faff: straight answers, tidy work, and options that fit your budget.",
    image: BulbImage, 
  }
];

const ExpertScrollSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.6) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-auto md:h-[200vh] bg-[#f5f5f5] font-sans">
      
      {/* Sticky Container */}
      {/* UPDATED: Removed 'min-h' completely. Added 'py-10' only for mobile wrapper spacing. */}
      <div className="sticky top-0 -mb-[66px] h-auto md:h-screen flex items-center overflow-hidden bg-[#f5f5f5] py-10 md:py-0">
        
        {/* UPDATED: 
            1. Changed 'gap-12' to 'gap-8' (Closer together).
            2. Changed 'py-10' to 'py-0' (Removes extra internal whitespace).
        */}
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full py-0">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="relative flex flex-col justify-center h-full pl-0 md:pl-4">

            {/* Number Indicators */}
            <div className="absolute -top-2 md:top-24 right-0 flex flex-col gap-4">
              {expertsData.map((item, idx) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 cursor-pointer
                    ${idx === activeIndex 
                      ? "bg-[#e97e3a] border-[#e97e3a] text-white scale-110" 
                      : "bg-transparent border-gray-300 text-gray-400"
                    }`}
                >
                  0{item.id}
                </div>
              ))}
            </div>

            {/* Headings */}
            <div className="grid grid-cols-1 mb-4 mt-6 md:mt-20">
              {expertsData.map((item, idx) => (
                <motion.h2 
                  key={item.id}
                  className="col-start-1 row-start-1 text-2xl md:text-5xl lg:text-5xl font-bold transition-all duration-500 pr-10 md:pr-0"
                  initial={false}
                  animate={{
                    color: idx === activeIndex ? "#bf1e2e" : "#e5e7eb", 
                    opacity: idx === activeIndex ? 1 : 0, 
                    filter: idx === activeIndex ? "blur(0px)" : "blur(10px)",
                    y: idx === activeIndex ? 0 : 20, 
                    pointerEvents: idx === activeIndex ? "auto" : "none",
                    display: idx === activeIndex ? "block" : "none",
                  }}
                >
                  {item.title}
                </motion.h2>
              ))}
            </div>

            {/* Description */}
            <div className="grid grid-cols-1 relative">
              {expertsData.map((item, idx) => (
                <motion.p
                  key={item.id}
                  className="col-start-1 row-start-1 text-sm md:text-lg text-gray-600 leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: idx === activeIndex ? 1 : 0,
                    y: idx === activeIndex ? 0 : 20, 
                    pointerEvents: idx === activeIndex ? "auto" : "none",
                    display: idx === activeIndex ? "block" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {item.description}
                </motion.p>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Images --- */}
          {/* UPDATED: Reduced height to 'h-[280px]' on mobile to be more compact */}
          <div className="relative h-[280px] md:h-[500px] lg:h-[600px] w-full block rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white">
             {expertsData.map((item, idx) => (
               <motion.div
                 key={item.id}
                 className="absolute inset-0 w-full h-full bg-white"
                 initial={{ opacity: 0 }}
                 animate={{ 
                   opacity: idx === activeIndex ? 1 : 0,
                   scale: idx === activeIndex ? 1 : 1.05
                 }}
                 transition={{ duration: 0.5 }} 
               >
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-contain"
                 />
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertScrollSection;