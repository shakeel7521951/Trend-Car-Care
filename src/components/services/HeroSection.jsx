import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white mt-20">
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Video Background */}
        <video
          src="/offer/TV VIDEO FINAL 15.mov"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>

        {/* Dark Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 md:bg-black/40"></div>

        {/* Content on top of video */}
        <div
          className={`relative flex flex-col items-center justify-center h-full text-white text-center px-4 ${
            language === "ar" ? "rtl" : ""
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg animate-fade-in">
            {language === "en"
              ? "Elevate Your Car’s Look & Protection"
              : "ارتقِ بمظهر وحماية سيارتك"}
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light drop-shadow-md animate-fade-in delay-300">
            {language === "en"
              ? "Enjoy premium car washing, detailing, and tinting with unmatched quality."
              : "استمتع بخدمات غسيل السيارات والتلميع والتظليل بجودة لا مثيل لها."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
