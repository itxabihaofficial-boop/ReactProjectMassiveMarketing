import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const text = "Get issues sorted fast with 25+ years of hands‑on experience. Same‑day slots often available";

const TextRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"], // Start animating when top of section hits 80% of viewport
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="min-h-[40vh] flex justify-center bg-white pt-[70px] pb-[70px] px-8 py-14">
      <div className="max-w-1xl mx-auto">
        <p className="text-3xl md:text-7xl sm:text-2xl font-bold leading-tight  flex flex-wrap gap-x-2 gap-y-1">
          {words.map((word, i) => {
            // Calculate range for each word based on total words
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#8a5b5fff", "#bf1e2e"]);

  return (
    <span className="relative">
      {/* Shadow word for spacing */}
      <span className="opacity-0">{children}</span>
      
      {/* Actual animated word */}
      <motion.span style={{ opacity, color }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealSection;