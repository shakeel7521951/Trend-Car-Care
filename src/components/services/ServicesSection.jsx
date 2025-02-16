import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { LanguageContext } from "../../context/LanguageContext";

const services = [
  {
    title_en: "Washing",
    title_ar: "غسيل أساسي",
    description_en:
      "Our Wash is a perfect solution for a quick refresh. It includes an exterior hand wash using premium car shampoo to remove dust, dirt, and minor road grime. Your car will be carefully rinsed with clean water and dried using microfiber towels to avoid scratches.",
    description_ar:
      "غسيل الأساس هو الحل المثالي لإنعاش سريع. يشمل غسل يدوي خارجي باستخدام شامبو سيارات فاخر لإزالة الغبار والأوساخ والشوائب الصغيرة. سيتم شطف سيارتك بعناية بالماء النظيف وتجفيفها باستخدام مناشف ميكروفايبر لتجنب الخدوش.",
    category: "Washing",
    price: 15,
    image: "/services/wash car.jpg",
  },
  {
    title_en: "Interior Detailing",
    title_ar: "تنظيف داخلي دقيق",
    description_en:
      "Deep-clean your car's interior with our professional detailing service. We use high-quality products to clean and restore seats, carpets, dashboards, and air vents for a fresh and spotless interior.",
    description_ar:
      "قم بتنظيف الجزء الداخلي لسيارتك بعمق مع خدمة التنظيف الدقيق الاحترافية. نستخدم منتجات عالية الجودة لتنظيف واستعادة المقاعد والسجاد ولوحة القيادة وفتحات التهوية للحصول على داخلية نظيفة ومنعشة.",
    category: "Detailing",
    price: 80,
    image: "/services/car-wash-detailing-station.jpg",
  },

  {
    title_en: "Window Tinting",
    title_ar: "تظليل النوافذ",
    description_en:
      "Enhance privacy and protect your car’s interior with our premium window tinting service. We use high-quality films to reduce glare, block UV rays, and improve temperature control inside your vehicle.",
    description_ar:
      "عزز الخصوصية واحمِ داخلية سيارتك مع خدمة تظليل النوافذ المتميزة. نستخدم أفلاماً عالية الجودة لتقليل الوهج وحجب الأشعة فوق البنفسجية وتحسين التحكم في درجة الحرارة داخل السيارة.",
    category: "Tinting",
    price: 120,
    image: "/services/tinting.jpg",
  },
  {
    title_en: "Headlight Restoration",
    title_ar: "استعادة الأضواء الأمامية",
    description_en:
      "Over time, headlights become cloudy, yellowed, or oxidized due to exposure to UV rays and environmental factors. Our Headlight Restoration service restores clarity and brightness by using professional-grade cleaning, sanding, and polishing techniques.",
    description_ar:
      "مع مرور الوقت، تصبح الأضواء الأمامية غائمة أو صفراء أو متأكسدة بسبب التعرض للأشعة فوق البنفسجية والعوامل البيئية. خدمة استعادة الأضواء الأمامية لدينا تستعيد الوضوح والسطوع باستخدام تقنيات التنظيف والصنفرة والتلميع الاحترافية.",
    category: "Detailing",
    price: 30,
    image: "/services/detail.jpg",
  },
  {
    title_en: "Ceramic Coating",
    title_ar: "طلاء سيراميكي",
    description_en:
      "Protect your car with our advanced Ceramic Coating service. This high-performance protective layer shields your vehicle’s paint from dirt, water stains, UV rays, bird droppings, and minor scratches.",
    description_ar:
      "حافظ على سيارتك مع خدمة الطلاء السيراميكي المتقدمة. هذه الطبقة الواقية عالية الأداء تحمي طلاء سيارتك من الأوساخ، والبقع المائية، والأشعة فوق البنفسجية، وفضلات الطيور، والخدوش الصغيرة.",
    category: "Protection",
    price: 100,
    image: "/services/a.jpg",
  },
  {
    title_en: "Paint Protection Film (PPF)",
    title_ar: "فيلم حماية الطلاء",
    description_en:
      "Keep your car’s paint in pristine condition with our Paint Protection Film (PPF) service. This transparent film provides an extra layer of protection against scratches, rock chips, and contaminants.",
    description_ar:
      "حافظ على طلاء سيارتك في حالة مثالية مع خدمة فيلم حماية الطلاء (PPF). توفر هذه الطبقة الشفافة حماية إضافية ضد الخدوش وحصى الطريق والعوامل الخارجية الضارة.",
    category: "Protection",
    price: 250,
    image: "/services/car-wrapping-with-foil-car-service.jpg",
  },
];

const ServicesSection = () => {
  const { language } = useContext(LanguageContext); // Access the language context

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">
          {language === "en" ? "Our Services" : "خدماتنا"}
        </h2>
        <p className="text-black text-xl mt-2">
          {language === "en"
            ? "Choose the perfect service for your car!"
            : "اختر الخدمة المثالية لسيارتك!"}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={language === "en" ? service.title_en : service.title_ar}
            description={
              language === "en"
                ? service.description_en
                : service.description_ar
            }
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
