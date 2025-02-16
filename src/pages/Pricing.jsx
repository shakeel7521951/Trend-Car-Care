import banner from "../assets/home/pricing_banner.png";
import PricingList from "../components/pricing/PricingList";

const Pricing = () => {
  return (
    <div className="mt-20">
      <img
        src={banner}
        alt="Pricing Banner"
        className="h-[40vh] sm:h-[50vh] w-full object-center object-cover "
      />
      <PricingList />
    </div>
  );
};

export default Pricing;
