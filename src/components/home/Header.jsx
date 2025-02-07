// import TREND_POLYTOP from "../../assets/home/TREND_POLYTOP.mov";

const Header = () => {
  return (
    <div className="relative w-full h-screen sm:h-[90vh] overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={TREND_POLYTOP} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex justify-center items-center text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight w-[85%] sm:w-[65%] md:w-[50%] lg:w-[40%]">
          Sparkling Clean, Every Time
        </h1>
      </div>
    </div>
  );
};

export default Header;
