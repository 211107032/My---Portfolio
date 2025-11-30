import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="max-w-4xl mx-auto h-full flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
                Get In <span className="text-primary">Touch</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
            >
                {status === "success" ? (
                    <div className="text-center py-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <FaPaperPlane className="text-3xl text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-8 px-6 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-400 text-xs">Name is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-400 text-xs">Valid email is required</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Your message here..."
                            />
                            {errors.message && <span className="text-red-400 text-xs">Message is required</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <FaSpinner className="animate-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <FaPaperPlane />
                                </>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                        )}
                    </form>
                )}
            </motion.div>
        </section>
    );
}
