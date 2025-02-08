import React from "react";
import REGULAR_CARE from "../../assets/home/REGULAR_CARE.png";
import LOYALTY_BOOKS from "../../assets/home/LOYALTY_BOOKS.png";
import ONLINE_BOOKING_SPECIAL from "../../assets/home/ONLINE_BOOKING_SPECIAL.png";
import { Link } from "react-router-dom";

const Offers = () => {
  const offers = [
    {
      image: REGULAR_CARE,
      title: "Regular Care",
      description:
        "Save 30% with our Regular Care 5-voucher pack and keep your car looking its best all the time!",
      link: "#",
    },
    {
      image: LOYALTY_BOOKS,
      title: "Loyalty Books",
      description:
        "Get exclusive discounts when you purchase our Loyalty Book. Perfect for regular visits!",
      link: "#",
    },
    {
      image: ONLINE_BOOKING_SPECIAL,
      title: "Online Booking Special",
      description:
        "Book your car wash online and enjoy 20% off your first booking with us!",
      link: "#",
    },
  ];

  return (
    <div className="my-10 mx-3">
      <p className="text-center text-lg font-semibold text-red-600 uppercase tracking-wide">
        Trend Car Care Offers
      </p>
      <h1 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
        Exclusive Offers
      </h1>
      <p className="text-center sm:mx-24 mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
        We love to reward regular customers, so huge savings are available
        whether you book online or buy a Loyalty Book or Regular Care Package.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 md:w-[350px] cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={offer.image} alt={offer.title} className="w-full h-60 object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
              <h3 className="text-xl font-bold text-center">{offer.title}</h3>
              <p className="text-md mt-2 text-center
              ">{offer.description}</p>
              <Link
                to={offer.link}
                className="bg-red-600 text-white px-6 py-2 mt-3 text-center font-semibold text-lg rounded-full hover:bg-white hover:text-red-600 border-1 border-red-600 transition-all"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
