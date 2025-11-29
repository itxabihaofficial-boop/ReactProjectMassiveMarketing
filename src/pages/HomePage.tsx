import React from "react";
import HomeHero from "../components/HomeHero";
import BulbBannerAnimation from "@/components/BulbPuzzleAnimation";
import TextRevealSection from "../components/TextRevealSection";
import Footer from "../components/Footer";
import ExpertScrollSection from "@/components/ExpertScrollSection";
import TextStackSection from "@/components/TextStackSection";
import ScrollStack from "@/components/ScrollStack";
import StatsRevealSection from "@/components/StatsRevealSection";
import Testimonial from "@/components/Testimonial";


const HomePage = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <BulbBannerAnimation />
      <HomeHero />
      <TextRevealSection />
      <section id="services-section"> 
      <TextStackSection />
      </section>
      <ExpertScrollSection />
      <ScrollStack children={undefined} />
      <Testimonial />
    </div>
  );
};

export default HomePage;