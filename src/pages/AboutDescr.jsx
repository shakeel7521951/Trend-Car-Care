import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import a from "/services/a.jpg";

export default function AboutDescr() {
  const { language } = useContext(LanguageContext);

  const images = [
    {
      img: "/services/car-wrapping-with-foil-car-service.jpg",
      clip: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    },
    {
      img: a,
      clip: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
    },
    {
      img: "/services/detail.jpg",
      clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    },
  ];

  const aboutContent = [
    {
      type: "heading",
      text: language === "en" ? "About Us" : "من نحن",
      className: "text-3xl font-bold text-blue-600 text-center",
    },
    {
      type: "paragraph",
      text:
        language === "en"
          ? "At Trend Car Care, we specialize in premium car detailing, ceramic coating, and window tinting services. Our goal is to enhance your vehicle’s appearance and protection with high-quality, long-lasting solutions tailored to your needs."
          : "في ترند كار كير، نحن متخصصون في خدمات العناية بالسيارات الفاخرة، بما في ذلك التلميع، الطلاء السيراميكي، وتظليل النوافذ. هدفنا هو تحسين مظهر سيارتك وحمايتها باستخدام حلول عالية الجودة تدوم طويلاً، ومصممة خصيصًا لتلبية احتياجاتك.",
    },
    {
      type: "paragraph",
      text:
        language === "en"
          ? "Since our establishment in 2019, we have built a reputation for excellence, combining advanced technology with expert craftsmanship. Our experienced team ensures a meticulous finish, whether you need a full exterior detailing, ceramic protection, or UV-resistant window tinting."
          : "منذ تأسيسنا في عام 2019، قمنا ببناء سمعة قوية في تقديم خدمات متميزة، حيث نجمع بين التكنولوجيا المتقدمة والحرفية العالية. يضمن فريقنا ذو الخبرة لمسة نهائية دقيقة، سواء كنت بحاجة إلى تلميع خارجي شامل، طلاء سيراميكي للحماية، أو تظليل نوافذ مقاوم للأشعة فوق البنفسجية.",
    },
    {
      type: "paragraph",
      text:
        language === "en"
          ? "We take pride in using top-tier products that not only enhance your car's shine but also provide long-term protection against environmental damage. Our window tinting services improve privacy, reduce heat, and protect your interior, while our ceramic coatings create a hydrophobic layer that repels dirt and water."
          : "نفتخر باستخدام منتجات عالية الجودة لا تعزز فقط لمعان سيارتك، بل توفر أيضًا حماية طويلة الأمد ضد العوامل البيئية. تعمل خدمات تظليل النوافذ لدينا على تحسين الخصوصية، وتقليل الحرارة، وحماية المقصورة الداخلية، بينما توفر الطلاءات السيراميكية طبقة طاردة للماء والأوساخ.",
    },
    {
      type: "paragraph",
      text:
        language === "en"
          ? "Our commitment to excellence extends to every detail, ensuring that each vehicle we service receives personalized attention and the highest standard of care. We are dedicated to delivering a flawless finish, superior protection, and an unmatched customer experience."
          : "يلتزم فريقنا بالتميز في كل التفاصيل، مما يضمن حصول كل سيارة نخدمها على اهتمام شخصي وأعلى مستوى من العناية. نحن ملتزمون بتقديم لمسة نهائية مثالية، وحماية فائقة، وتجربة عملاء لا مثيل لها.",
    },
    {
      type: "list",
      items:
        language === "en"
          ? [
              "🚗 Professional Car Detailing & Paint Protection",
              "✨ Advanced Ceramic Coating for Long-Lasting Shine",
              "🌡️ UV-Resistant & Heat-Reducing Window Tinting",
              "🔹 Personalized Services for Every Vehicle",
            ]
          : [
              "🚗 تلميع احترافي للسيارات وحماية الطلاء",
              "✨ طلاء سيراميكي متقدم للحفاظ على اللمعان الدائم",
              "🌡️ تظليل نوافذ مقاوم للأشعة فوق البنفسجية وتقليل الحرارة",
              "🔹 خدمات مخصصة لكل سيارة",
            ],
    },
  ];

  return (
    <div className="w-full sm:w-[90%] mx-auto">
      <div className="w-full sm:w-[90%] mx-auto mt-10 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* First Image (Single Line) */}
        <div className="sm:w-[70%] w-full mx-auto">
          <div className="px-10 sm:px-0 sm:mt-14 mb-3">
            <img
              src={images[0].img}
              alt="First Image"
              className="w-full h-full object-cover shadow-lg shadow-red-300"
              style={{ clipPath: images[0].clip }}
            />
          </div>

          <div className="w-full grid grid-cols-2 justify-center sm:px-0 px-10 gap-4">
            {images.slice(1).map((img, index) => (
              <div key={index}>
                <img
                  src={img.img}
                  alt="Image"
                  className="w-full h-full object-cover shadow-lg"
                  style={{ clipPath: img.clip }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* About Description */}
        <div className="w-full sm:w-[90%] mx-auto">
          {aboutContent.map((item, index) => {
            // Set the text alignment based on language
            const textAlign = language === "en" ? "text-left" : "text-right";

            if (item.type === "heading") {
              return (
                <h1 key={index} className={`${item.className} ${textAlign}`}>
                  {item.text}
                </h1>
              );
            }
            if (item.type === "paragraph") {
              return (
                <p
                  key={index}
                  className={`text-sm sm:text-base text-gray-800 mt-2 ${textAlign}`}
                >
                  {item.text}
                </p>
              );
            }
            if (item.type === "list") {
              return (
                <ul
                  key={index}
                  className={`list-none pl-5 mt-3 text-sm sm:text-base text-gray-800 ${textAlign}`}
                >
                  {item.items.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
