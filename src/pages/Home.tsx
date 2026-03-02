import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Authority from '../components/Authority';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import TechPartners from '../components/TechPartners';

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <TechPartners />
                <About />
                <ServicesSection />
                <ProcessTimeline />
                <TechStack />
                <Projects />
                <Authority />
                <FAQ />
                <ContactSection />
            </main>
        </>
    );
}
