"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
    {
        num: "01",
        title: "Web Development",
        description: "Design and develop scalable, responsive, and high-performance websites tailored to meet your business needs. Our solutions are optimized for user experience and cutting-edge technologies.",
        href: "#", // Lien par défaut
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Craft intuitive and visually stunning user interfaces and experiences. We focus on user-centric designs that enhance engagement and ensure seamless navigation.",
        href: "#", // Lien par défaut
    },
    {
        num: "03",
        title: "DevOps",
        description: "Streamline your development and deployment processes with our DevOps expertise. We implement automation, CI/CD pipelines, and robust monitoring to ensure efficient and reliable operations.",
        href: "#", // Lien par défaut
    },
    {
        num: "04",
        title: "Consulting",
        description: "Leverage our expertise to solve complex challenges, optimize workflows, and strategize for success. We offer tailored consulting services to drive growth and innovation.",
        href: "#", // Lien par défaut
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {service.map((service, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* Header with number and link */}
                            <div className="w-full flex items-center justify-between">
                                <div className="text-5xl font-extrabold  text-outline 
                                text-transparent group-hover:text-outline-hover
                                transition-all duration-500">
                                    {service.num}
                                </div>
                                {service.href ? (
                                    <Link href={service.href} 
                                        className="w-[70px] h-[70px] rounded-full  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                                        hover:-rotate-45">
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        
                                    </Link>
                                ) : (
                                    <span className="text-xl text-gray-500">
                                        <BsArrowDownRight />
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-white/80">{service.description}</p>

                            {/* Divider */}
                            <div className="border-b border-white/80 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
