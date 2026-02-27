import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/5" id="contact">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-900/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-800/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Contact Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Build Your Next-Gen Platform.
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-lg">
                            Ready to scale your digital infrastructure? Reach out to our engineering team to discuss your project requirements and technical architecture.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email Support</p>
                                    <p className="text-lg text-white font-medium">Support@awwdev.net</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell us about your technical requirements..."></textarea>
                            </div>
                            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 rounded-xl transition-all">
                                Send Message
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
