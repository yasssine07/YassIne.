"use client";
import { motion } from "framer-motion";

const StairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Fonction pour inverser l'index des steps
const reverseIndex = (index) => {
    const totalSteps = 6; // Total des étapes
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <div className="relative h-screen w-screen">
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={StairsAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1, // Correction ici
                        }}
                        className="h-full w-full bg-white absolute"
                        style={{ zIndex: reverseIndex(index) }}
                    />
                );
            })}
        </div>
    );
};

export default Stairs;
