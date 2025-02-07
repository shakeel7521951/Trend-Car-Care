import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white text-white text-center">
      <h2 className="text-3xl font-bold text-red-600">Get in Touch</h2>
      <p className="mt-2 text-[#181818]">Book your appointment now or ask any questions.</p>
      <button className="mt-4 bg-gray-100 text-red-600 py-2 px-6 rounded-lg hover:bg-gray-200 cursor-pointer">
        Contact Us
      </button>
    </section>
  );
};

export default ContactSection;
