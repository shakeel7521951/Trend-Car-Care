import React from "react";

const ServiceCard = ({ title, description, price, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-red-600">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-600 font-semibold mt-3">${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
