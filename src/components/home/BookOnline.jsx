import React from "react";

const BookOnline = () => {
  const steps = [
    {
      number: 1,
      title: "Visit Trend Car Care Website",
      description: "Go to our website and explore all the available car wash services."
    },
    {
      number: 2,
      title: "Locate Nearest Trend Car Care",
      description: "Enter your address or postcode to find the nearest car wash location."
    },
    {
      number: 3,
      title: "Choose a Service Package",
      description: "Select a car wash package that fits your needs and budget."
    },
    {
      number: 4,
      title: "Book Your Appointment",
      description: "Select a convenient time slot and confirm your booking."
    },
    {
      number: 5,
      title: "Prepare Your Car",
      description: "Ensure your car is ready for the wash at the chosen time."
    },
    {
      number: 6,
      title: "Enjoy a Clean Car",
      description: "Relax and enjoy your spotless car once our team is done."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-lg font-semibold text-red-600 uppercase tracking-wide">How It Works</p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 sm:w-[60%] mx-auto">
          How To Book Online at Trend Car Care
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full mb-4">
              {step.number}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookOnline;
