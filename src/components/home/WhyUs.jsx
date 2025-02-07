import React from "react";
import frontWash from "../../assets/home/front-wash.jpg";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="w-full sm:w-[90%] mx-auto mt-20 my-12 px-3">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <div className="w-full sm:w-[45%]">
          <img
            src={frontWash}
            alt="Front wash"
            className="w-full h-auto rounded-xl shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
        <div className="w-full sm:w-[55%] flex flex-col justify-center">
          <h1 className="font-extrabold text-4xl sm:text-5xl text-primary mb-6">
            Why Choose Us?
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed ">
            At Trend Car Care, we bring the car wash experience directly to your
            doorstep. Our convenient mobile car wash service is designed to fit
            seamlessly into your busy lifestyle, ensuring that your vehicle gets
            the expert care and attention it deserves, all without disrupting
            your day. We use top-quality products and eco-friendly solutions to
            leave your car sparkling clean, both inside and out, making it look
            brand new every time.
          </p>

          <Link
            to="/contact-us"
            className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-semibold text-xl rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all ease-in-out duration-300 w-fit"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
