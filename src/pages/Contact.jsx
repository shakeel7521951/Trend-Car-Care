import { IoLocationSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import contactDark from "../assets/contact-dark.jpg";

const WashArray = {
  imgSrc:
    "https://images.pexels.com/photos/4870696/pexels-photo-4870696.jpeg?auto=compress&cs=tinysrgb&w=600",
  labels: {
    fullName: "FULL NAME",
    email: "EMAIL",
    phoneNumber: "PHONE NUMBER",
    message: "MESSAGE",
  },
};

export default function WashContact() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center p-4 relative">
      {/* Background Image */}
      <img
        src={contactDark}
        alt="Contact Dark"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Section */}
      <div className="w-full bg-transparent rounded-lg  absolute flex flex-col md:flex-row overflow-hidden motion-safe:animate-fadeIn">
        {/* Left Section (Hidden on Small Screens) */}
        <div className="hidden md:flex w-full md:w-[50%] h-auto flex-col justify-center p-6 md:p-8 motion-safe:animate-slideInLeft duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Thank you for contacting Star Head Office.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            We are always happy to assist in answering any questions.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4 md:space-y-6 w-full mt-4 md:mt-6">
            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-red-600 text-2xl md:text-3xl" />
              <p className="text-gray-700 text-sm md:text-base">
                Unit 43, 34-36 Ralph Street, Alexandria <br /> NSW 2015
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TiMessages className="text-red-600 text-xl md:text-2xl" />
              <p className="text-gray-700 text-sm md:text-base">
                PO Box 6212, Alexandria NSW 2015
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-red-600 text-xl md:text-2xl" />
              <p className="text-gray-700 text-sm md:text-base">02 9700 7420</p>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineLocalPostOffice className="text-red-600 text-xl md:text-2xl" />
              <p className="text-gray-700 text-sm md:text-base">
                info@starcarwash.com.au <br />
                <span className="text-xs text-gray-500">
                  (*Admin enquiries only)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-[50%]  p-6 md:p-8 sm:mx-14 bg-white flex flex-col justify-center rounded-xl motion-safe:animate-slideInRight duration-700">
          <div className="space-y-6 md:space-y-10">
            {/* Full Name */}
            <div className="transition-all duration-500">
              <label className="block text-gray-700 font-semibold text-sm md:text-base">
                {WashArray.labels.fullName}
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2 text-sm md:text-base"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full transition-all duration-500">
                <label className="block text-gray-700 font-semibold text-sm md:text-base">
                  {WashArray.labels.email}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2 text-sm md:text-base"
                />
              </div>
              <div className="w-full transition-all">
                <label className="block text-gray-700 font-semibold text-sm md:text-base">
                  {WashArray.labels.phoneNumber}
                </label>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Message */}
            <div className="transition-all">
              <label className="block text-gray-700 font-semibold text-sm md:text-base">
                {WashArray.labels.message}
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2 h-24 resize-none text-sm md:text-base"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-red-600 text-white py-2 md:py-3 text-sm md:text-lg cursor-pointer font-semibold rounded-md hover:bg-white border-2 border-red-600 hover:text-black transition-all duration-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
