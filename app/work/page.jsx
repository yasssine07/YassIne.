"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { BsArrowBarRight } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Nutritionist Website",
        description: "Developed a responsive and modern website for a nutritionist's office, featuring an appointment booking system, dietary program details, and an integrated blog for health tips.",
        stack: ["HTML 5", "CSS 3", "Bootstrap", "JavaScript"],
        image: "/asset/vitactive.png",
        live: "https://example.com/project1",
    },
    {
        num: "02",
        category: "DevOps",
        title: "Solife Automation and Monitoring",
        description: " Optimization of Solife installation and deployment with Jenkins and Ansible: Development of automated pipelines for increased efficiency. Extraction of metrics from the Solife application, virtual machines, and Jenkins using Prometheus, with monitoring via Grafana. Management of Solife dumps import/export with Oracle",
        stack: ["Ansible", "Docker", "Jenkins", "Grafana", "Prometheus", "Postegresql", "Nexus", "GitLab"],
        image: "/asset/solife.png",
        live: "https://example.com/project2",
    },
    {
        num: "03",
        category: "fullstack",
        title: "Medical Dashboard for Doctors",
        description: "Created a dashboard that allows doctors to manage patient personal data and appointments, and link the web application to the mobile app to insert medical articles and products for patients of each doctor.",
        stack: ["HTML 5", "CSS 3", "Bootstrap", "JavaScript", "Php", "Sql"],
        image: "/asset/dash.png",
        live: "https://example.com/project3",
    },
    {
        num: "04",
        category: "fullstack",
        title: "Professional Portfolio",
        description: "Designed and developed a professional portfolio showcasing projects, skills, and achievements, built with a sleek modern UI and optimized for fast performance using Next.js and TailwindCSS.",
        stack: ["HTML 5", "CSS 3", "TailwindCss", "JavaScript", "Next.js",],
        image: "/asset/portfil.png",
        live: "https://example.com/project3",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* Project Details */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-1">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.num}
                        </div>
                        <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                            {project.category} Project
                        </h2>
                        <div className="text-white/60 mb-4">
    <p className="leading-relaxed">{project.description}</p>
</div>
<div className="text-accent/80">
    <ul className="space-y-1 list-disc pl-5">
        {project.stack.map((tech, index) => (
            <li key={index} className="text-sm">
                {tech}
            </li>
        ))}
    </ul>
</div>
                        <div className="flex gap-4 mt-4">
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-accent hover:underline"
                            >
                                Live Demo <BsArrowBarRight className="ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <div className="w-full xl:w-[50%] order-1 xl:order-2">
                        <Swiper
                            
                            
                            spaceBetween={20}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                            className="h-[460px]"
                        >
                            {projects.map((proj, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                                        <Image
                                            src={proj.image}
                                            alt={`Preview of ${proj.title}`}
                                            fill
                                            className="rounded-xl hover:opacity-90"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                          <WorkSliderBtns 
    containerStyles="flex gap-2 absolute bottom-4 left-4 z-20 w-max justify-center" 
    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
/>


                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
