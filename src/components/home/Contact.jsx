import React from "react";
import REGULAR_CARE from "../../assets/home/REGULAR_CARE.png";
import LOYALTY_BOOKS from "../../assets/home/LOYALTY_BOOKS.png";
import ONLINE_BOOKING_SPECIAL from "../../assets/home/ONLINE_BOOKING_SPECIAL.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactOptions = [
    {
      image: REGULAR_CARE,
      title: "Customer Feedback",
      description:
        "If you have any feedback or suggestions for us, please don't hesitate to get in touch.",
      link: "#", // Add the actual link to the offer page
    },
    {
      image: LOYALTY_BOOKS,
      title: "Loyalty Books",
      description:
        "Get exclusive discounts when you purchase our Loyalty Book. Perfect for regular visits!",
      link: "#", // Add the actual link to the offer page
    },
    {
      image: ONLINE_BOOKING_SPECIAL,
      title: "Online Booking Special",
      description:
        "Book your car wash online and enjoy 20% off your first booking with us!",
      link: "#", // Add the actual link to the offer page
    },
  ];

  return (
    <div className="my-16 px-4 sm:px-7">
      <p className="text-center text-lg font-semibold text-red-600 uppercase tracking-wide">
        Contact The Trend Car Care Team
      </p>
      <h1 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        Want To Get In Touch?
      </h1>
      <p className="text-center mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
        Whether you're a customer with some feedback or are exploring starting your own car washing business, we'd love to hear from you.
      </p>
      <p className="text-center text-lg text-gray-700 mt-2">
        Just click on the relevant box below, and we'll get back to you.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 md:w-[320px] bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-300"
          >
            <img src={option.image} alt={option.title} className="w-full h-72 object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold text-center">{option.title}</h3>
              <p className="text-lg mt-2 text-center">{option.description}</p>
              <Link
                to={option.link}
                className="mt-4 bg-red-600 p-3 rounded-xl text-white hover:bg-red-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
