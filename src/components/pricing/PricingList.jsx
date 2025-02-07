const PricingList = () => {
  const services = [
    "Window Film",
    "Polish",
    "Protection",
    "Others",
    "Car Washing",
  ];

  return (
    <div className="mt-6">
      <div className="max-w-4xl bg-red-700 p-2 rounded-4xl shadow-md shadow-gray-400 mx-auto">
        <div className="flex justify-evenly items-center">
          {services.map((service, index) => (
            <div key={index} className="flex relative group">
              <div className="text-white p-2 cursor-pointer text-xs sm:text-xl relative">
                {service}
                <span className="absolute  bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" style={{left:'50%',transform:'translate(-50%,50%)'}}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingList;
