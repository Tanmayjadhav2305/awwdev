import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Enterprise builds typically range from 3 to 6 months depending on complexity. However, our agile methodology ensures you see functional, deployable iterations every 2-3 weeks. We prioritize velocity without sacrificing security."
    },
    {
        question: "Do you provide ongoing maintenance and scaling?",
        answer: "Absolutely. We view launch as the starting line. We offer comprehensive SLA-backed maintenance, server monitoring, and continuous scaling architecture to ensure your product handles user growth seamlessly."
    },
    {
        question: "How do you handle data security and compliance?",
        answer: "Security is baked into our architecture from Day 1. We utilize military-grade encryption, strict IAM roles on AWS/GCP, and adhere to industry-standard compliance frameworks (SOC2, HIPAA, GDPR) based on your specific requirements."
    },
    {
        question: "What does your typical tech stack look like?",
        answer: "While we are technology-agnostic and choose the right tool for the job, we specialize in high-performance stacks: React/Next.js for the frontend, Node.js or Go for the hyper-scalable backend, and precise cloud orchestration via AWS."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 relative bg-[#030303] overflow-hidden" id="faq">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Clear Expectations</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Frequently Asked Questions.
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`border ${isActive ? 'border-primary-500/30 bg-primary-500/5' : 'border-white/10 bg-[#0a0a0a]/50'} rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl`}
                            >
                                <button
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="text-lg font-medium text-white">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-primary-500 border-primary-500 text-[#050505]' : 'border-white/20 text-gray-400 bg-transparent'}`}>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-400 leading-relaxed font-light">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
