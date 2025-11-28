import React from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    id: 1,
    left: { value: "100+", label: "Companies Built" },
    right: { value: "100%", label: "Custmer Satisfaction" },
  },
  {
    id: 2,
    left: { value: "5,000+", label: "Global Members" },
    right: { value: "25,000", label: "Connections Facilitated" },
  },
  {
    id: 3,
    left: { value: "4.8", label: "Average Hires Per Startup" },
    right: null, 
  },
];

const StatsRevealSection = () => {
  return (
    <section className="relative w-full bg-white">
    
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center max-w-4xl px-6 pointer-events-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#bf1e2e] mb-8 leading-tight tracking-tight">
            Choose on‑site or remote, <br /> tell me what’s up, <br />
            and I’ll confirm your slot.
          </h2>
          
          <button className="bg-[#e97e3a] hover:bg-[#bf1e2e] text-[#ffffff] text-slate-900 font-medium text-lg py-4 px-10 rounded-lg transition-transform hover:scale-105 shadow-lg">
            Book a Visit
          </button>
        </div>
      </div>

      {/* SCROLLING STATS */}
      <div className="relative w-full -mt-[100vh] pb-[20vh]">
        {statsData.map((stat, index) => (
          <div 
            key={stat.id} 
            // CHANGED: Added 'gap-12' or 'gap-24' to force spacing if screen shrinks
            className="h-screen w-full flex items-center justify-between px-6 md:px-20 max-w-8xl mx-auto gap-20"
          >
            {/* Left Stat: Constrained width to prevent overlap */}
            <div className={`flex-1 flex justify-start transition-opacity duration-500 ${stat.left ? 'opacity-100' : 'opacity-0'}`}>
              {stat.left && (
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-200px" }}
                  transition={{ duration: 0.8 }}
                  className="max-w-xs" // Keeps it compact
                >
                  <span className="text-7xl md:text-9xl font-bold text-[#e97e3a] tracking-tighter block">
                    {stat.left.value}
                  </span>
                  <div className="h-px w-full bg-gray-300 my-4"></div>
                  <span className="text-lg md:text-xl text-gray-600 font-medium">
                    {stat.left.label}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Spacer for Center Content (Optional but safer) */}
            <div className="w-1/3 hidden lg:block"></div>

            {/* Right Stat: Constrained width and delayed appearance */}
            <div className={`flex-1 flex justify-end mt-64 transition-opacity duration-500 ${stat.right ? 'opacity-100' : 'opacity-0'}`}>
              {stat.right && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-200px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-xs text-right" // Aligns text to right for better balance
                >
                  <span className="text-7xl md:text-9xl font-bold text-[#e97e3a] tracking-tighter block">
                    {stat.right.value}
                  </span>
                  <div className="h-px w-full bg-gray-300 my-4"></div>
                  <span className="text-lg md:text-xl text-gray-600 font-medium">
                    {stat.right.label}
                  </span>
                </motion.div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default StatsRevealSection;