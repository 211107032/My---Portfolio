import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const education = [
    {
        degree: "B.Tech in Artificial Intelligence & Machine Learning",
        school: "R. C. Patel Institute of Technology",
        year: "2021 – 2025",
        score: "CGPA: 6.33"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        school: "Maharashtra State Board",
        year: "2021",
        score: "83.50%"
    },
    {
        degree: "Secondary School Certificate (SSC)",
        school: "Maharashtra State Board",
        year: "2019",
        score: "82.20%"
    }
];

export default function Education() {
    return (
        <section className="max-w-4xl mx-auto h-full flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                My <span className="text-primary">Education</span>
            </motion.h2>

            <div className="grid grid-cols-1 gap-6">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center gap-6 hover:border-primary/50 transition-all group"
                    >
                        <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <FaGraduationCap className="text-3xl" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p className="text-gray-300 flex items-center gap-2 mt-1">
                                <FaUniversity className="text-sm" /> {edu.school}
                            </p>
                            <div className="flex gap-4 mt-3 text-sm">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">{edu.year}</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-medium">{edu.score}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
