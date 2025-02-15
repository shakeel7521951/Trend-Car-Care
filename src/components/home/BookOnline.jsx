import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const BookOnline = () => {
  const { language } = useContext(LanguageContext);

  const steps = [
    {
      number: 1,
      title: "Visit Trend Car Care Website",
      title_ar: "زيارة موقع ترند كار كير",
      description:
        "Go to our website and explore all the available car wash services.",
      description_ar:
        "اذهب إلى موقعنا الإلكتروني واستكشف جميع خدمات غسل السيارات المتاحة.",
    },
    {
      number: 2,
      title: "Locate Nearest Trend Car Care",
      title_ar: "تحديد أقرب فرع لترند كار كير",
      description:
        "Enter your address or postcode to find the nearest car wash location.",
      description_ar:
        "أدخل عنوانك أو الرمز البريدي للعثور على أقرب موقع لغسل السيارات.",
    },
    {
      number: 3,
      title: "Choose a Service Package",
      title_ar: "اختيار باقة الخدمة",
      description:
        "Select a car wash package that fits your needs and budget.",
      description_ar:
        "اختر باقة غسل سيارات تناسب احتياجاتك وميزانيتك.",
    },
    {
      number: 4,
      title: "Book Your Appointment",
      title_ar: "حجز موعدك",
      description:
        "Select a convenient time slot and confirm your booking.",
      description_ar:
        "اختر وقتًا مناسبًا وتأكد من حجزك.",
    },
    {
      number: 5,
      title: "Prepare Your Car",
      title_ar: "تحضير سيارتك",
      description:
        "Ensure your car is ready for the wash at the chosen time.",
      description_ar:
        "تأكد من أن سيارتك جاهزة للغسل في الوقت المحدد.",
    },
    {
      number: 6,
      title: "Enjoy a Clean Car",
      title_ar: "استمتع بسيارة نظيفة",
      description:
        "Relax and enjoy your spotless car once our team is done.",
      description_ar:
        "استرخِ واستمتع بسيارتك النظيفة بعد أن ينتهي فريقنا.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-lg font-semibold text-red-600 uppercase tracking-wide">
          {language === "en" ? "How It Works" : "كيف يعمل"}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 sm:w-[60%] mx-auto">
          {language === "en"
            ? "How To Book Online at Trend Car Care"
            : "كيف تحجز عبر الإنترنت في ترند كار كير"}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex min-w-[320px] flex-col items-center text-center max-w-xs bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full mb-4">
              {step.number}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {language === "en" ? step.title : step.title_ar}
            </h3>
            <p className="text-gray-600">
              {language === "en" ? step.description : step.description_ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookOnline;
