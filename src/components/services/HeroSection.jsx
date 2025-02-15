import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; 

const HeroSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white mt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#1b151589] bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-10 p-6 rounded-lg">
        <h1 className="md:text-4xl text-xl font-bold text-white">
          {language === "en" ? "Premium Car Wash Services" : "خدمات غسيل السيارات المميزة"}
        </h1>
        <p className="md:text-lg text-sm mt-2">
          {language === "en" ? "Give your car the shine it deserves" : "امنح سيارتك اللمعان الذي تستحقه"}
        </p>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/services/wash car.jpg')" }}
      ></div>
    </section>
  );
};

export default HeroSection;
