import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#030303] pt-24 pb-12 overflow-hidden border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
            {/* Top Gradient Highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-900/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-5 pr-0 lg:pr-12">
                        <a href="/" className="inline-block mb-8 group">
                            <img
                                src="/awwdev-logo-3.png"
                                alt="Awwdev Logo"
                                className="h-16 sm:h-20 lg:h-28 w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-500 will-change-transform"
                            />
                        </a>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 max-w-md font-light">
                            We architect high-performance digital infrastructures designed for relentless growth and uncompromised scalability.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:scale-110 hover:border-primary-400 transition-all duration-300 shadow-lg">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:scale-110 hover:border-primary-400 transition-all duration-300 shadow-lg">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:scale-110 hover:border-primary-400 transition-all duration-300 shadow-lg">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:col-span-1 lg:col-span-2 lg:ml-auto">
                        <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Services</h3>
                        <ul className="space-y-4">
                            {getAllServices().slice(0, 4).map((svc) => (
                                <li key={svc.id}>
                                    <Link to={`/services/${svc.id}`} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm lg:text-base">
                                        {svc.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="sm:col-span-1 lg:col-span-2 lg:ml-auto">
                        <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="/#about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm lg:text-base">About Us</a></li>
                            <li><a href="/#projects" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm lg:text-base">Our Projects</a></li>
                            <li><a href="/#about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm lg:text-base">Careers</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm lg:text-base">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sm:col-span-2 lg:col-span-3 lg:ml-auto">
                        <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Communication</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:Support@awwdev.net" className="group flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 w-fit">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary-500 transition-all duration-300">
                                        <Mail className="w-4 h-4 text-primary-400 group-hover:text-white" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">Support@awwdev.net</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} awwdev. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
