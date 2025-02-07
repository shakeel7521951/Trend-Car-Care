import React from "react";
import logoPic from "../assets/Logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";
import { IoLogoYoutube, IoMdTime, IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className=" flex flex-col md:flex-row justify-between items-center md:items-start gap-12 py-12 px-8 w-full">
        {/* Logo & About Section */}
        <div className="flex flex-col items-center md:items-start text-white gap-4 text-center md:text-left max-w-sm">
          <img className="w-40" src={logoPic} alt="Outbox Logo" />
          <h1 className="text-xl font-bold">OUTBOX Event Management Co.</h1>
          <p className="text-[#ADB5C6] text-sm">
            Our company is a 100% Local Qatari-based result-oriented agency
            specializing in 360° Event Management and digital growth with
            innovative ideas.
          </p>
          <div className="flex gap-6 mt-2">
            <FaFacebook className="text-[25px] cursor-pointer hover:text-red-600 transition" />
            <FaInstagram className="text-[25px] cursor-pointer hover:text-red-600 transition" />
            <IoLogoYoutube className="text-[25px] cursor-pointer hover:text-red-600 transition" />
            <FaLinkedin className="text-[25px] cursor-pointer hover:text-red-600 transition" />
          </div>
        </div>

        {/* Navigation & Contact Section */}
        <div className="flex flex-col gap-8 sm:mt-14 text-white">
          {/* Navigation Links */}
          <div className="flex md:flex-row flex-col gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-600 transition">
              About Us
            </Link>
            <Link to="/services" className="hover:text-red-600 transition">
              Services
            </Link>
            <Link to="/projects" className="hover:text-red-600 transition">
              Projects
            </Link>
          </div>

          {/* Contact Information */}
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <FaLocationDot className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">
                2nd floor, City Plaza, Lusail
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <IoMdTime className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">
                Sat - Thu, 09:00 AM - 06:00 PM
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <IoCallSharp className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">+974 44115433</span>
            </div>
            <div className="flex gap-3 items-center">
              <IoIosMail className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">
                info@outboxqa.com
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action & Map */}
        <div className="flex flex-col gap-6 items-center md:items-start sm:mt-14">
          <Link
            to="/contact-us"
            className="bg-red-600 text-white px-4 py-2 font-semibold text-lg rounded-full hover:bg-white hover:text-red-600 border-2 border-red-600 transition-all"
          >
            Get In Touch
          </Link>
          <div className="w-48 h-48 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.594497058!2d71.60760949092463!3d29.37706456662029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738978381879!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="text-white mb-5"/>
      <p className="text-center text-white pb-2">
        {new Date().getFullYear()} All Rights Reserved By
        <span className="text-red-600"> Trend Car Care</span>
      </p>
    </div>
  );
};

export default Footer;
