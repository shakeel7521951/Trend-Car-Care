import React from "react";
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
      {/* Image Section */}
      <img
        src={contactDark}
        alt="Contact Dark"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Section */}
      <div className="w-full bg-transparent rounded-lg h-[100%] shadow-2xl top-0 absolute flex flex-col md:flex-row overflow-hidden motion-safe:animate-fadeIn">
        {/* Left Section (Image and Text) */}
        <div className="w-full hidden md:w-[50%] h-[100%] md:flex flex-col justify-center p-8 motion-safe:animate-slideInLeft duration-700">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-red-600 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-700 text-lg">
              Thank you for contacting Star Head Office.
            </p>
            <p className="text-gray-600">
              We are always happy to assist in trying to answer any questions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6 w-full mt-6">
            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-red-600 text-3xl" />
              <p className="text-gray-700 text-[13px]">
                Unit 43, 34-36 Ralph Street, Alexandria <br /> NSW 2015
              </p>
            </div>

            <div className="flex items-center gap-3">
              <TiMessages className="text-red-600 text-2xl" />
              <p className="text-gray-700">PO Box 6212, Alexandria NSW 2015</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-600 text-2xl" />
              <p className="text-gray-700">02 9700 7420</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineLocalPostOffice className="text-red-600 text-2xl" />
              <p className="text-gray-700">
                info@starcarwash.com.au <br />
                <span className="text-sm text-gray-500">
                  (*Admin enquiries only)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-[50%] p-6 bg-white flex flex-col justify-center my-5 mx-14 rounded-xl motion-safe:animate-slideInRight duration-700">
          <div className="space-y-10">
            {/* Full Name */}
            <div className="transition-all duration-500">
              <label className="block text-gray-700 font-semibold">
                {WashArray.labels.fullName}
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full transition-all duration-500">
                <label className="block text-gray-700 font-semibold">
                  {WashArray.labels.email}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2"
                />
              </div>
              <div className="w-full transition-all">
                <label className="block text-gray-700 font-semibold">
                  {WashArray.labels.phoneNumber}
                </label>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="transition-all">
              <label className="block text-gray-700 font-semibold">
                {WashArray.labels.message}
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full border-b border-gray-400 bg-transparent text-gray-800 outline-none focus:border-red-500 transition-all duration-300 p-2 h-24 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-red-600 text-white py-3 text-lg cursor-pointer font-semibold rounded-md hover:bg-white border-2 border-red-600 hover:text-black transition-all duration-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
