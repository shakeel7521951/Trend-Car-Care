import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import REGULAR_CARE from "../../assets/home/REGULAR_CARE.png";
import LOYALTY_BOOKS from "../../assets/home/LOYALTY_BOOKS.png";
import ONLINE_BOOKING_SPECIAL from "../../assets/home/ONLINE_BOOKING_SPECIAL.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const contactOptions = [
    {
      image: REGULAR_CARE,
      title: language === "en" ? "Customer Feedback" : "تعليقات العملاء",
      description:
        language === "en"
          ? "If you have any feedback or suggestions for us, please don't hesitate to get in touch."
          : "إذا كان لديك أي ملاحظات أو اقتراحات لنا، لا تتردد في التواصل معنا.",
      link: "#", // Add the actual link to the offer page
    },
    {
      image: LOYALTY_BOOKS,
      title: language === "en" ? "Loyalty Books" : "كتب الولاء",
      description:
        language === "en"
          ? "Get exclusive discounts when you purchase our Loyalty Book. Perfect for regular visits!"
          : "احصل على خصومات حصرية عند شراء كتاب الولاء لدينا. مثالي للزيارات المنتظمة!",
      link: "#", // Add the actual link to the offer page
    },
    {
      image: ONLINE_BOOKING_SPECIAL,
      title:
        language === "en" ? "Online Booking Special" : "عرض الحجز عبر الإنترنت",
      description:
        language === "en"
          ? "Book your car wash online and enjoy 20% off your first booking with us!"
          : "احجز غسيل سيارتك عبر الإنترنت واستمتع بخصم 20% على أول حجز لك معنا!",
      link: "#", // Add the actual link to the offer page
    },
  ];

  return (
    <div className="my-16 px-4 sm:px-7">
      <p className="text-center text-lg font-semibold text-red-600 uppercase tracking-wide">
        {language === "en"
          ? "Contact The Trend Car Care Team"
          : "اتصل بفريق ترند كار كير"}
      </p>
      <h1 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        {language === "en" ? "Want To Get In Touch?" : "هل ترغب في التواصل؟"}
      </h1>
      <p className="text-center mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
        {language === "en"
          ? "Whether you're a customer with some feedback or are exploring starting your own car washing business, we'd love to hear from you."
          : "سواء كنت عميلًا مع بعض الملاحظات أو تستكشف بدء عملك الخاص في غسيل السيارات، نحن نحب أن نسمع منك."}
      </p>
      <p className="text-center text-lg text-gray-700 mt-2">
        {language === "en"
          ? "Just click on the relevant box below, and we'll get back to you."
          : "فقط انقر على المربع المناسب أدناه، وسنعاود الاتصال بك."}
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 md:w-[320px] cursor-pointer bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold text-center">{option.title}</h3>
              <p className="text-lg mt-2 text-center">{option.description}</p>
              <Link
                to={option.link}
                className="bg-red-600 text-white px-4 py-2 mt-4 text-center font-semibold text-lg rounded-full hover:bg-white hover:text-red-600 border-1 border-red-600 transition-all"
              >
                {language === "en" ? "Get In Touch" : "تواصل معنا"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
