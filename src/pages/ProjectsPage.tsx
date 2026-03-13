import Projects from '../components/Projects';

export default function ProjectsPage() {
    return (
        <main className="pt-24">
            <Projects defaultShowAll={true} />
        </main>
    );
}
