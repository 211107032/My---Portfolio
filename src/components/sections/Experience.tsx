import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
    {
        year: "2025",
        role: "Full Stack Data Science & Generative AI",
        company: "Naresh i Technologies",
        description: [
            "Built end-to-end ML, AI, Streamlit & Flask applications",
            "Developed Generative AI chatbots & predictive models",
            "Created full-stack AI dashboards and data-processing pipelines",
            "Integrated SQL, cloud APIs, and ML models into products"
        ]
    },
    {
        year: "2024",
        role: "Stranger Code at Converges",
        company: "Converges",
        description: [
            "Third Prize Winner",
            "Recognized for demonstrating coding proficiency and problem-solving skills in a competitive environment."
        ]
    },
    {
        year: "2024",
        role: "Python Pro Bootcamp",
        company: "Dr. Angela Yu",
        description: [
            "Mastered Python programming concepts",
            "Built various projects including games and data analysis tools",
            "Comprehensive training in modern Python development"
        ]
    },
    {
        year: "2024",
        role: "Web Development Bootcamp",
        company: "Dr. Angela Yu",
        description: [
            "Full-stack web development mastery",
            "Learned HTML, CSS, Javascript, Node, React, MongoDB and more",
            "Built real-world web applications"
        ]
    }
];

export default function Experience() {
    return (
        <section className="max-w-4xl mx-auto h-full flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                My <span className="text-primary">Certificates</span>
            </motion.h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                            <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                                {cert.year}
                            </span>
                            <h3 className="text-xl font-bold text-white">{cert.role}</h3>
                            <p className="text-gray-400 mb-4 flex items-center gap-2">
                                <FaAward className="text-sm" /> {cert.company}
                            </p>
                            <ul className="space-y-2">
                                {cert.description.map((item, i) => (
                                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
