import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#030303] pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src="/awwdev-logo-3.png" alt="Awwdev Logo" className="w-[200px] md:w-[240px] h-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            We architect high-performance digital infrastructures designed for relentless growth and uncompromised scalability.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Enterprise Web Dev</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Cloud Architecture</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">System Integration</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Performance Audit</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Our Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                                <span className="text-gray-400 text-sm">Support@awwdev.net</span>
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
