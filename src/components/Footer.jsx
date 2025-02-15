import React, { useContext } from "react";
import { LanguageContext } from "../../src/context/LanguageContext";
import logoPic from "../assets/Logo.png";
import {
  FaInstagram,
  FaLocationDot,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoLogoYoutube, IoMdTime, IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const socialIcons = [
    { icon: FaFacebookF, bgColor: "bg-blue-600", hoverColor: "group-hover:bg-blue-700" },
    { icon: FaInstagram, bgColor: "bg-pink-500", hoverColor: "group-hover:bg-pink-600" },
    { icon: IoLogoYoutube, bgColor: "bg-red-500", hoverColor: "group-hover:bg-red-600" },
    { icon: FaLinkedinIn, bgColor: "bg-blue-700", hoverColor: "group-hover:bg-blue-800" },
  ];

  return (
    <div className="bg-[#1A1A1A]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 py-12 px-8 w-full">

        {/* Logo & About Section */}
        <div className="w-[100%] sm:w-[30%] flex flex-col items-center md:items-start text-white gap-4 text-center md:text-left max-w-sm">
          <img className="w-40" src={logoPic} alt="Outbox Logo" />
          <h1 className="text-xl font-bold">
            {language === "en" ? "OUTBOX Event Management Co." : "شركة اوت بوكس ​​لإدارة الفعاليات"}
          </h1>
          <p className="text-[#ADB5C6] text-sm">
            {language === "en"
              ? "Our company is a 100% Local Qatari-based result-oriented agency specializing in 360° Event Management and digital growth with innovative ideas."
              : "شركتنا هي وكالة محلية قطرية موجهة نحو النتائج متخصصة في إدارة الفعاليات 360° والنمو الرقمي مع أفكار مبتكرة."
            }
          </p>
          <div className="flex gap-6 mt-2">
            {socialIcons.map(({ icon: Icon, bgColor, hoverColor }, index) => (
              <button
                key={index}
                className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full shadow-md group transition-all duration-300 cursor-pointer"
              >
                <Icon className="relative z-10 text-white text-[22px] transition-all duration-300 group-hover:text-white" />
                <div className={`absolute top-full left-0 w-full h-full rounded-full ${bgColor} z-0 transition-all duration-500 ${hoverColor} group-hover:top-0`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation & Contact Section */}
        <div className="w-[100%] sm:w-[40%] flex flex-col gap-8 sm:mt-14 text-white">
          {/* Navigation Links */}
          <div className="flex md:flex-row flex-col gap-6 text-lg font-medium">
            <Link to="/" className="hover:text-red-600 transition">
              {language === "en" ? "Home" : "الرئيسية"}
            </Link>
            <Link to="/about" className="hover:text-red-600 transition">
              {language === "en" ? "About Us" : "عن الشركة"}
            </Link>
            <Link to="/services" className="hover:text-red-600 transition">
              {language === "en" ? "Services" : "الخدمات"}
            </Link>
            <Link to="/pricing" className="hover:text-red-600 transition">
              {language === "en" ? "Pricing" : "التسعير"}
            </Link>
          </div>

          {/* Contact Information */}
          <h2 className="text-xl font-semibold">
            {language === "en" ? "Get In Touch" : "اتصل بنا"}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <FaLocationDot className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">
                {language === "en" ? "2nd floor, City Plaza, Lusail" : "الطابق الثاني، سيتي بلازا، لوسيل"}
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <IoMdTime className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">
                {language === "en" ? "Sat - Thu, 09:00 AM - 06:00 PM" : "السبت - الخميس، من 09:00 صباحًا إلى 06:00 مساءً"}
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <IoCallSharp className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">+974 44115433</span>
            </div>
            <div className="flex gap-3 items-center">
              <IoIosMail className="text-red-600 text-xl" />
              <span className="text-[#ADB5C6] text-base">info@outboxqa.com</span>
            </div>
          </div>
        </div>

        {/* Call to Action & Map */}
        <div className="w-[100%] sm:w-[30%] flex flex-col gap-6 items-center md:items-start sm:mt-14">
          <Link
            to="/contact-us"
            className="bg-red-600 text-white px-4 py-2 font-semibold text-lg rounded-full hover:bg-white hover:text-red-600 border-2 border-red-600 transition-all"
          >
            {language === "en" ? "Get In Touch" : "اتصل بنا"}
          </Link>
          <div className="w-full shadow-[#bb7c7c31] h-48 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846227.3214989447!2d50.2640790587813!3d25.340709073309977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2s!4v1739000991465!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <hr className="text-white mb-5" />
      <p className="text-center text-white pb-2">
        {new Date().getFullYear()} {language === 'en'? "All Rights Reserved By" : "جميع الحقوق محفوظة بواسطة"} {" "}
        <span className="text-red-600">
          {language === "en" ? "Trend Car Care" : "تريند كار كير"}
        </span>
      </p>
    </div>
  );
};

export default Footer;
