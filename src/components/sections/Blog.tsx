import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaExternalLinkAlt, FaSpinner } from "react-icons/fa";

// Fallback data
const initialBlogs = [
    {
        _id: "1",
        title: "Crop Yield Prediction Using Machine Learning & Real-Time Weather Data",
        summary: "Published in IJCRT (2025). A comprehensive study on using Random Forest and real-time weather APIs to predict crop yields with high accuracy.",
        date: "2025",
        tags: ["Research", "ML", "Agriculture"],
        link: "#",
        featured: true
    },
    {
        _id: "2",
        title: "Building Scalable AI Applications with Flask & React",
        summary: "A guide on integrating Machine Learning models into full-stack web applications using Flask for backend inference and React for dynamic UIs.",
        date: "2024",
        tags: ["Web Dev", "AI", "Tutorial"],
        link: "#",
        featured: false
    },
    {
        _id: "3",
        title: "Understanding Transformers in NLP",
        summary: "Deep dive into the architecture of Transformers, Attention mechanisms, and their application in modern NLP tasks using HuggingFace.",
        date: "2024",
        tags: ["NLP", "Deep Learning"],
        link: "#",
        featured: false
    }
];

interface BlogType {
    _id: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    link: string;
    featured: boolean;
}

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogType[]>(initialBlogs);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blog');
                const data = await res.json();
                if (data.success && data.data.length > 0) {
                    // Format date if needed, or assume API returns compatible format
                    setBlogs(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs, using fallback data.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="max-w-5xl mx-auto h-full flex flex-col">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
                Recent <span className="text-primary">Publications & Blogs</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pb-20 pr-2 custom-scrollbar">
                {blogs.map((blog, idx) => (
                    <motion.div
                        key={blog._id || idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all group ${blog.featured ? 'md:col-span-2 bg-gradient-to-r from-primary/10 to-transparent' : ''}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-2">
                                {blog.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">
                                {new Date(blog.date).getFullYear() || blog.date}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                            {blog.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {blog.summary}
                        </p>

                        <a href={blog.link || "#"} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                            Read More <FaExternalLinkAlt className="text-xs" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
