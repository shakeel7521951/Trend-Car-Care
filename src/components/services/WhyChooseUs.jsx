import React from "react";

const whyChooseUs = [
  {
    title: "Expert Technicians",
    description:
      "Our team consists of highly trained professionals who ensure your car gets the best treatment with precision and care. With years of experience, our technicians are equipped to handle any make or model, providing a level of service that guarantees satisfaction and the highest standards in vehicle care. Our experts continually update their skills and knowledge to stay at the forefront of the latest automotive care techniques and industry best practices, ensuring your vehicle receives top-tier care every time.",
    image: "/services/teh-team.jpg",
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use biodegradable and environmentally friendly cleaning products to keep your car shining without harming nature. Our commitment to sustainability ensures that we not only take care of your vehicle but also contribute to a cleaner, healthier planet by reducing the environmental impact of car washes. We pride ourselves on using non-toxic, cruelty-free products that are safe for both your car and the environment, making us the perfect choice for eco-conscious customers.",
    image: "/services/wash-products.jpg",
  },
  {
    title: "Fast & Efficient Service",
    description:
      "We respect your time! Our team ensures quick service without compromising quality, so you can get back on the road faster. We streamline our processes to make car washing and detailing fast, while maintaining the exceptional standards of care your car deserves. Whether you're on a tight schedule or simply want to keep things moving, we make sure you're in and out in no time. Our advanced scheduling system allows you to book your service in advance, so there's never any waiting around — just drop off your car and get back to your day.",
    image: "/services/fast-wash.jpg",
  },
  {
    title: "Advanced Technology",
    description:
      "Our facility is equipped with state-of-the-art technology to provide the most effective and safe cleaning solutions. From high-powered washers to automated drying systems, we utilize the latest innovations in car care to provide a deep clean that’s both efficient and gentle on your vehicle. This technology ensures every part of your car receives the optimal treatment, from the wheels to the roof. Our high-tech systems are designed to maximize results while minimizing water usage, reducing waste, and ensuring an environmentally responsible service.",
    image: "/services/advance wash.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us? 🌟
        </h2>

        <div className="space-y-6">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-1/2 h-full object-cover rounded-lg transform transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
