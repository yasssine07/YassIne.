"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={pathname} // Clé unique pour la transition
                    className="relative"
                >
                    {/* Animation des escaliers */}
                    <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>

                    {/* Overlay avec fondu */}
                    <motion.div
                        className="h-screen w-screen fixed bg-gray-900 top-0 pointer-events-none z-30"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                        }}
                    />
                    
                    {/* Contenu de la page */}
                    <div className="relative">{children}</div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default StairTransition;
