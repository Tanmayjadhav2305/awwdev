import { Code, Smartphone, Search, PenTool, Database, Cloud, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceDetail {
    id: string;
    title: string;
    icon: LucideIcon;
    shortDesc: string;
    heroHeadline: string;
    heroSubheadline: string;
    overview: string;
    features: { title: string; desc: string }[];
    technologies: string[];
    caseStudyMetric?: string;
    caseStudyText?: string;
}

export const servicesData: Record<string, ServiceDetail> = {
    "website-development": {
        id: "website-development",
        title: "Website Development",
        icon: Globe,
        shortDesc: "Custom, high-conversion websites built to establish a powerful digital presence.",
        heroHeadline: "Engaging Digital Real Estate.",
        heroSubheadline: "We build modern, responsive, and blazing-fast websites tailored exactly to your brand.",
        overview: "From stunning landing pages to expansive corporate portals, we build websites that perform flawlessly across all devices and turn visitors into customers.",
        features: [
            { title: "Responsive Design", desc: "Flawless rendering on mobile, tablet, and desktop." },
            { title: "CMS Integration", desc: "Easy content management via headless CMS solutions." },
            { title: "Optimized Performance", desc: "Modern frameworks for instant interactivity and top Lighthouse scores." }
        ],
        technologies: ["React", "HTML/CSS", "Tailwind CSS", "Vite"],
        caseStudyMetric: "2x",
        caseStudyText: "Increase in average time spent on site after our complete front-end redesign."
    },
    "ui-ux-design": {
        id: "ui-ux-design",
        title: "UI/UX Design",
        icon: PenTool,
        shortDesc: "Intuitive, conversion-optimized interfaces that leave a lasting impression.",
        heroHeadline: "Design That Converts.",
        heroSubheadline: "Pixel-perfect interfaces backed by rigorous user psychology and conversion data.",
        overview: "We don't just make things look pretty. We engineer user paths designed to minimize friction and maximize engagement. From wireframing to high-fidelity prototyping, our design systems are built to scale.",
        features: [
            { title: "Design Systems", desc: "Scalable component libraries (Figma) that align perfectly with code." },
            { title: "User Testing", desc: "Data-backed iterations based on actual user heatmaps and recordings." },
            { title: "Micro-Interactions", desc: "Delightful animations that make the digital experience feel alive and responsive." }
        ],
        technologies: ["Figma", "Framer", "Spline (3D)", "Rive", "Adobe CC"],
        caseStudyMetric: "40%",
        caseStudyText: "Average reduction in user churn after implementing a complete Awwdev UX overhaul."
    },
    "seo": {
        id: "seo",
        title: "SEO",
        icon: Search,
        shortDesc: "Data-driven strategies to dominate search results and drive organic, high-intent traffic.",
        heroHeadline: "Data-Driven Visibility.",
        heroSubheadline: "Technical SEO integrated perfectly into your product's core.",
        overview: "Building a beautiful application is only step one. We implement rigorous technical SEO to ensure your product actually gets found by the people who need it.",
        features: [
            { title: "Technical SEO", desc: "Perfect Lighthouse scores, dynamic sitemaps, and optimized metadata." },
            { title: "Programmatic SEO", desc: "Automated generation of thousands of high-ranking landing pages." },
            { title: "Semantic HTML", desc: "Clean markup structure that search engines understand perfectly." }
        ],
        technologies: ["Next.js SSR", "Lighthouse", "Ahrefs API", "Puppeteer"],
        caseStudyMetric: "10x",
        caseStudyText: "ROI on organic search traffic within 6 months of implementing our technical SEO strategies."
    },
    "scalable-web-architecture": {
        id: "scalable-web-architecture",
        title: "Scalable Web Architecture",
        icon: Code,
        shortDesc: "Custom, high-performance web applications built to handle massive concurrency.",
        heroHeadline: "Scalable Web Architecture.",
        heroSubheadline: "We build enterprise-grade applications designed to handle complex data naturally.",
        overview: "Our web engineering team focuses on component-driven development, server-side rendering for unparalleled performance, and robust state management. Whether it's a B2B dashboard or a high-traffic portal, we deliver precision.",
        features: [
            { title: "React & Next.js", desc: "Lightning-fast, server-rendered applications that load instantly." },
            { title: "Micro-Frontend Ready", desc: "Decoupled architecture allowing disparate teams to deploy independently." },
            { title: "Performance First", desc: "Obsessive optimization for Core Web Vitals to maximize user retention." }
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
        caseStudyMetric: "300%",
        caseStudyText: "Increase in organic traffic post-migration to our custom Next.js architecture."
    },
    "backend-architecture": {
        id: "backend-architecture",
        title: "Backend Architecture",
        icon: Database,
        shortDesc: "Scalable databases and APIs built to handle millions of requests seamlessly.",
        heroHeadline: "Unbreakable Backend Systems.",
        heroSubheadline: "Distributed systems and hyper-scalable APIs engineered for massive throughput.",
        overview: "The engine that powers your product must be flawless. We build microservices, robust monolithic APIs, and optimized database schemas designed to handle enterprise data loads with zero latency spikes.",
        features: [
            { title: "Microservices", desc: "Decoupled logic allowing infinite horizontal scaling under load." },
            { title: "Database Optimization", desc: "Complex indexing, caching layers (Redis), and read-replica strategies." },
            { title: "API Gateways", desc: "Secure, rate-limited, and beautifully documented REST or GraphQL endpoints." }
        ],
        technologies: ["Node.js", "Go", "PostgreSQL", "Redis", "GraphQL", "Kafka"],
        caseStudyMetric: "10M+",
        caseStudyText: "Concurrent transactions processed daily on our custom ledger architecture."
    },
    "mobile-apps": {
        id: "mobile-apps",
        title: "Mobile Apps",
        icon: Smartphone,
        shortDesc: "Native and cross-platform mobile experiences that engage and retain users.",
        heroHeadline: "Engaging Mobile Experiences.",
        heroSubheadline: "Cross-platform and native engineering that puts your product flawlessly into the hands of millions.",
        overview: "We architect mobile applications that feel native, perform flawlessly under spotty network conditions, and leverage device hardware to the absolute maximum. We build for the App Store top charts.",
        features: [
            { title: "React Native", desc: "Write once, deploy everywhere with near-native performance metrics." },
            { title: "Offline Support", desc: "Robust local caching ensuring usability even without an internet connection." },
            { title: "Smooth Animations", desc: "60 FPS gesture-driven UI components for a premium feel." }
        ],
        technologies: ["React Native", "Swift", "Kotlin", "Expo", "SQLite", "Firebase"],
        caseStudyMetric: "4.9/5",
        caseStudyText: "Average App Store rating for mobile products architected by Awwdev."
    },
    "devops-cloud": {
        id: "devops-cloud",
        title: "DevOps and Cloud",
        icon: Cloud,
        shortDesc: "Robust infrastructure deployments ensuring 99.99% uptime and auto-scaling.",
        heroHeadline: "Infinite Cloud Scalability.",
        heroSubheadline: "Infrastructure as Code. Zero-downtime deployments. Unshakable security perimeters.",
        overview: "Stop worrying about servers. We orchestrate complex cloud environments on AWS or GCP, automating deployments (CI/CD) and ensuring your application stays online no matter how fast you grow.",
        features: [
            { title: "CI/CD Pipelines", desc: "Automated testing and zero-downtime deployment pipelines." },
            { title: "Infrastructure as Code", desc: "Repeatable, version-controlled infrastructure via Terraform or CDK." },
            { title: "Containerization", desc: "Docker and Kubernetes orchestration for ultimate workload flexibility." }
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
        caseStudyMetric: "99.999%",
        caseStudyText: "Uptime achieved across our managed enterprise cloud clusters."
    }
};

export const getAllServices = () => Object.values(servicesData);
export const getServiceById = (id: string) => servicesData[id];
