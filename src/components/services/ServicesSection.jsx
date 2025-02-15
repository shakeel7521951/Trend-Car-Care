import React, { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { LanguageContext } from "../../context/LanguageContext";

const services = [
  {
    title_en: "Basic Wash",
    title_ar: "غسيل أساسي",
    description_en:
      "Our Basic Wash is a perfect solution for a quick refresh. It includes an exterior hand wash using premium car shampoo to remove dust, dirt, and minor road grime. Your car will be carefully rinsed with clean water and dried using microfiber towels to avoid scratches.",
    description_ar:
      "غسيل الأساس هو الحل المثالي لإنعاش سريع. يشمل غسل يدوي خارجي باستخدام شامبو سيارات فاخر لإزالة الغبار والأوساخ والشوائب الصغيرة. سيتم شطف سيارتك بعناية بالماء النظيف وتجفيفها باستخدام مناشف ميكروفايبر لتجنب الخدوش.",
    price: 15,
    image: "/services/basic-wash.jpeg",
  },
  {
    title_en: "Deluxe Wash",
    title_ar: "غسيل ديلوكس",
    description_en:
      "The Deluxe Wash goes beyond a basic clean by focusing on both the exterior and interior of your car. It includes a thorough exterior wash, interior vacuuming, and detailed dashboard cleaning to remove dust and debris.",
    description_ar:
      "غسيل ديلوكس يتجاوز التنظيف الأساسي من خلال التركيز على كل من الجزء الخارجي والداخلي لسيارتك. يشمل غسلاً خارجياً شاملاً، وشفطاً داخلياً، وتنظيفاً دقيقاً للوحة القيادة لإزالة الغبار والحطام.",
    price: 25,
    image: "/services/deluxe-wash.jpeg",
  },
  {
    title_en: "Premium Wash",
    title_ar: "غسيل بريميوم",
    description_en:
      "Our Premium Wash offers a complete cleaning experience for your vehicle. It includes an intensive hand wash, interior vacuuming, streak-free glass cleaning, dashboard polishing, and deep seat dust removal.",
    description_ar:
      "غسيل بريميوم يقدم تجربة تنظيف كاملة لسيارتك. يشمل غسل يدوي مكثف، وشفط داخلي، وتنظيف الزجاج بدون خطوط، وتلميع لوحة القيادة، وإزالة الغبار من المقاعد بعمق.",
    price: 50,
    image: "/services/premium-wash.jpeg",
  },
  {
    title_en: "Headlight Restoration",
    title_ar: "استعادة الأضواء الأمامية",
    description_en:
      "Over time, headlights become cloudy, yellowed, or oxidized due to exposure to UV rays and environmental factors. Our Headlight Restoration service restores clarity and brightness by using professional-grade cleaning, sanding, and polishing techniques.",
    description_ar:
      "مع مرور الوقت، تصبح الأضواء الأمامية غائمة أو صفراء أو متأكسدة بسبب التعرض للأشعة فوق البنفسجية والعوامل البيئية. خدمة استعادة الأضواء الأمامية لدينا تستعيد الوضوح والسطوع باستخدام تقنيات التنظيف والصنفرة والتلميع الاحترافية.",
    price: 30,
    image: "/services/headlight-wash.jpg",
  },
  {
    title_en: "Ceramic Coating",
    title_ar: "طلاء سيراميكي",
    description_en:
      "Protect your car with our advanced Ceramic Coating service. This high-performance protective layer shields your vehicle’s paint from dirt, water stains, UV rays, bird droppings, and minor scratches.",
    description_ar:
      "حافظ على سيارتك مع خدمة الطلاء السيراميكي المتقدمة. هذه الطبقة الواقية عالية الأداء تحمي طلاء سيارتك من الأوساخ، والبقع المائية، والأشعة فوق البنفسجية، وفضلات الطيور، والخدوش الصغيرة.",
    price: 100,
    image: "/services/ceramic-wash.jpeg",
  },
  {
    title_en: "Automatic Wash",
    title_ar: "غسيل تلقائي",
    description_en:
      "For those who need a quick, high-quality clean, our Automatic Wash is the perfect choice. Your car will go through a state-of-the-art automated system that uses soft-touch brushes, high-pressure jets, and premium foam to remove dirt and grime efficiently.",
    description_ar:
      "لمن يحتاجون إلى تنظيف سريع وعالي الجودة، فإن غسيل السيارات التلقائي هو الخيار المثالي. ستمر سيارتك من خلال نظام آلي متطور يستخدم فرشاً ناعمة، ورشات ضغط عالي، ورغوة فاخرة لإزالة الأوساخ بكفاءة.",
    price: 150,
    image: "/services/automatic-wash.jpeg",
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
            description={language === "en" ? service.description_en : service.description_ar}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
