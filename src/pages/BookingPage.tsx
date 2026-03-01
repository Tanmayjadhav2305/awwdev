import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Globe, User, Mail, Phone, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BookingPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In Option B: We mock the submission for now
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-32 pb-24 flex items-center justify-center relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 p-12 max-w-lg w-full text-center bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl"
                >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Meeting Scheduled!</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        We have received your strategy call request. A Google Meet link has been generated and sent to your email address. We look forward to speaking with you.
                    </p>
                    <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#050505] rounded-xl font-bold hover:scale-105 transition-transform">
                        Return Home <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#050505]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            {/* Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-400 font-medium text-sm tracking-wide mb-6 uppercase">
                            Strategy Consultation
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Book Your Discovery Call
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Fill out the details below to schedule your strategy session. Tell us about your goals so we can come prepared to build your scalable digital infrastructure.
                        </p>
                    </div>

                    <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Personal Info Group */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                                    <User className="w-5 h-5 text-primary-500" /> Personal Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-500" />
                                            </div>
                                            <input required type="text" className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="John Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-500" />
                                            </div>
                                            <input required type="email" className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                                        <div className="flex bg-[#111] border border-white/10 rounded-xl overflow-hidden focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all">
                                            <div className="flex items-center pl-4 bg-transparent border-r border-white/10">
                                                <Phone className="h-5 w-5 text-gray-500 mr-2" />
                                                <select className="bg-transparent text-gray-300 outline-none pr-2 py-3 appearance-none cursor-pointer">
                                                    <option value="+1">US (+1)</option>
                                                    <option value="+44">UK (+44)</option>
                                                    <option value="+61">AU (+61)</option>
                                                    <option value="+91">IN (+91)</option>
                                                </select>
                                            </div>
                                            <input required type="tel" className="w-full bg-transparent py-3 px-4 text-white placeholder-gray-500 outline-none" placeholder="(555) 000-0000" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scheduling Group */}
                            <div className="space-y-6 pt-4">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                                    <Calendar className="w-5 h-5 text-primary-500" /> Scheduling
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-medium text-gray-300">Time Zone *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Globe className="h-5 w-5 text-gray-500" />
                                            </div>
                                            <select required className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none appearance-none cursor-pointer">
                                                <option value="" disabled selected>Select your time zone</option>
                                                <option value="America/New_York">Eastern Time (ET)</option>
                                                <option value="America/Chicago">Central Time (CT)</option>
                                                <option value="America/Denver">Mountain Time (MT)</option>
                                                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                                                <option value="Europe/London">London (GMT/BST)</option>
                                                <option value="Europe/Paris">Central Europe (CET)</option>
                                                <option value="Asia/Dubai">Dubai (GST)</option>
                                                <option value="Asia/Kolkata">India (IST)</option>
                                                <option value="Australia/Sydney">Sydney (AEST)</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <ChevronRight className="h-5 w-5 text-gray-500 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Preferred Date *</label>
                                        <div className="relative">
                                            <input required type="date" className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none [&::-webkit-calendar-picker-indicator]:filter-invert-[1] [&::-webkit-calendar-picker-indicator]:opacity-50" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Time Slot *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Clock className="h-5 w-5 text-gray-500" />
                                            </div>
                                            <select required className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none appearance-none cursor-pointer">
                                                <option value="" disabled selected>Select an available time</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="13:00">01:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                                <option value="16:30">04:30 PM</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <ChevronRight className="h-5 w-5 text-gray-500 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details Group */}
                            <div className="space-y-6 pt-4">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                                    <MessageSquare className="w-5 h-5 text-primary-500" /> Project Details
                                </h3>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">How can we help you? *</label>
                                    <textarea required rows={4} className="w-full bg-[#111] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none" placeholder="Provide a brief overview of your goals, timeline, and current challenges..."></textarea>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-white text-[#050505] rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
                            >
                                Schedule Meeting & Generate Link
                            </motion.button>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                By scheduling a call, you agree to our Terms of Service and Privacy Policy. A Google Meet link will be automatically generated upon submission.
                            </p>

                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
