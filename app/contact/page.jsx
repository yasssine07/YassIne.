"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simuler la soumission
        console.log("Formulaire soumis : ", formData);

        // Réinitialiser le formulaire
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0  bg-gray-900"
        >
            <div className="container mx-auto px-4">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-400">Let's work together</h1>
                    <p className="text-gray-400 mt-2">
        We are excited to collaborate with you! Whether you have a project in mind or just want to discuss ideas, feel free to reach out. Let’s turn your vision into reality together.
    </p>
                </div>

                {/* Formulaire et informations */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Formulaire */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-8 rounded-xl flex-1 shadow-md"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                                value={formData.firstname}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                                value={formData.lastname}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 bg-gray-700 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="" disabled>
                                    Select a service
                                </option>
                                <option value="Web Development">Web Development</option>
                                <option value="DevOps">DevOps</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Consulting">Consulting</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Type your message here."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="5"
                                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-400 text-gray-900 font-bold rounded-md hover:bg-green-500 transition"
                        >
                            Send message
                        </button>
                    </form>

                    {/* Informations */}
                    <div className="flex flex-col gap-6 text-gray-400">
                        <div className="flex items-center gap-4">
                            <span className="text-green-400 text-xl">📞</span>
                            <div>
                                <p className="text-white">Phone</p>
                                <p>(+216) 26 889 400</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-green-400 text-xl">📧</span>
                            <div>
                                <p className="text-white">Email</p>
                                <p>Jenhaniyassin02@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-green-400 text-xl">📍</span>
                            <div>
                                <p className="text-white">Address</p>
                                <p>Tunisia, Soliman 8020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
