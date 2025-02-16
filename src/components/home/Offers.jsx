import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const Offers = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full">
      {/* Video Section */}
      <div className="w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <video
          src="/offer/JETTOUR REEL 3-2.mp4"
          muted
          loop
          autoPlay
          preload="metadata"
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* Text Content Below Video */}
      <div className="text-center px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          {language === "en"
            ? "Premium Car Services at Your Doorstep"
            : "خدمات سيارات فاخرة تصل إليك"}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          {language === "en"
            ? "Experience expert car detailing, washing, and tinting with unmatched quality."
            : "استمتع بخدمات العناية بالسيارات، الغسيل، والتظليل بجودة لا مثيل لها."}
        </p>
        <Link to="/contact-us">
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold rounded-full shadow-lg">
            {language === "en" ? "Book Your Service" : "احجز خدمتك"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
