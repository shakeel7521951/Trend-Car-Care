import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaChevronUp, FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaTags, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../../src/context/LanguageContext";

import logoPic from "../assets/Logo.png";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [showLanguages, setShowLanguages] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageSelect = (lang) => {
    if ((lang === "English" && language === "ar") || (lang === "Arabic" && language === "en")) {
      toggleLanguage(); 
    }
    setShowLanguages(false);
  };

  const menuItems = [
    { id: 1, path: "/", en: "Home", ar: "الرئيسية" },
    { id: 2, path: "/about", en: "About", ar: "معلومات عنا" },
    { id: 3, path: "/services", en: "Services", ar: "خدمات" },
    { id: 4, path: "/pricing", en: "Pricing", ar: "التسعير" },
    { id: 5, path: "/contact-us", en: "Contact", ar: "اتصل بنا" },
  ];

  return (
    <nav className="bg-[#1A1A1A] fixed w-full z-20 top-0 start-0 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="w-[20%] flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoPic} className="w-28 h-12 object-cover" alt="Car Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="w-[70%] justify-between md:flex items-center space-x-8 hidden">
          <ul className="flex space-x-8 font-bold text-lg text-white">
            {menuItems.map((item) => (
              <li key={item.id} className="flex items-center space-x-2">
                <Link to={item.path} className="hover:text-[#E82129]">
                  {language === "en" ? item.en : item.ar}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Selector for Large Screens */}
          <div className="w-[20%] flex justify-end relative">
            <button
              type="button"
              className="flex items-center text-white border-2 border-red-600 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {language === "en" ? "English" : "Arabic"} 
              {showLanguages ? <FaChevronUp className="ml-3" /> : <FaAngleDown className="ml-3" />}
            </button>
            {showLanguages && (
              <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg p-2 w-32">
                <p className="cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleLanguageSelect("English")}>
                  English
                </p>
                <p className="cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleLanguageSelect("Arabic")}>
                  Arabic
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A1A] h-[100vh] absolute w-[50%] top-16 right-0 p-4 shadow-lg transform transition-transform duration-700 ease-in-out">
          <ul className="flex flex-col space-y-4 font-bold text-lg text-center text-white">
            {menuItems.map((item) => (
              <li key={item.id} className="flex items-center justify-center space-x-2">
                <Link to={item.path} className="block py-2 px-3 hover:text-[#E82129]" onClick={() => setMenuOpen(false)}>
                  {language === "en" ? item.en : item.ar}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Selector for Mobile */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="flex items-center text-white border-2 border-red-600 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {language === "en" ? "English" : "Arabic"} 
              {showLanguages ? <FaChevronUp className="ml-2" /> : <FaAngleDown className="ml-2" />}
            </button>
          </div>

          {showLanguages && (
            <div className="bg-white shadow-md rounded-lg mt-2 p-2 text-center">
              <p className="cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleLanguageSelect("English")}>
                English
              </p>
              <p className="cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleLanguageSelect("Arabic")}>
                Arabic
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
