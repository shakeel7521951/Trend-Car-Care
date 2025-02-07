import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Great service! My car looks brand new! The staff was friendly and did an amazing job.",
    image: "/services/john.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "Quick and affordable. Highly recommended! The process was smooth and hassle-free.",
    image: "/services/jane.jpg",
  },
  {
    name: "Mike Johnson",
    review:
      "Best car wash experience I’ve ever had! The attention to detail was impressive.",
    image: "/services/mike.jpg",
  },
  {
    name: "Emily Davis",
    review:
      "Very professional and efficient. My car looks spotless every time!",
    image: "/services/emily.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        🚗 What Our Customers Say
      </h2>

      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        {/* Wrapper for the scrolling effect */}
        <div className="testimonial-wrapper flex animate-marquee">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name + index}
              className="testimonial-card bg-white p-6 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl !w-fit"
            >
              {/* Image now has a fixed size, rounded shape, and better positioning */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-red-500"
                />
              </div>
              <p className="text-gray-600 mt-4 italic">
                "{testimonial.review}"
              </p>
              <h3 className="font-bold text-lg mt-3 text-red-600">
                {testimonial.name}
              </h3>
            </div>
          ))}
          {/* Duplicating the testimonials for infinite scroll effect */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index + 1000} // Ensuring unique keys for duplicated elements
              className="testimonial-card bg-white p-6 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-red-500"
                />
              </div>
              <p className="text-gray-600 mt-4 italic">
                "{testimonial.review}"
              </p>
              <h3 className="font-bold text-lg mt-3 text-red-600">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
