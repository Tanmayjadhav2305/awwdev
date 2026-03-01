import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-[9999] transition-all pb-[1px] duration-300 ${scrolled ? 'bg-aww-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', border: 'none', outline: 'none' }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

                {/* Brand Logo */}
                <a href="/" className="flex items-center group relative h-10 w-48 md:w-[220px]">
                    <img
                        src="/awwdev-logo-3.png"
                        alt="Awwdev Logo"
                        className="absolute top-1/2 left-0 -translate-y-1/2 h-[100px] md:h-[140px] lg:h-[180px] w-auto object-contain origin-left group-hover:scale-[1.03] transition-transform duration-500 ease-out pointer-events-none"
                    />
                </a>

                {/* Desktop Links Pill */}
                <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl">
                    <div className="flex items-center gap-6 xl:gap-8">
                        <a href="/" className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                        </a>
                        <a href="/#about" className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                            About Us
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                        </a>

                        <div
                            className="relative cursor-pointer flex items-center h-full"
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                        >
                            <a href="/#services" className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-6 -my-6">
                                Services
                                <motion.svg
                                    animate={{ rotate: isServicesHovered ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-3 h-3 text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </a>
                            {/* Dropdown menu */}
                            <AnimatePresence>
                                {isServicesHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-80 z-50 origin-top"
                                    >
                                        <div className="bg-[#050505]/90 border border-white/10 rounded-2xl p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
                                            {getAllServices().map((svc, i) => (
                                                <motion.div
                                                    key={svc.id}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05, duration: 0.3, ease: 'easeOut' }}
                                                >
                                                    <Link
                                                        to={`/services/${svc.id}`}
                                                        onClick={() => setIsServicesHovered(false)}
                                                        className="group block px-4 py-3 hover:bg-white/5 rounded-xl transition-all duration-300"
                                                    >
                                                        <span className="block text-sm font-semibold text-gray-200 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300">{svc.title}</span>
                                                        <span className="block text-xs text-gray-500 group-hover:text-primary-400 mt-1 transition-colors duration-300 line-clamp-1">{svc.shortDesc}</span>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="/#projects" className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                            Our Projects
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                        </a>
                        <a href="/#contact" className="group relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                        </a>
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
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Home</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">About Us</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Services</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="/#projects" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Our Projects</motion.a>
                            <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-wide text-white hover:text-primary-400 transition-colors">Contact</motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
