import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full h-[70vh] sm:h-[90vh] overflow-hidden mt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home/TREND PROGRAM 12.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex justify-center items-center text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold w-[85%] sm:w-[75%] md:w-[60%] lg:w-[80%] leading-none">
          {language === "en"
            ? "Professional car care solutions to keep your vehicle in top condition."
            : "حلول احترافية للعناية بالسيارات للحفاظ على سيارتك في أفضل حالة"}
        </h1>
      </div>
    </div>
  );
};

export default Header;
