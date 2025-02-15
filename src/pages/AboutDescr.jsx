import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import buffing from "../assets/Aboutimg/best.jpeg";
import wash3 from "../assets/Aboutimg/lhr.jpg";
import washer from "../assets/Aboutimg/washer.jfif";
import aiwash from "../assets/Aboutimg/aiwash.webp";

export default function AboutDescr() {
    const { language } = useContext(LanguageContext);

    const images = [
        {
            img: buffing,
            clip: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        },
        {
            img: washer,
            clip: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
        },
        {
            img: wash3,
            clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        },
    ];

    const aboutContent = [
        {
            type: "heading",
            text: language === "en" ? "About Us" : "معلومات عنا",
            className: "text-3xl font-bold text-blue-600 text-center",
        },
        {
            type: "paragraph",
            text: language === "en" ? 
                "We redefine car care with premium hand car wash and detailing services that prioritize both quality and sustainability. Established in 2019, our expert team brings over a decade of professional car wash experience to ensure a spotless, showroom-like finish for your vehicle." :
                "نحن نعيد تعريف العناية بالسيارات من خلال خدمات غسيل اليدين والتفاصيل الفاخرة التي تعطي الأولوية للجودة والاستدامة. تأسست في عام 2019 ، يجلب فريقنا الخبراء أكثر من عقد من الخبرة في غسيل السيارات المهنية لضمان مظهر خالٍ من العيوب وكالمعرض لسيارتك.",
        },
        {
            type: "paragraph",
            text: language === "en" ? 
                "We proudly operate in seven major cities across Pakistan, including Lahore, Islamabad, Rawalpindi, Sialkot, Gujranwala, Faisalabad, and Gujrat, offering home-based services for maximum convenience." : 
                "نفخر بأننا نعمل في سبع مدن رئيسية عبر باكستان ، بما في ذلك لاهور ، إسلام أباد ، راولبندي ، سيالكوت ، غوجرانوالا ، فيصل آباد ، وغوجرات ، مع تقديم خدمات منزلية لأقصى قدر من الراحة.",
        },
        {
            type: "paragraph",
            text: language === "en" ? 
                "Our eco-friendly approach integrates the latest water reclamation technology and biodegradable products, ensuring an exceptional clean while preserving the environment. We are committed to providing a safe, sustainable, and satisfying experience for our customers, with a pay-only-when-satisfied policy that guarantees your peace of mind." : 
                "منهجنا الصديق للبيئة يدمج أحدث تقنيات استرداد المياه والمنتجات القابلة للتحلل البيولوجي ، مما يضمن نظافة استثنائية مع الحفاظ على البيئة. نحن ملتزمون بتوفير تجربة آمنة ومستدامة ومرضية لعملائنا ، مع سياسة الدفع فقط عندما تكون راضيًا والتي تضمن لك راحة البال.",
        },
        {
            type: "list",
            items: language === "en" ? [
                "💧 100% Hand Wash & Detailing",
                "🏠 Convenient Home-Based Services",
                "🌱 Biodegradable & Eco-Friendly Products",
                "😊 Pay Only When Satisfied",
            ] : [
                "💧 غسيل يدوي 100٪ وتفاصيل",
                "🏠 خدمات منزلية مريحة",
                "🌱 منتجات صديقة للبيئة وقابلة للتحلل",
                "😊 الدفع فقط عند الرضا",
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
                                <p key={index} className={`text-sm sm:text-base text-gray-800 mt-2 ${textAlign}`}>
                                    {item.text}
                                </p>
                            );
                        }
                        if (item.type === "list") {
                            return (
                                <ul key={index} className={`list-none pl-5 mt-3 text-sm sm:text-base text-gray-800 ${textAlign}`}>
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
