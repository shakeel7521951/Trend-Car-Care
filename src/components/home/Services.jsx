import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Services = () => {
  // Services Data Array
  const services = [
    {
      id: 1,
      title: "Platinum Wash",
      tag: "(Most Popular)",
      description:
        "A full interior & exterior clean with deep vacuuming of seats, footwells, and mats. Glass, dashboard, trims, and doors are meticulously cleaned for a fresh, showroom-ready look.",
      description_ar:
        "تنظيف كامل للداخل والخارج مع تفريغ عميق للمقاعد والأرضيات والسجاد. يتم تنظيف الزجاج ولوحة القيادة والإكسسوارات والأبواب بدقة للحصول على مظهر جديد وجاهز للعرض.",
      image: "https://www.starcarwash.com.au/img/pages/home/PLATINUM-483x275px.jpg",
    },
    {
      id: 2,
      title: "Gold Wash",
      tag: "",
      description:
        "A premium exterior wash combined with interior vacuuming, dashboard cleaning, and tire shine. Ideal for keeping your car fresh and well-maintained.",
      description_ar:
        "غسل خارجي فاخر مع تفريغ داخلي وتنظيف لوحة القيادة وتلميع الإطارات. مثالي للحفاظ على سيارتك نظيفة ومصانة بشكل جيد.",
      image: "https://www.starcarwash.com.au/img/pages/home/POLISH-483x275px.jpg",
    },
    {
      id: 3,
      title: "Express Wash",
      tag: "",
      description:
        "A quick yet effective exterior wash designed for busy individuals. Removes dirt, dust, and grime while adding a protective shine to your car.",
      description_ar:
        "غسل خارجي سريع وفعال مصمم للأشخاص المشغولين. يزيل الأوساخ والغبار والأوساخ مع إضافة لمعان وقائي لسيارتك.",
      image: "https://www.starcarwash.com.au/img/pages/home/EXPRESS-483x275px.jpg",
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
        {language === "en" ? "Premium Car Care Services" : "خدمات العناية الفاخرة بالسيارات"}
      </h1>
      <p className="text-center sm:mx-24 mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
        {language === "en" ? (
          <>
            From quick washes to premium detailing, we offer tailored services to keep your car looking pristine.
            Experience unmatched convenience and expert care at <strong>Trend Car Care</strong>.
          </>
        ) : (
          <>
            من الغسلات السريعة إلى التفصيل الفاخر، نقدم خدمات مخصصة للحفاظ على سيارتك في أفضل حالة.
            جرب الراحة الغير مسبوقة والرعاية الخبراء في <strong>ترند كار كير</strong>.
          </>
        )}
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service) => (
          <div key={service.id} className="max-w-sm mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
            <img src={service.image} alt={service.title} className="rounded-lg w-full" />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {language === "en" ? (
                <>
                  {service.title} {service.tag && <span className="text-red-600">{service.tag}</span>}
                </>
              ) : (
                <>
                  {service.title === "Platinum Wash" ? "غسل بلاتينيوم" : service.title === "Gold Wash" ? "غسل ذهبي" : "غسل سريع"}
                  {service.tag && <span className="text-red-600">{service.tag}</span>}
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
