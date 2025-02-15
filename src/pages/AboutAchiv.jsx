import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; // Assuming you have the LanguageContext set up

import authen from '../assets/Aboutimg/authen.svg';
import dollar from '../assets/Aboutimg/dollar.svg';
import tick from '../assets/Aboutimg/tick.svg';
import veri from '../assets/Aboutimg/veri.svg';

export default function AboutAchiv() {
    const { language } = useContext(LanguageContext); // Access the language context

    const services = [
        {
            img: veri,
            title: language === "en" ? "Verified Technicians & Beauticians" : "فنيون ومتخصصون مجازون",
            description: language === "en" ?
                "Our service providers are verified, monitored, and evaluated to ensure your satisfaction." :
                "مقدمو خدماتنا موثوقون ، يتم مراقبتهم وتقييمهم لضمان رضاك.",
        },
        {
            img: tick,
            title: language === "en" ? "Supervised Services" : "خدمات تحت الإشراف",
            description: language === "en" ?
                "Our customer service is available 7 days a week, ensuring responsiveness from order to delivery." :
                "خدمة العملاء لدينا متاحة 7 أيام في الأسبوع ، لضمان الاستجابة من الطلب حتى التسليم.",
        },
        {
            img: dollar,
            title: language === "en" ? "Trustworthy Services" : "خدمات موثوقة",
            description: language === "en" ?
                "Our highly skilled and experienced technicians guarantee top-quality service to win your trust." :
                "فنيونا المهرة وذوي الخبرة يضمنون خدمة عالية الجودة لكسب ثقتك.",
        },
        {
            img: authen,
            title: language === "en" ? "Affordable Services" : "خدمات بأسعار معقولة",
            description: language === "en" ?
                "We offer remarkable services at competitive rates with no hidden charges or overbilling." :
                "نحن نقدم خدمات رائعة بأسعار تنافسية دون رسوم خفية أو فواتير مبالغ فيها.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
                {language === "en" ? "Our Achievements" : "إنجازاتنا"}
            </h2>

            <div className="cursor-pointer grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 sm:mt-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-2xl border border-[#ec491c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="p-6 flex justify-center items-center">
                            <img src={service.img} alt="icon" />
                        </div>
                        <h3 className="text-xl font-semibold sm:text-wrap">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
