import buffing from "../assets/Aboutimg/best.jpeg";
import wash3 from "../assets/Aboutimg/lhr.jpg";
import washer from "../assets/Aboutimg/washer.jfif";
import aiwash from "../assets/Aboutimg/aiwash.webp";
export default function AboutDescr() {
    const images = [
        {
            img: buffing,
            clip: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        },
        {
            img: washer,
            clip: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
        },
        {
            img: wash3,
            clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        },
    ];

    const aboutContent = [
        {
            type: "heading",
            text: "About Us",
            className: "text-3xl font-bold text-blue-600 text-center",
        },
        {
            type: "paragraph",
            text: "We redefine car care with premium hand car wash and detailing services that prioritize both quality and sustainability. Established in 2019, our expert team brings over a decade of professional car wash experience to ensure a spotless, showroom-like finish for your vehicle.",
        },
        {
            type: "paragraph",
            text: "We proudly operate in seven major cities across Pakistan, including Lahore, Islamabad, Rawalpindi, Sialkot, Gujranwala, Faisalabad, and Gujrat, offering home-based services for maximum convenience.",
        },
        {
            type: "paragraph",
            text: "Our eco-friendly approach integrates the latest water reclamation technology and biodegradable products, ensuring an exceptional clean while preserving the environment. We are committed to providing a safe, sustainable, and satisfying experience for our customers, with a pay-only-when-satisfied policy that guarantees your peace of mind.",
        },
        {
            type: "list",
            items: [
                "💧 100% Hand Wash & Detailing",
                "🏠 Convenient Home-Based Services",
                "🌱 Biodegradable & Eco-Friendly Products",
                "😊 Pay Only When Satisfied",
            ],
        },
    ];

    return (
        <div className="w-full sm:w-[90%] mx-auto">
            <div className="w-full  sm:w-[90%] mx-auto mt-10 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* First Image (Single Line) */}
                <div className="sm:w-[70%] w-full mx-auto">
                    <div className=" px-10 sm:px-0 sm:mt-14 mb-3">
                        <img
                            src={images[0].img}
                            alt="First Image"
                            className="w-full h-full object-cover shadow-lg shadow-red-300"
                            style={{ clipPath: images[0].clip }}
                        />
                    </div>

                    <div className="w-full grid grid-cols-2 justify-center sm:px-0 px-10 gap-4">
                        {images.slice(1).map((img, index) => (
                            <div key={index} className="">
                                <img
                                    src={img.img}
                                    alt={`Slide ${index + 2}`}
                                    className="w-full h-full object-cover"
                                    style={{ clipPath: img.clip }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* About Section */}
                <div className="text-start px-3">
                    {aboutContent.map((item, index) => (
                        <div key={index}>
                            {item.type === "heading" && <h1 className={item.className} style={{color:'red'}}>{item.text}</h1>}
                            {item.type === "paragraph" && (
                                <p className="sm:text-lg text-xs text-gray-700 mt-4">{item.text}</p>
                            )}

                        </div>
                    ))}


                </div>

            </div>

            
            {/* services */}
           
            <div className="w-full flex md:flex-row flex-col gap-5 md:justify-between  sm:p-10">
                <div className="flex flex-col w-[100%] md:w-[50%] justify-center order-2 sm:order-1">
                    {aboutContent[4].items.map((item, index) => (
                        <div key={index} className="flex flex-col p-2 w-full ">
                            <span className="text-xl text-center md:text-start sm:text-nowrap text-gray-700 sm:text-xl ">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center md:justify-end lg:justify-center  order-1 sm:order-2 mt-3 w-full">
                    <img src={aiwash} alt="AI Wash Service" className=" w-[80%] sm:w-[60%] h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div >
    );
}
