import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-6 rounded-lg">
        <h1 className="md:text-4xl text-xl font-bold text-white ">
          Premium Car Wash Services
        </h1>
        <p className="md:text-lg text-sm mt-2">
          Give your car the shine it deserves
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
