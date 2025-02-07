import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Basic Wash",
    description: "Exterior hand wash & towel dry.",
    price: 15,
    image:
      "/services/basic-wash.jpeg",
  },
  {
    title: "Deluxe Wash",
    description: "Interior vacuum & dashboard cleaning.",
    price: 25,
    image:
      "/services/deluxe-wash.jpeg",
  },
  {
    title: "Premium Wash",
    description: "Full detailing & wax polish.",
    price: 50,
    image:
      "/services/premium-wash.jpeg",
  },
  {
    title: "Headlight Restoration",
    description: "Removes yellowing & oxidation for better visibility.",
    price: 30,
    image:
      "/services/headlight-wash.jpg",
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting protection against dirt & scratches.",
    price: 100,
    image:
      "/services/ceramic-wash.jpeg",
  },
  {
    title: "Automatic Wash",
    description: "Full detailing & wax polish by using automatic machines.",
    price: 150,
    image:
      "/services/automatic-wash.jpeg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#181818]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">Our Services</h2>
        <p className="text-white mt-2">
          Choose the perfect service for your car!
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
