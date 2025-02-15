import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import the LanguageContext
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const TestimonialSlider = () => {
  const { language } = useContext(LanguageContext); // Access the language context

  const testimonials = [
    {
      name_en: "John Doe",
      name_ar: "جون دو",
      review_en: "Great service! My car looks brand new!",
      review_ar: "خدمة رائعة! سيارتي تبدو جديدة تمامًا!",
      image: "/services/john.jpg",
    },
    {
      name_en: "Jane Smith",
      name_ar: "جين سميث",
      review_en: "Quick and affordable. Highly recommended!",
      review_ar: "سريع وبأسعار معقولة. موصى به بشدة!",
      image: "/services/jane.jpg",
    },
    {
      name_en: "Mike Johnson",
      name_ar: "مايك جونسون",
      review_en: "Best car wash experience I’ve ever had!",
      review_ar: "أفضل تجربة لغسيل السيارات مررت بها على الإطلاق!",
      image: "/services/mike.jpg",
    },
    {
      name_en: "Emily Davis",
      name_ar: "إميلي دافيس",
      review_en: "Very professional and efficient!",
      review_ar: "مهنية للغاية وفعالة!",
      image: "/services/emily.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        {language === "en" ? "🚗 What Our Customers Say" : "🚗 ماذا يقول عملاؤنا"}
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="max-w-6xl mx-auto"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-white shadow-xl rounded-lg"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name_en}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-500 mb-4"
              />
              <p className="text-gray-600 italic">
                "{language === "en" ? testimonial.review_en : testimonial.review_ar}"
              </p>
              <h3 className="font-bold text-lg mt-3 text-red-600">
                {language === "en" ? testimonial.name_en : testimonial.name_ar}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
