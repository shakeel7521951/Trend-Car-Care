import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import checkedWhite from "../../assets/home/checked-white.png";
import { Link } from "react-router-dom";

const QualityGranteed = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="bg-red-600 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center sm:w-2/3 mx-auto leading-tight">
        {language === "en" ? "Quality Guaranteed" : "جودة مضمونة"}
      </h1>
      
      <p className="text-lg sm:text-xl text-white text-center mt-4 max-w-xl mx-auto">
        {language === "en"
          ? "At Trend Car Care, we ensure the highest standards of car cleaning with every service we provide."
          : "في تريند كار كير، نضمن أعلى معايير تنظيف السيارات مع كل خدمة نقدمها."}
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <div className="flex items-center gap-4">
          <img src={checkedWhite} alt="Checked White" className="w-6 h-6" />
          <p className="text-white text-lg sm:text-xl">
            {language === "en" ? "100% Hand Washed" : "غسيل يدوي 100٪"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={checkedWhite} alt="Checked White" className="w-6 h-6" />
          <p className="text-white text-lg sm:text-xl">
            {language === "en" ? "Quality Guaranteed" : "جودة مضمونة"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={checkedWhite} alt="Checked White" className="w-6 h-6" />
          <p className="text-white text-lg sm:text-xl">
            {language === "en" ? "SMS When Ready" : "إرسال رسالة عند الجاهزية"}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={checkedWhite} alt="Checked White" className="w-6 h-6" />
          <p className="text-white text-lg sm:text-xl">
            {language === "en" ? "1.1+ Million Cars Cleaned Last Year" : "تم تنظيف أكثر من 1.1 مليون سيارة العام الماضي"}
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="contact-us"
          className="bg-red-600 text-white shadow-lg border-white border-2 hover:bg-white hover:text-red-600 p-4 px-8 rounded-4xl text-lg font-semibold transition-colors duration-300 delay-75"
        >
          {language === "en" ? "Book Online" : "احجز عبر الإنترنت"}
        </Link>
      </div>
    </div>
  );
};

export default QualityGranteed;
