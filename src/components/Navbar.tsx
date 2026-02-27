import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-aww-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

                {/* Brand Logo */}
                <a href="#" className="flex items-center group relative h-10 w-48 md:w-[220px]">
                    <img
                        src="/awwdev-logo-3.png"
                        alt="Awwdev Logo"
                        className="absolute top-1/2 left-0 -translate-y-1/2 h-[100px] md:h-[140px] lg:h-[180px] w-auto object-contain origin-left group-hover:scale-[1.03] transition-transform duration-500 ease-out pointer-events-none"
                    />
                </a>

                {/* Desktop Links Pill */}
                <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl">
                    <div className="flex items-center gap-6 xl:gap-8">
                        <a href="#" className="text-sm font-medium text-white hover:text-primary-400 transition-colors">Home</a>
                        <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>

                        <div className="relative group cursor-pointer">
                            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                                Services
                                <svg className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            {/* Dropdown menu */}
                            <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-48 z-50">
                                <div className="bg-aww-dark border border-white/10 rounded-xl p-2 shadow-xl">
                                    <a href="#services" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">Web Development</a>
                                    <a href="#services" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">Mobile Apps</a>
                                    <a href="#services" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">SEO & Marketing</a>
                                </div>
                            </div>
                        </div>

                        <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Projects</a>
                        <a href="#blogs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blogs</a>
                        <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact Us</a>
                        <a href="#support" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Technical Support</a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-gray-400 hover:text-white relative z-10"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)', transition: { duration: 0.5, ease: "easeInOut" } }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 w-full h-[100svh] bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col items-center justify-center gap-6 lg:hidden z-40 overflow-hidden"
                    >
                        {/* Close Button Inside */}
                        <button
                            className="absolute top-8 right-6 text-gray-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="flex flex-col items-center gap-8 w-full"
                        >
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="#" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Home</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">About Us</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Services</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Our Projects</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Contact</motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
