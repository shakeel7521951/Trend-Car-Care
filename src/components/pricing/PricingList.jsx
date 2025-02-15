import { useState, useEffect, useContext } from "react";
import PriceData from "./PriceData";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; // Assuming this is how you manage language context

const PricingList = () => {
  const { language } = useContext(LanguageContext); // Get language from context
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(language === "en" ? "All" : "الكل"); // Adjusted initialization

  useEffect(() => {
    setData(PriceData); // Set the price data on initial load
  }, []);

  // Define services categories in both English and Arabic
  const services = [
    { en: "All", ar: "الكل" },
    { en: "Window Film", ar: "فيلم نوافذ" },
    { en: "Polish", ar: "تلميع" },
    { en: "Protection", ar: "حماية" },
    { en: "Car Washing", ar: "غسيل السيارات" },
    { en: "Others", ar: "أخرى" },
  ];

  // Function to get the correct category name based on selected language
  const getTranslatedCategory = (category) => {
    return language === "en" ? category.en : category.ar;
  };

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "All" || selectedCategory === "الكل"
      ? data
      : data.filter(
          (item) => item.category[language] === selectedCategory
        );

  return (
    <div className="mt-10 sm:px-4">
      {/* Services Navigation */}
      <div className="max-w-4xl bg-red-700 p-3 rounded-3xl shadow-lg mx-auto overflow-auto text-nowrap">
        <div className="flex justify-evenly items-center">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div
                className={`text-white font-bold p-2 cursor-pointer text-sm sm:text-lg transition-all ${selectedCategory === getTranslatedCategory(service) ? "underline" : ""}`}
                onClick={() => setSelectedCategory(getTranslatedCategory(service))}
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
            className="flex flex-col items-center text-center min-w-[320px] bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            {/* Step Number */}
            <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white font-bold text-lg rounded-full shadow-md mb-4">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              {step.title[language]}
            </h3>

            {/* Pricing Table */}
            <div className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-lg text-gray-800">
              <div className="text-left">
                <p className="font-semibold">{step.suv[language]}</p>
                <p className="text-red-600 font-bold text-lg">{step.priceSuv[language]}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{step.sedan[language]}</p>
                <p className="text-red-600 font-bold text-lg">{step.priceSedan[language]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-fit my-10 mx-auto">
        <Link
          to="/contact-us"
          className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-semibold text-xl rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all ease-in-out duration-300 w-fit"
        >
          {language === "en" ? "Get In Touch" : "تواصل معنا"}
        </Link>
      </div>
    </div>
  );
};

export default PricingList;
