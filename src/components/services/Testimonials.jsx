import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Great service! My car looks brand new!",
      image: "/services/john.jpg",
    },
    {
      name: "Jane Smith",
      review: "Quick and affordable. Highly recommended!",
      image: "/services/jane.jpg",
    },
    {
      name: "Mike Johnson",
      review: "Best car wash experience I’ve ever had!",
      image: "/services/mike.jpg",
    },
    {
      name: "Emily Davis",
      review: "Very professional and efficient!",
      image: "/services/emily.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        🚗 What Our Customers Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-white shadow-xl rounded-lg"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-500 mb-4"
              />
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <h3 className="font-bold text-lg mt-3 text-red-600">
                {testimonial.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
