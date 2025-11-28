import React from 'react';
import { ChevronDown } from 'lucide-react'; 

const HeroBanner = () => (
  <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
    {/* Video Placeholder - Replace with actual, legal video asset */}
    <div className="absolute inset-0 z-0 bg-gray-900">
      {/* This div simulates the video background and the dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/80 opacity-90"></div>
      
      {/* Visual element simulating the abstract movement */}
      <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full opacity-30 animate-pulse bg-gradient-to-br from-indigo-900/50 to-purple-900/50 mix-blend-screen"></div>
      </div>
    </div>
    
    <div className="relative z-10 text-center max-w-4xl px-4">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-6">
        The only platform <br className="hidden sm:block"/>
        connecting <span className="text-[#8e52e4]">founders</span> & <span className="text-[#8e52e4]">investors</span>.
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Access the largest network of founders, investors, and advisors to raise capital, find deals, and grow your network.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-[#8e52e4] hover:bg-[#a36ce6] text-white text-lg font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-2xl shadow-[#8e52e4]/60 transform hover:scale-[1.02]">
          Request Access
        </button>
        <button className="bg-transparent border border-gray-600 hover:border-white text-white text-lg font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center">
          Learn More <ChevronDown className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  </section>
);

export default HeroBanner;