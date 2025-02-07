import React, { useState, useEffect } from "react";
import PriceData from "./PriceData";
import { Link } from "react-router-dom";

const PricingList = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setData(PriceData);
  }, []);

  const services = [
    "All",
    "Window Film",
    "Polish",
    "Protection",
    "Car Washing",
    "Others",
  ];

  // Filter data based on selected category
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-10 px-4">
      {/* Services Navigation */}
      <div className="max-w-4xl bg-red-700 p-3 rounded-3xl shadow-lg mx-auto">
        <div className="flex justify-evenly items-center">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div
                className={`text-white font-bold p-2 cursor-pointer text-sm sm:text-lg transition-all ${
                  selectedCategory === service ? "underline" : ""
                }`}
                onClick={() => setSelectedCategory(service)}
              >
                {service}
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
              {step.title}
            </h3>

            {/* Pricing Table */}
            <div className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-lg text-gray-800">
              <div className="text-left">
                <p className="font-semibold">{step.suv}</p>
                <p className="text-red-600 font-bold text-lg">
                  {step.priceSuv}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{step.sedan}</p>
                <p className="text-red-600 font-bold text-lg">
                  {step.priceSedan}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className= "w-fit mt-10 mx-auto">
      <Link
        to="/contact-us"
        className="bg-red-600  text-white border-2 border-red-600 px-6 py-3 font-semibold text-xl rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all ease-in-out duration-300 w-fit"
      >
        Get In Touch
      </Link>
      </div>
    </div>
  );
};

export default PricingList;
