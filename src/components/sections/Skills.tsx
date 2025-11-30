import { motion } from "framer-motion";
import {
    FaPython, FaDatabase, FaBrain, FaRobot, FaTools, FaCode
} from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiMysql, SiGit, SiPowerbi } from "react-icons/si";

const skillCategories = [
    {
        title: "Programming",
        icon: FaCode,
        skills: ["Python", "SQL", "C", "JavaScript"],
        color: "text-blue-400"
    },
    {
        title: "ML & AI",
        icon: FaBrain,
        skills: ["Scikit-Learn", "XGBoost", "LightGBM", "ML Algorithms"],
        color: "text-green-400"
    },
    {
        title: "Deep Learning",
        icon: SiTensorflow,
        skills: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "ANN"],
        color: "text-orange-400"
    },
    {
        title: "NLP",
        icon: FaRobot,
        skills: ["NLTK", "SpaCy", "Gensim", "HuggingFace"],
        color: "text-purple-400"
    },
    {
        title: "Computer Vision",
        icon: SiOpencv,
        skills: ["OpenCV", "YOLO", "OCR", "Mediapipe", "Detectron"],
        color: "text-red-400"
    },
    {
        title: "Databases",
        icon: FaDatabase,
        skills: ["MySQL", "SQL Server", "DBeaver"],
        color: "text-yellow-400"
    },
    {
        title: "Tools",
        icon: FaTools,
        skills: ["Power BI", "Tableau", "Excel", "Streamlit", "Git", "VS Code"],
        color: "text-cyan-400"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <section className="max-w-6xl mx-auto h-full flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
                Technical <span className="text-primary">Skills</span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-20 pr-2 custom-scrollbar"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <category.icon className={`text-2xl ${category.color}`} />
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
