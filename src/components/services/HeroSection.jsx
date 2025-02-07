import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/services/wash car.jpg')" }}
    >
      <div className="bg-[#181818] bg-opacity-100 p-6 rounded-lg">
        <h1 className="md:text-4xl text-xl font-bold text-red-600">
          Premium Car Wash Services
        </h1>
        <p className="md:text-lg text-sm mt-2">
          Give your car the shine it deserves
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
