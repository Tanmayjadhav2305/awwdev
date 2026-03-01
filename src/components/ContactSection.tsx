import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };

    return (
        <section className="py-32 relative bg-[#030303] overflow-hidden" id="contact">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWem0tMSAxbS0xIDFIIDFWMkgyenoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="pr-0 lg:pr-10"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-medium text-sm tracking-wide mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>Contact Us</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            Let's Build Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Next-Gen Platform.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light">
                            Ready to scale your digital infrastructure? Reach out to our engineering team to discuss your project requirements and technical architecture.
                        </motion.p>

                        <motion.div variants={itemVariants} className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent max-w-md">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 group hover:border-white/10 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500">
                                    <Mail className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1 font-medium">Email Support</p>
                                    <a href="mailto:Support@awwdev.net" className="text-lg text-white font-medium hover:text-primary-400 transition-colors">Support@awwdev.net</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
                        className="relative"
                    >
                        {/* Form Glowing Backdrop */}
                        <div className="absolute inset-0 bg-primary-500/5 blur-2xl rounded-[40px] pointer-events-none" />

                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] isolation-auto">
                            {/* Inner Top Highlight */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* First Name */}
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="firstName"
                                            className="absolute left-0 top-3 text-base text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                                        >
                                            First Name
                                        </label>
                                    </div>

                                    {/* Last Name */}
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="lastName"
                                            className="absolute left-0 top-3 text-base text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                                        >
                                            Last Name
                                        </label>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary-500 transition-colors peer"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-3 text-base text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                </div>

                                {/* Project Details */}
                                <div className="relative group pt-4">
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all resize-none peer"
                                        placeholder=" "
                                    ></textarea>
                                    <label
                                        htmlFor="details"
                                        className="absolute left-5 top-4 text-base text-gray-500 transition-all duration-300 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-500 peer-focus:bg-[#0a0a0a] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:bg-[#0a0a0a] peer-[:not(:placeholder-shown)]:px-1"
                                    >
                                        Project Details
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="group relative w-full flex items-center justify-center gap-3 bg-white text-[#050505] font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 mt-4"
                                >
                                    <span className="relative z-10">Send Message</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
