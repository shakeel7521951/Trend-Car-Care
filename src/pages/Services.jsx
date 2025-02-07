import React from "react";
import HeroSection from "../components/services/HeroSection";
import ServicesSection from "../components/services/ServicesSection";
import ContactSection from "../components/services/ContactSection";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Testimonials from "../components/services/Testimonials";

const Services = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Services;
