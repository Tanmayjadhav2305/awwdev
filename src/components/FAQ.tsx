import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Do you only build websites or also help with growth?",
        answer: "We don’t just build websites — we architect scalable growth infrastructure. That means performance optimization, SEO foundations, conversion-focused design, and systems built for long-term scale."
    },
    {
        question: "What industries do you work with?",
        answer: "We primarily work with startups, SaaS brands, and eCommerce businesses targeting growth-focused markets in the US and Europe."
    },
    {
        question: "Will my website be optimized for mobile?",
        answer: "Absolutely. Every website we build is mobile-first, responsive, and performance-optimized across devices."
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes. We offer monthly maintenance plans covering updates, security, backups, performance monitoring, and minor content edits."
    },
    {
        question: "What platform do you use?",
        answer: "We primarily work with:\n• WordPress\n• WooCommerce\n• Shopify (for eCommerce)\n• Custom solutions when required\n\nPlatform choice depends on your scalability needs."
    },
    {
        question: "Do you offer SEO services?",
        answer: "Yes. We implement technical SEO foundations in every build and offer advanced SEO retainer plans for long-term organic growth."
    },
    {
        question: "What makes Awwdev different?",
        answer: "We approach every project as a growth system — not just a website. Strategy, scalability, performance, and profitability drive every decision we make."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="pt-8 pb-16 relative bg-[#030303] overflow-hidden" id="faq">
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
                                            <div className="px-6 pb-6 text-gray-400 leading-relaxed font-light whitespace-pre-wrap">
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
