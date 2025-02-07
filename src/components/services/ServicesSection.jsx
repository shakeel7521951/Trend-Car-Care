import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Basic Wash",
    description:
      "Our Basic Wash is a perfect solution for a quick refresh. It includes an exterior hand wash using premium car shampoo to remove dust, dirt, and minor road grime. Your car will be carefully rinsed with clean water and dried using microfiber towels to avoid scratches.",
    price: 15,
    image: "/services/basic-wash.jpeg",
  },
  {
    title: "Deluxe Wash",
    description:
      "The Deluxe Wash goes beyond a basic clean by focusing on both the exterior and interior of your car. It includes a thorough exterior wash, interior vacuuming, and detailed dashboard cleaning to remove dust and debris. ",
    price: 25,
    image: "/services/deluxe-wash.jpeg",
  },
  {
    title: "Premium Wash",
    description:
      "Our Premium Wash offers a complete cleaning experience for your vehicle. It includes an intensive hand wash, interior vacuuming, streak-free glass cleaning, dashboard polishing, and deep seat dust removal. ",
    price: 50,
    image: "/services/premium-wash.jpeg",
  },
  {
    title: "Headlight Restoration",
    description:
      "Over time, headlights become cloudy, yellowed, or oxidized due to exposure to UV rays and environmental factors. Our Headlight Restoration service restores clarity and brightness by using professional-grade cleaning, sanding, and polishing techniques.",
    price: 30,
    image: "/services/headlight-wash.jpg",
  },
  {
    title: "Ceramic Coating",
    description:
      "Protect your car with our advanced Ceramic Coating service. This high-performance protective layer shields your vehicle’s paint from dirt, water stains, UV rays, bird droppings, and minor scratches.",
    price: 100,
    image: "/services/ceramic-wash.jpeg",
  },
  {
    title: "Automatic Wash",
    description:
      "For those who need a quick, high-quality clean, our Automatic Wash is the perfect choice. Your car will go through a state-of-the-art automated system that uses soft-touch brushes, high-pressure jets, and premium foam to remove dirt and grime efficiently.",
    image: "/services/automatic-wash.jpeg",
    price: 150,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">Our Services</h2>
        <p className="text-black text-xl mt-2">
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
