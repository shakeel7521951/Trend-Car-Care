import { motion } from "framer-motion"
import authen from '../assets/Aboutimg/authen.svg'
import dollar from '../assets/Aboutimg/dollar.svg'
import tick from '../assets/Aboutimg/tick.svg'
import veri from '../assets/Aboutimg/veri.svg'
export default function AboutAchiv() {
    // const achievements = [
    //     {
    //         title: "Service-wise Growth",
    //         description:
    //             "From a handful of services to an extensive portfolio! Now offering 161+ Home Maintenance, 38+ Personal Care, 8 Cleaning, and 5 Fumigation services, along with Monthly Maintenance Packages.",
    //     },
    //     {
    //         title: "Geographical Expansion",
    //         description:
    //             "What started in Lahore has now spread across Pakistan! We proudly serve Lahore, Karachi, Islamabad, and Rawalpindi with top-notch maintenance and personal care services.",
    //     },
    //     {
    //         title: "Customer Growth",
    //         description:
    //             "A growing community of 450K+ signups on our Customer App, 9K+ partners, 50K+ monthly website visitors, and 100K+ active users. Your trust fuels our journey!",
    //     },
    // ];
    const services = [
        {
            img: veri,
            title: "Verified Technicians & Beauticians",
            description:
                "Our service providers are verified, monitored, and evaluated to ensure your satisfaction.",
        },
        {
            img: tick,
            title: "Supervised Services",
            description:
                "Our customer service is available 7 days a week, ensuring responsiveness from order to delivery.",
        },
        {
            img: dollar,
            title: "Trustworthy Services",
            description:
                "Our highly skilled and experienced technicians guarantee top-quality service to win your trust.",
        },
        {
            img: authen,
            title: "Affordable Services",
            description:
                "We offer remarkable services at competitive rates with no hidden charges or overbilling.",
        },
    ];

    return (
        <div className="max-w-6xl  mx-auto  p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Achievements</h2>
            {/* <div className="space-y-6 sm:w-full w-[90%] mx-auto">
                {achievements.map((achiv, index) => (
                    <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl  sm:text-2xl text-nowrap font-semibold">{achiv.title}</h3>
                        <p className="text-gray-700 mt-2">{achiv.description}</p>
                    </div>
                ))}
            </div> */}


            {/* cards */}

            <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7 sm:mt-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-2xl border border-[#ec491c]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className=" p-6  flex justify-center items-center">
                            <img src={service.img} alt="icon" />
                        </div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
