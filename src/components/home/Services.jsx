import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Services = () => {
  // Services Data Array
  const services = [
    {
      id: 1,
      title: "Premium Detailing",
      tag: "(Most Popular)",
      description:
        "A comprehensive detailing service including deep interior cleaning, exterior polishing, and protective coatings for a flawless finish.",
      description_ar:
        "خدمة تفصيل شاملة تتضمن تنظيفًا داخليًا عميقًا، وتلميعًا خارجيًا، وطلاءات واقية للحصول على مظهر مثالي.",
      image: "/services/detailing.jpg",
    },
    {
      id: 2,
      title: "Professional Car Wash",
      tag: "",
      description:
        "A thorough exterior and interior wash with vacuuming, dashboard cleaning, and tire shine to keep your car spotless.",
      description_ar:
        "غسيل شامل للسيارة من الداخل والخارج مع تفريغ داخلي، وتنظيف لوحة القيادة، وتلميع الإطارات للحفاظ على سيارتك نظيفة تمامًا.",
      image: "/services/car-wash.jpg",
    },
    {
      id: 3,
      title: "Window Tinting",
      tag: "",
      description:
        "High-quality window tinting for UV protection, heat reduction, and enhanced privacy, ensuring a sleek and stylish look.",
      description_ar:
        "تظليل نوافذ عالي الجودة لحماية من الأشعة فوق البنفسجية، وتقليل الحرارة، وزيادة الخصوصية، مما يمنح سيارتك مظهرًا أنيقًا وعصريًا.",
      image: "/services/tinting.jpg",
    },
  ];

  const { language } = useContext(LanguageContext);

  return (
    <div className="my-10 mx-auto px-6 sm:px-10 lg:px-16">
      {/* Section Heading */}
      <p className="text-center text-lg font-semibold textColor uppercase tracking-wide">
        {language === "en" ? "Our Services" : "خدماتنا"}
      </p>
      <h1 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        {language === "en"
          ? "Premium Car Care Services"
          : "خدمات العناية الفاخرة بالسيارات"}
      </h1>
      <p className="text-center sm:mx-24 mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
        {language === "en" ? (
          <>
            From routine maintenance to premium detailing, we offer tailored
            services to keep your car in top condition. Experience unmatched
            convenience and expert care at <strong>Trend Car Care.</strong>
          </>
        ) : (
          <>
            ممن الصيانة الدورية إلى العناية الفاخرة، نقدم خدمات مخصصة للحفاظ على
            سيارتك في أفضل حالاتها. استمتع بالراحة الفائقة والعناية المتخصصة مع
            <strong>ترند كار كير</strong>.
          </>
        )}
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="max-w-sm mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg w-full h-90 object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {language === "en" ? (
                <>
                  {service.title}
                  {service.tag && (
                    <span className="text-red-600">{service.tag}</span>
                  )}
                </>
              ) : (
                <>
                  {service.title === "Premium Detailing"
                    ? "تفصيل ممتاز"
                    : service.title === "Professional Car Wash"
                    ? "غسيل احترافي للسيارة"
                    : "تظليل النوافذ"}
                  {service.tag && (
                    <span className="text-red-600">{service.tag}</span>
                  )}
                </>
              )}
            </h2>
            <p className="mt-2 text-gray-700 text-lg leading-relaxed">
              {language === "en" ? service.description : service.description_ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
