import React from "react";
import logoPic from "../assets/Logo.png";
// import logoPic from "../assets/logo.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube, IoMdTime, IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#123553] flex md:flex-row flex-col items-center gap-8 py-12 px-8 w-full overflow-hidden">
      <div className="section-1 flex flex-col items-center gap-4 text-white">
        <div className="logo">
          <img className="w-40" src={logoPic} alt="not found" />
        </div>
        <div className="heading">
          <h1 className="text-[1.2rem] text-[#FFFFFF]">
            OUTBOX Event Management Co.
          </h1>
        </div>
        <p className="text-[#ADB5C6] text-[1.2rem] text-wrap">
          Our company is 100% Local Qatari based result-oriented and creative
          agency specializes in providing solutions in 360 Event Management and
          digital growth with passionate ideas in the event industry.
        </p>
        <div className="icons flex gap-10 text-white">
          <FaFacebook className="text-[25px] cursor-pointer hover:text-[#51BFFF]" />
          <FaInstagram className="text-[25px] cursor-pointer hover:text-[#51BFFF]" />
          <IoLogoYoutube className="text-[25px] cursor-pointer hover:text-[#51BFFF]" />
          <FaLinkedin className="text-[25px] cursor-pointer hover:text-[#51BFFF]" />
        </div>
      </div>

      <div className="section-2 flex flex-col gap-8">
        <div className="btns flex md:flex-row flex-col gap-8 text-white">
          <button className="text-[1.5rem] text-[#FFFFFF] text-nowrap hover:text-[#2FB2D7] cursor-pointer">
            Home
          </button>
          <button className="text-[1.5rem] text-[#FFFFFF] text-nowrap hover:text-[#2FB2D7] cursor-pointer">
            About Us
          </button>
          <button className="text-[1.5rem] text-[#FFFFFF] text-nowrap hover:text-[#2FB2D7] cursor-pointer">
            Services
          </button>
          <button className="text-[1.5rem] text-[#FFFFFF] text-nowrap hover:text-[#2FB2D7] cursor-pointer">
            Projects
          </button>
        </div>
        <div className="heading text-white">
          <h1 className="text-[1.5rem] text-[#FFFFFF]">Gen In Touch</h1>
        </div>
        <div className="f-icons flex md:flex-row flex-col gap-4">
          <div className="icon-1 flex flex-col gap-4">
            <div className="location flex gap-2 items-center text-white">
              <FaLocationDot className="text-[#62DAFF] md:text-[1.5rem]" />{" "}
              <span className="text-[#ADB5C6] md:text-[1.5rem] text-nowrap">
                2nd floor, City Plaza, Lusail
              </span>
            </div>
            <div className="time flex  gap-2 items-center text-white">
              <IoMdTime className="text-[#62DAFF] md:text-[1.5rem]" />
              <span className="text-[#ADB5C6] md:text-[1.5rem] text-nowrap">
                Sat - Thu
              </span>
              <span className="text-[#ADB5C6] md:text-[1.5rem] text-nowrap">
                09:00 AM - 06:00 PM
              </span>
            </div>
          </div>
          <div className="icon-2 flex flex-col gap-4">
            <div className="call flex gap-2 items-center text-white">
              <IoCallSharp className="text-[#62DAFF] md:text-[1.5rem]" />
              <span className="text-[#ADB5C6] md:text-[1.5rem] text-nowrap">
                +974 44115433
              </span>
            </div>
            <div className="Mail flex gap-2 items-center text-white">
              <IoIosMail className="text-[#62DAFF] md:text-[1.5rem]" />
              <span className="text-[#ADB5C6] md:text-[1.5rem] text-nowrap">
                info@outboxqa.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3 text-white flex flex-col gap-8">
        <div className="btn">
          <button className="bg-white text-black py-2 px-4 rounded hover:scale-88 cursor-pointer">
            Contact Now
          </button>
        </div>
        <div className="map bg-black w-36 h-36">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.594497058!2d71.60760949092463!3d29.37706456662029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738978381879!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

//

export default Footer;
