"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
    const [activeSection, setActiveSection] = useState("hero");

    const renderSection = () => {
        switch (activeSection) {
            case "hero": return <Hero setActiveSection={setActiveSection} />;
            case "about": return <About />;
            case "skills": return <Skills />;
            case "projects": return <Projects />;
            case "experience": return <Experience />;
            case "education": return <Education />;
            case "blog": return <Blog />;
            case "contact": return <Contact />;
            default: return <Hero setActiveSection={setActiveSection} />;
        }
    };

    return (
        <main className="flex h-screen w-screen overflow-hidden bg-dark relative">
            {/* Background Particles/Animation can go here */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-150 brightness-100"></div>

            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            <section className="flex-1 h-full relative z-10 overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full h-full p-4 md:p-8 overflow-y-auto"
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </section>
        </main>
    );
}
