import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface HeroProps {
    setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
    return (
        <section className="h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl opacity-30"
                />
            </div>

            <div className="z-10 space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-primary font-medium tracking-wide"
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                >
                    MILIND RAJPUT
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-3xl text-gray-300 font-light h-20"
                >
                    <Typewriter
                        options={{
                            strings: [
                                "Data Science Practitioner",
                                "ML Engineer",
                                "AI & Generative AI Developer",
                                "Developer • Creator • Learner"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-6 justify-center mt-8"
                >
                    <a href="https://github.com/211107032" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com/in/milind-rajput-087979255" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="mailto:rajputmilind31@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all">
                        <FaEnvelope className="text-2xl" />
                    </a>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => setActiveSection("projects")}
                    className="mt-12 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
                >
                    View My Work
                </motion.button>
            </div>
        </section>
    );
}
