import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ali Fawze",
    role: "Founder",
    text: "SolutionBox is an outstanding platform that makes networking between startups and advisors seamless and efficient. As a founder, I found the tools and insights incredibly helpful in preparing for investment rounds and connecting with the right people.",
    initial: "AF"
  },
  {
    id: 2,
    name: "Jagjit Banwait",
    role: "Board Advisor",
    text: "I've had – and continue to have – a fantastic experience with SolutionBox. The course was insightful and well-structured, providing valuable knowledge, and the networking events have been excellent.",
    initial: "JB"
  },
  {
    id: 3,
    name: "Deborah Hall",
    role: "Fractional Executive",
    text: "Marko sorted our Wi‑Fi and printers in one visit. Night and day.",
    initial: "DH"
  },
  {
    id: 4,
    name: "Denise Creisson",
    role: "Founder",
    text: "Clear advice, fair price, zero jargon.” — <em>SMB owner, Redhill",
    initial: "DC"
  }
];

const Testimonial = () => {
  return (
    <div className="relative w-full bg-[#e97e3a] font-sans py-20">
      
      {/* --- Sticky Header Section --- */}
      {/* sticky top-20 ensures it stays pinned under the main navbar */}
      <div className="sticky top-20 z-10 flex flex-col items-center justify-start pb-10">
        
        

        {/* Heading */}
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-[#bf1e2e] leading-tight tracking-tight">
            Hear from our <br />
            <span className="text-white">customers</span>
          </h2>
          
          {/* Trustpilot Mock */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-6 h-6 text-white fill-white" />
              <span className="text-xl font-bold text-white ml-1">Trustpilot</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- Scrolling Cards Container --- */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-12">
        {testimonials.map((card, index) => {
          return (
            <TestimonialCard 
              key={card.id} 
              data={card} 
              index={index} 
            />
          );
        })}
      </div>

    </div>
  );
};

const TestimonialCard = ({ data, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      viewport={{ once: false, margin: "-50px" }}
      className="sticky bg-white rounded-[30px] p-8 md:p-10 shadow-xl"
      style={{
        // KEY CHANGE: This 'top' value determines where the cards stack.
        // 350px pushes them down so they sit BELOW the heading.
        top: `${350 + index * 20}px`, 
        
        // Subtle rotation for the stack effect
        rotate: index % 2 === 0 ? 1 : -1,
        zIndex: index + 20, // Ensure they layer correctly
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#ff0040]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
             <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900">{data.name}</h4>
          <p className="text-sm text-gray-500 font-medium">{data.role}</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed font-medium">
        "{data.text}"
      </p>
    </motion.div>
  );
};

export default Testimonial;