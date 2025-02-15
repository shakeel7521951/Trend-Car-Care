import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const ContactSection = () => {
  const { language } = useContext(LanguageContext); 

  return (
    <section className="py-16 bg-red-600 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        {language === "en" ? "Get in Touch" : "تواصل معنا"}
      </h2>
      <p className="mt-2 text-white">
        {language === "en"
          ? "Book your appointment now or ask any questions."
          : "احجز موعدك الآن أو اطرح أي أسئلة."}
      </p>
      <button className="mt-4 bg-gray-100 text-red-600 py-2 px-6 rounded-lg hover:bg-gray-200 cursor-pointer">
        {language === "en" ? "Contact Us" : "اتصل بنا"}
      </button>
    </section>
  );
};

export default ContactSection;
