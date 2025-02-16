import { useState, useEffect, useContext } from "react";
import PriceData from "./PriceData";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; // Assuming this is how you manage language context

const PricingList = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    language === "en" ? "All" : "الكل"
  );

  useEffect(() => {
    setData(PriceData);
  }, []);

  const services = [
    { en: "All", ar: "الكل" },
    { en: "Window Film", ar: "فيلم نوافذ" },
    { en: "Polish", ar: "تلميع" },
    { en: "Protection", ar: "حماية" },
    { en: "Car Washing", ar: "غسيل السيارات" },
    { en: "Others", ar: "أخرى" },
  ];

  const getTranslatedCategory = (category) =>
    language === "en" ? category.en : category.ar;

  const filteredData =
    selectedCategory === "All" || selectedCategory === "الكل"
      ? data
      : data.filter((item) => item.category[language] === selectedCategory);

  return (
    <div className="mt-10 sm:px-4 bg-white text-gray-200 min-h-screen py-10">
      {/* Services Navigation */}
      <div className="max-w-4xl bg-gray-800 p-3 rounded-3xl shadow-lg mx-auto overflow-auto text-nowrap">
        <div className="flex justify-evenly items-center">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div
                className={`text-gray-300 font-bold p-2 cursor-pointer text-sm sm:text-lg transition-all duration-300 relative 
                  ${
                    selectedCategory === getTranslatedCategory(service)
                      ? "text-red-500 border-b-2 border-red-500"
                      : ""
                  }
                  hover:text-red-400 hover:scale-105`}
                onClick={() =>
                  setSelectedCategory(getTranslatedCategory(service))
                }
              >
                {getTranslatedCategory(service)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {filteredData.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center min-w-[320px] bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 
            hover:shadow-red-600 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          >
            {/* Step Number */}
            <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white font-bold text-lg rounded-full shadow-md mb-4 animate-bounce">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-4 transition duration-300 hover:text-red-400">
              {step.title[language]}
            </h3>

            {/* Pricing Table */}
            <div className="w-full flex justify-between items-center bg-gray-700 p-3 rounded-lg text-gray-300 shadow-md hover:shadow-red-500 transition-all duration-300">
              <div className="text-left">
                <p className="font-semibold">{step.suv[language]}</p>
                <p className="text-red-400 font-bold text-lg">
                  {step.priceSuv[language]}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{step.sedan[language]}</p>
                <p className="text-red-400 font-bold text-lg">
                  {step.priceSedan[language]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-fit my-10 mx-auto">
        <Link
          to="/contact-us"
          className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-semibold text-xl rounded-full 
          hover:bg-gray-900 hover:text-red-400 hover:border-red-400 transition-all duration-300 ease-in-out shadow-md
          hover:scale-105 hover:shadow-red-600"
        >
          {language === "en" ? "Get In Touch" : "تواصل معنا"}
        </Link>
      </div>
    </div>
  );
};

export default PricingList;
