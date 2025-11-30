import { motion } from "framer-motion";
import Image from "next/image";
import { config } from "@/config";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl"
            >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="relative group">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20 relative z-10">
                            <Image
                                src={config.profileImage}
                                alt={config.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                    </div>

                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            Passionate data science practitioner skilled in machine learning, statistical analysis, deep learning, NLP, computer vision, and end-to-end AI application development. Strong at transforming raw data into actionable insights and building full-stack ML/AI solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span>Location: Shirpur, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>Role: {config.role}</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Open to Opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
