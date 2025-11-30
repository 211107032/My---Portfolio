import {
    FaHome,
    FaUser,
    FaCode,
    FaBriefcase,
    FaGraduationCap,
    FaProjectDiagram,
    FaBlog,
    FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const navItems = [
    { id: "hero", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "skills", icon: FaCode, label: "Skills" },
    { id: "projects", icon: FaProjectDiagram, label: "Projects" },
    { id: "experience", icon: FaBriefcase, label: "Experience" },
    { id: "education", icon: FaGraduationCap, label: "Education" },
    { id: "blog", icon: FaBlog, label: "Blog" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
];

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:h-full md:w-20 md:flex md:flex-col md:justify-center md:items-center z-50">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 md:px-2 md:py-6 flex md:flex-col gap-4 shadow-lg md:h-auto">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className="relative group p-2 rounded-full transition-all duration-300 hover:bg-white/20"
                        aria-label={item.label}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute inset-0 bg-primary/80 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <item.icon
                            className={clsx(
                                "relative z-10 text-xl transition-colors duration-300",
                                activeSection === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                            )}
                        />

                        {/* Tooltip for Desktop */}
                        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-white text-dark px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block whitespace-nowrap pointer-events-none">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
