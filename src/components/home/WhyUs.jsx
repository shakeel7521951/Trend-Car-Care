import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import frontWash from "../../assets/home/front-wash.jpg";
import { Link } from "react-router-dom";

const WhyUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full sm:w-[90%] mx-auto mt-20 my-12 px-3">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <div className="w-full sm:w-[45%]">
          <img
            src="/services/car-college.jpg"
            alt="Front wash"
            className="h-150 w-200 object-cover rounded-2xl transition-transform transform hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="w-full sm:w-[55%] flex flex-col justify-center">
          <h1 className="font-extrabold text-4xl sm:text-5xl text-primary mb-6">
            {language === "en" ? "Why Choose Us?" : "لماذا تختارنا؟"}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {language === "en"
              ? "At Trend Car Care, we offer a complete range of car services, including professional washing, premium detailing, and high-quality window tinting. Our goal is to provide expert care tailored to your needs, ensuring your vehicle looks and performs at its best. Whether you need a deep clean, paint protection, or enhanced privacy, our team uses top-quality products and eco-friendly solutions to deliver exceptional results right at your convenience."
              : "في ترند كار كير، نقدم مجموعة كاملة من خدمات السيارات، بما في ذلك الغسيل الاحترافي، والتفصيل الفاخر، وتظليل النوافذ عالي الجودة. هدفنا هو تقديم عناية متخصصة تلبي احتياجاتك، مما يضمن أن تبدو سيارتك في أفضل حالاتها وتعمل بكفاءة. سواء كنت بحاجة إلى تنظيف عميق، أو حماية للطلاء، أو تعزيز الخصوصية، فإن فريقنا يستخدم منتجات عالية الجودة وحلولًا صديقة للبيئة لضمان نتائج استثنائية بكل راحة وسهولة."}
          </p>

          <Link
            to="/contact-us"
            className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-semibold text-xl rounded-full hover:bg-white hover:text-red-600 hover:border-red-600 transition-all ease-in-out duration-300 w-fit"
          >
            {language === "en" ? "Get In Touch" : "تواصل معنا"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
