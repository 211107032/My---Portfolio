import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "SMART HEALTH",
        subtitle: "Disease Management System",
        description: "ML-based health prediction platform using SVM, RF, GBM, KNN, Naive Bayes. Features Flask backend for inference, dynamic UI, and provides workouts, diet plans, and medication insights.",
        tech: ["Python", "Flask", "Scikit-Learn", "REST API"],
        github: "#",
        demo: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "FOOD ORDERING CHATBOT",
        subtitle: "Dialogflow Integration",
        description: "NLU-powered chatbot with real-time webhook-based order management. Integrated MySQL database for users and orders, built with FastAPI.",
        tech: ["Python", "FastAPI", "Dialogflow", "MySQL"],
        github: "#",
        demo: "#",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "AGRIYIELD",
        subtitle: "Crop Yield Prediction",
        description: "ML-based crop prediction system combining historical farming data and real-time weather data. Random Forest algorithm achieved highest accuracy.",
        tech: ["Python", "Flask", "OpenWeatherMap", "ML"],
        github: "#",
        demo: "#",
        color: "from-green-500 to-emerald-500"
    }
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto h-full flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
                Featured <span className="text-primary">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto pb-20 pr-2 custom-scrollbar">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative h-[400px] perspective-1000"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:border-primary/50">

                            <div>
                                <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.color} mb-4`}></div>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-sm text-primary mb-4">{project.subtitle}</p>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
