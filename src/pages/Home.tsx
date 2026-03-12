import Hero from '../components/Hero';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import TechPartners from '../components/TechPartners';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

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
                <FAQ />
                <ContactSection />
            </main>
        </>
    );
}
