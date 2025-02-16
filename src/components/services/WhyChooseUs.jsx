import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const whyChooseUs = [
  {
    title_en: "Fast, Reliable & Hassle-Free",
    title_ar: "سريعة وموثوقة وخالية من المتاعب",
    description_en:
      "We value your time! Our team ensures efficient, high-quality service with minimal waiting time. Whether you need a quick polish, tinting, or a full detailing package, we make sure your car gets top-tier service without unnecessary delays. Our online booking system lets you schedule your service in advance for added convenience.",
    description_ar:
      "نحن نقدر وقتك! يضمن فريقنا خدمة فعالة وعالية الجودة مع الحد الأدنى من وقت الانتظار. سواء كنت بحاجة إلى تلميع سريع، تظليل، أو حزمة تنظيف شاملة، نحرص على أن تحصل سيارتك على أفضل خدمة دون تأخير غير ضروري. يتيح لك نظام الحجز عبر الإنترنت تحديد موعد خدمتك مسبقًا لراحة إضافية.",
    image: "/services/save.jpg",
  },
  {
    title_en: "Advanced Technology & Premium Quality",
    title_ar: "تقنيات متقدمة وجودة فائقة",
    description_en:
      "Our facility is equipped with the latest technology, including advanced ceramic coatings, precision tinting tools, high-pressure steam cleaners, and automated polishing systems. We ensure a seamless finish and long-lasting protection for your car, maintaining its pristine condition for years to come.",
    description_ar:
      "مرافقنا مجهزة بأحدث التقنيات، بما في ذلك الطلاءات السيراميكية المتطورة، أدوات التظليل الدقيقة، منظفات البخار عالية الضغط، وأنظمة التلميع الآلية. نضمن لك تشطيبًا سلسًا وحماية طويلة الأمد لسيارتك، مما يحافظ على حالتها المثالية لسنوات قادمة.",
    image: "/services/pro.jpg",
  },
  {
    title_en: "Expert Car Care Specialists",
    title_ar: "خبراء العناية بالسيارات",
    description_en:
      "Our skilled technicians specialize in a wide range of car care services, including detailing, polishing, tinting, ceramic coating, and paint protection. With years of experience, we guarantee precision and top-quality results, ensuring your car looks and feels brand new. Whether you need a complete interior refresh or an exterior makeover, our professionals use cutting-edge techniques to enhance your vehicle’s durability and shine.",
    description_ar:
      "يتخصص فنينا المهرة في مجموعة واسعة من خدمات العناية بالسيارات، بما في ذلك التلميع، التظليل، الطلاء السيراميكي، وحماية الطلاء. مع سنوات من الخبرة، نضمن لك الدقة والجودة العالية، مما يجعل سيارتك تبدو وتشعر وكأنها جديدة تمامًا. سواء كنت بحاجة إلى تجديد داخلي كامل أو تحسين مظهر خارجي، يستخدم محترفونا أحدث التقنيات لتعزيز متانة ولمعان سيارتك.",
    image: "/services/detail.jpg",
  },
  {
    title_en: "Comprehensive Car Services",
    title_ar: "خدمات سيارات شاملة",
    description_en:
      "We provide a full range of car enhancement and protection services, including premium detailing, paint correction, ceramic coatings, window tinting, headlight restoration, and scratch removal. Our holistic approach ensures that every part of your vehicle receives the highest level of care, from the exterior body to the smallest interior details.",
    description_ar:
      "نقدم مجموعة كاملة من خدمات تحسين وحماية السيارات، بما في ذلك التلميع الاحترافي، تصحيح الطلاء، الطلاء السيراميكي، تظليل النوافذ، ترميم المصابيح الأمامية، وإزالة الخدوش. يضمن نهجنا الشامل أن يحصل كل جزء من سيارتك على أعلى مستوى من العناية، من الهيكل الخارجي إلى أصغر التفاصيل الداخلية.",
    image: "/services/coating.jpg",
  },
  // {
  //   title_en: "Eco-Friendly & Safe Products",
  //   title_ar: "منتجات آمنة وصديقة للبيئة",
  //   description_en:
  //     "We use high-quality, non-toxic, and eco-friendly products for all our services, ensuring your vehicle receives the best treatment without harming the environment. From waterless car washes to biodegradable polishes, our solutions deliver outstanding results while reducing environmental impact.",
  //   description_ar:
  //     "نستخدم منتجات عالية الجودة، غير سامة وصديقة للبيئة في جميع خدماتنا، مما يضمن حصول سيارتك على أفضل معالجة دون الإضرار بالبيئة. بدءًا من غسيل السيارات بدون ماء إلى منتجات التلميع القابلة للتحلل، توفر حلولنا نتائج مذهلة مع تقليل التأثير البيئي.",
  //   image: "/services/eco-friendly.jpg",
  // },
];

const WhyChooseUs = () => {
  const { language } = useContext(LanguageContext); // Access the language context

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {language === "en" ? "What we provide?" : "ماذا نقدم؟"}
        </h2>

        <div className="space-y-6">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
                index % 2 === 0
                  ? language === "en"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  : language === "en"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              <div
                className={`p-8 md:w-1/2 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {language === "en" ? feature.title_en : feature.title_ar}
                </h3>
                <p className="text-gray-600">
                  {language === "en"
                    ? feature.description_en
                    : feature.description_ar}
                </p>
              </div>
              <img
                src={feature.image}
                alt={feature.title_en}
                className="w-full md:w-1/2 h-full object-cover rounded-lg transform transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
