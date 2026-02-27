import { motion } from 'framer-motion';

const countries = [
    { name: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
    { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { name: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    { name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
    { name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
    { name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
    { name: 'India', flag: 'https://flagcdn.com/in.svg' },
    { name: 'Brazil', flag: 'https://flagcdn.com/br.svg' }
];

export default function GlobalPresence() {
    // Duplicate the array to create a seamless loop
    const duplicatedCountries = [...countries, ...countries];

    return (
        <section className="py-12 border-y border-white/5 bg-aww-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">We Are Serving In</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></div>
                </div>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Left and Right Fade Masks */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-aww-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-aww-dark to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-16 min-w-max px-8 items-center"
                    animate={{ x: [0, -1920] }} // Adjust based on total width
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35 // Adjust speed here
                    }}
                >
                    {duplicatedCountries.map((country, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:border-primary-500/50 group-hover:bg-white/10 transition-all overflow-hidden p-1">
                                <img src={country.flag} alt={`${country.name} flag`} className="w-full h-full object-contain rounded-sm" />
                            </div>
                            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{country.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
