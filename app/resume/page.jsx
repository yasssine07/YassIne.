"use client";

import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaJava,
    FaJenkins,
    FaDocker,
    FaPython,
    FaLinux,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Resume = () => {
    const about = {
        title: "About me",
        description: "I am a passionate developer with experience in various technologies and a love for learning new skills.",
        info: [
            { fieldName: "Name", fieldValue: "Yassine Jenhani" },
            { fieldName: "Phone", fieldValue: "(+216) 26 889 400" },
            { fieldName: "Experience", fieldValue: "1+ years" },
            { fieldName: "Nationality", fieldValue: "Tunisian" },
            { fieldName: "Freelance", fieldValue: "Available" },
            { fieldName: "Email", fieldValue: "Jenhaniyassin02@gmail.com" },
            { fieldName: "Languages", fieldValue: "Arabic, English, French, German" },
        ],
    };

    const experience = {
        title: "My experience",
        description: "Here are some of the key milestones in my professional journey.",
        items: [
            { company: "VERMEG", position: "DevOps Developer Intern", duration: "2024 - 6 Months" },
            { company: "Electro Plus", position: "Full Stack Developer Intern", duration: "Summer 2023" },
            { company: "Technique Infos et Services", position: "Front-end Developer Intern", duration: "Summer 2022" },
            { company: "HULT PRIZE", position: "Deputy Team Leader and Project Department Head", duration: "2023 - 2024" },
            { company: "ENACTUS", position: "Media Manager", duration: "2022 - 2023" },
        ],
    };

    const education = {
        title: "My education",
        description: "Here is my academic background.",
        items: [
            { institution: "iTeam University", degree: "Engineer’s Degree", duration: "2024 - 2027" },
            {
                institution: "Institut Supérieur d’Informatique du Kef",
                degree: "Bachelor’s Degree in Software Engineering and Information Systems",
                duration: "2021 - 2024",
            },
            { institution: "Lycée Rue de la Plage Soliman", degree: "High School Diploma in Computer Science", duration: "2017 - 2021" },
        ],
    };

    const skills = {
        title: "My skills",
        description: "A list of technical skills and tools I have expertise in.",
        skillList: [
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3 />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <FaFigma />, name: "Figma" },
            { icon: <FaJenkins />, name: "Jenkins" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <FaJava />, name: "Java" },
            { icon: <FaPython />, name: "python" },
            { icon: <FaLinux />, name: "Linux" },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience" className="transition hover:bg-green-500 hover:text-white active:scale-95 rounded-full px-4 py-2 text-center">
                            Experience
                        </TabsTrigger>
                        <TabsTrigger value="education" className="transition hover:bg-green-500 hover:text-white active:scale-95 rounded-full px-4 py-2 text-center">
                            Education
                        </TabsTrigger>
                        <TabsTrigger value="skills" className="transition hover:bg-green-500 hover:text-white active:scale-95 rounded-full px-4 py-2 text-center">
                            Skills
                        </TabsTrigger>
                        <TabsTrigger value="about" className="transition hover:bg-green-500 hover:text-white active:scale-95 rounded-full px-4 py-2 text-center">
                            About Me
                        </TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* Experience Section */}
                        <TabsContent value="experience">
                            <div className="flex flex-col gap-6 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-gray-400 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-gray-800 py-6 px-8 rounded-xl">
                                                <span className="text-green-400">{item.duration}</span>
                                                <h4 className="text-lg font-semibold">{item.position}</h4>
                                                <p className="text-gray-400">{item.company}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education Section */}
                        <TabsContent value="education">
                            <div className="text-center flex flex-col gap-6 xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="text-gray-400">{education.description}</p>
                                <ul className="mt-6 space-y-4">
                                    {education.items.map((edu, index) => (
                                        <li key={index} className="bg-gray-800 py-4 px-6 rounded-xl">
                                            <span className="text-green-400">{edu.duration}</span>
                                            <h4 className="text-lg font-semibold">{edu.degree}</h4>
                                            <p className="text-gray-400">{edu.institution}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* Skills Section */}
                        <TabsContent value="skills">
                            <div className="text-center flex flex-col gap-6">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="text-gray-400">{skills.description}</p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index} className="flex flex-col items-center">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-gray-800 rounedd-xl flex justify-center items-center group">
                                                       <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                     <p className="mt-2 text-gray-400 capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* About Section */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className=" flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-h-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                             
                                
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
