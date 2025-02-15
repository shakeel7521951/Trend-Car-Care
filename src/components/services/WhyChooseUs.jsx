import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const whyChooseUs = [
  {
    title_en: "Expert Technicians",
    title_ar: "فنيون خبراء",
    description_en:
      "Our team consists of highly trained professionals who ensure your car gets the best treatment with precision and care. With years of experience, our technicians are equipped to handle any make or model, providing a level of service that guarantees satisfaction and the highest standards in vehicle care. Our experts continually update their skills and knowledge to stay at the forefront of the latest automotive care techniques and industry best practices, ensuring your vehicle receives top-tier care every time.",
    description_ar:
      "يتكون فريقنا من محترفين مدربين تدريباً عالياً يضمنون أن سيارتك تتلقى أفضل علاج بدقة وعناية. مع سنوات من الخبرة، فنيونا مجهزون للتعامل مع أي نوع أو طراز، وتوفير مستوى من الخدمة يضمن الرضا وأعلى معايير العناية بالمركبات. يواصل خبراؤنا تحديث مهاراتهم ومعرفتهم للبقاء في طليعة أحدث تقنيات العناية بالسيارات وأفضل ممارسات الصناعة، مما يضمن لسيارتك الحصول على رعاية من الدرجة الأولى في كل مرة.",
    image: "/services/teh-team.jpg",
  },
  {
    title_en: "Eco-Friendly Products",
    title_ar: "منتجات صديقة للبيئة",
    description_en:
      "We use biodegradable and environmentally friendly cleaning products to keep your car shining without harming nature. Our commitment to sustainability ensures that we not only take care of your vehicle but also contribute to a cleaner, healthier planet by reducing the environmental impact of car washes. We pride ourselves on using non-toxic, cruelty-free products that are safe for both your car and the environment, making us the perfect choice for eco-conscious customers.",
    description_ar:
      "نستخدم منتجات تنظيف قابلة للتحلل وصديقة للبيئة للحفاظ على لمعان سيارتك دون الإضرار بالطبيعة. يضمن التزامنا بالاستدامة أننا لا نهتم فقط بسيارتك ولكننا نساهم أيضًا في كوكب أنظف وأكثر صحة من خلال تقليل التأثير البيئي لغسلات السيارات. نحن نفخر باستخدام منتجات غير سامة وخالية من القسوة وآمنة لكل من سيارتك والبيئة، مما يجعلنا الخيار المثالي للعملاء الواعين بيئيًا.",
    image: "/services/wash-products.jpg",
  },
  {
    title_en: "Fast & Efficient Service",
    title_ar: "خدمة سريعة وفعالة",
    description_en:
      "We respect your time! Our team ensures quick service without compromising quality, so you can get back on the road faster. We streamline our processes to make car washing and detailing fast, while maintaining the exceptional standards of care your car deserves. Whether you're on a tight schedule or simply want to keep things moving, we make sure you're in and out in no time. Our advanced scheduling system allows you to book your service in advance, so there's never any waiting around — just drop off your car and get back to your day.",
    description_ar:
      "نحن نحترم وقتك! يضمن فريقنا خدمة سريعة دون التنازل عن الجودة، بحيث يمكنك العودة إلى الطريق بشكل أسرع. نحن نبسط عملياتنا لجعل غسيل السيارات والتفاصيل أسرع، مع الحفاظ على معايير العناية الاستثنائية التي تستحقها سيارتك. سواء كنت في جدول زمني ضيق أو ببساطة تريد أن تستمر الأمور، نحرص على أنك ستكون في الخارج في وقت قصير. يتيح لك نظام الجدولة المتقدم لدينا حجز خدمتك مسبقًا، بحيث لا يوجد انتظار — فقط قم بإسقاط سيارتك وارجع إلى يومك.",
    image: "/services/fast-wash.jpg",
  },
  {
    title_en: "Advanced Technology",
    title_ar: "تقنية متقدمة",
    description_en:
      "Our facility is equipped with state-of-the-art technology to provide the most effective and safe cleaning solutions. From high-powered washers to automated drying systems, we utilize the latest innovations in car care to provide a deep clean that’s both efficient and gentle on your vehicle. This technology ensures every part of your car receives the optimal treatment, from the wheels to the roof. Our high-tech systems are designed to maximize results while minimizing water usage, reducing waste, and ensuring an environmentally responsible service.",
    description_ar:
      "مرافقنا مجهزة بأحدث التقنيات لتقديم أكثر حلول التنظيف فعالية وأمانًا. من الغسالات عالية القوة إلى أنظمة التجفيف الآلية، نستخدم أحدث الابتكارات في العناية بالسيارات لتقديم تنظيف عميق يكون فعالًا ولطيفًا في نفس الوقت على سيارتك. تضمن هذه التقنية أن كل جزء من سيارتك يحصل على العلاج الأمثل، من العجلات إلى السقف. تم تصميم أنظمتنا عالية التقنية لتحقيق أقصى النتائج مع تقليل استهلاك المياه وتقليل النفايات وضمان خدمة بيئية مسؤولة.",
    image: "/services/advance wash.jpg",
  },
];

const WhyChooseUs = () => {
  const { language } = useContext(LanguageContext); // Access the language context

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {language === "en" ? "Why Choose Us? 🌟" : "لماذا تختارنا؟ 🌟"}
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
                className={`p-8 md:w-1/2 ${language === "ar" ? "text-right" : "text-left"}`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {language === "en" ? feature.title_en : feature.title_ar}
                </h3>
                <p className="text-gray-600">
                  {language === "en" ? feature.description_en : feature.description_ar}
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
