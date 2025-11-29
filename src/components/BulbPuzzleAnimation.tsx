import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Bulb1 from "../assets/bulb 1.png";
import Bulb2 from "../assets/bulb 2.png";
import Bulb3 from "../assets/bulb 3.png";
import Bulb4 from "../assets/bulb 4.png";
import Bulb5 from "../assets/bulb 5.png";
import Bulb6 from "../assets/bulb 6.png";
import Bulb7 from "../assets/bulb 7.png";
import Bulb8 from "../assets/bulb 8.png";
import Bulb9 from "../assets/bulb 9.png";
import bulbBg from "../assets/bulb bg.png";
import phoneBanner from "../assets/phone-banner.png";

const BulbBannerAnimation = () => {
  const [key, setKey] = useState(0);

  // Cycle the animation: 6 seconds (4s wait + 2s animation)
  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[750px] flex flex-col items-center justify-center overflow-hidden relative pb-50">
      
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url('${bulbBg}')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>



 {/* Heading at top of banner */}
  <motion.h1
    // UPDATED: Added 'hidden md:block'
    className="hidden md:block absolute top-10 w-full text-center text-4xl md:text-7xl font-bold text-[#bf1e2e;] z-20"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    IT SOLUTIONS WITH SOUL
  </motion.h1>


      <div className="relative z-10 w-full h-full flex align-center justify-center p-10 md:mt-24 mt-10 -translate-x-7 md:translate-x-0">

        {/* Pass key to force restart of animation */}
        <PuzzleBulb key={key} />
      </div>

      {/* ⭐ Right Corner Fade-In Image (correct placement) */}
      <motion.img
        src={phoneBanner}
        alt="Right Corner"
        className="absolute z-30 hidden md:block"
        style={{
          width: "470px",      
          right: "-50px",        
          bottom: "-50px",     
          pointerEvents: "none",
          maxWidth: "none"     
        }}
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />

    </div>
  );
};

// --- PUZZLE PIECE CONFIGURATION ---
const piecesConfig = [
  { id: 2, src: Bulb2, width: '86%', top: '5%', left: '24%', z: 20,
    initial: { y: -200, rotate: -10 } },
  { id: 1, src: Bulb1, width: '32%', top: '13%', left: '4%', z: 15,
    initial: { x: -200, rotate: -45 } },
  { id: 5, src: Bulb5, width: '32%', top: '31%', right: '-14%', z: 15,
    initial: { x: 200, rotate: 45 } },
  { id: 3, src: Bulb3, width: '35%', top: '31%', left: '24%', z: 12,
    initial: { x: -100, y: -50, rotate: -90 } },
  { id: 4, src: Bulb4, width: '45%', top: '22%', left: '60%', z: 12,
    initial: { x: 100, y: -50, rotate: 180 } },
  { id: 7, src: Bulb7, width: '34%', top: '59%', left: '24%', z: 12,
    initial: { x: -100, y: 50, rotate: 90 } },
  { id: 6, src: Bulb6, width: '33%', top: '59%', left: '60%', z: 12,
    initial: { x: 100, y: 50, rotate: 135 } },
  { id: 8, src: Bulb8, width: '69%', top: '87%', left: '25%', z: 18,
    initial: { y: 150, rotate: 20 } },
  { id: 9, src: Bulb9, width: '94%', top: '108%', left: '14%', z: 5,
    initial: { y: 200, rotate: 0 } },
];

const PuzzleBulb = () => {
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[400px]">
     
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isAssembled ? { opacity: 0.5, scale: 1.1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-yellow-400 blur-3xl rounded-full z-0 pointer-events-none"
        style={{ top: '25%', bottom: '30%', left: '25%', right: '25%' }}
      />

    
      {piecesConfig.map((piece) => (
        <motion.img
          key={piece.id}
          src={piece.src}
          alt={`Puzzle Piece ${piece.id}`}
          className="absolute object-contain drop-shadow-lg"
          style={{
            width: piece.width,
            top: piece.top,
            left: piece.left,
            right: piece.right,
            zIndex: piece.z,
          }}
          initial={{ 
            opacity: 0, 
            x: piece.initial.x || 0, 
            y: piece.initial.y || 0, 
            rotate: piece.initial.rotate || 0,
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotate: 0,
            scale: 1 
          }}
          transition={{
            type: "spring",
            damping: 14,
            stiffness: 45,
            duration: 1.2,
            delay: 0.1 * piece.id
          }}
        />
      ))}

      
      {isAssembled && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-[35%] left-[35%] w-4 h-4 bg-white rounded-full blur-[1px]"
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-[45%] right-[35%] w-2 h-2 bg-yellow-100 rounded-full blur-[1px]"
          />
        </div>
      )}
    </div>
  );
};

export default BulbBannerAnimation;





