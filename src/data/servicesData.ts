import { Code, Search, PenTool, LayoutTemplate } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SubService {
    id: string;
    title: string;
    icon: LucideIcon;
    shortDesc: string;
    description: string;
    features: string[];
    technologies: string[];
}

export interface ServiceDetail {
    id: string;
    title: string;
    icon: LucideIcon;
    shortDesc: string;
    heroHeadline: string;
    heroSubheadline: string;
    overview: string;
    subServices: SubService[];
    caseStudyMetric?: string;
    caseStudyText?: string;
}

export const servicesData: Record<string, ServiceDetail> = {
    "website-development": {
        id: "website-development",
        title: "Website Development",
        icon: Code,
        shortDesc: "End-to-end digital solutions spanning UI/UX tailored design, custom coding, CMS implementations, and technical SEO.",
        heroHeadline: "Engaging Digital Real Estate.",
        heroSubheadline: "We build modern, responsive, and blazing-fast experiences tailored exactly to your brand.",
        overview: "From stunning landing pages to expansive corporate portals, we build websites that perform flawlessly across all devices and turn visitors into customers. Whether it's a rapidly deployable WordPress site or a custom React application, we engineer for maximum impact.",
        caseStudyMetric: "4x",
        caseStudyText: "Increase in average time spent on site after our complete front-end redesigned flows.",
        subServices: [
            {
                id: "ui-ux-design",
                title: "UI/UX Design",
                icon: PenTool,
                shortDesc: "Intuitive, conversion-optimized interfaces that leave a lasting impression.",
                description: "We don't just make things look pretty. We engineer user paths designed to minimize friction and maximize engagement. From wireframing to high-fidelity prototyping, our design systems are built to scale and convert.",
                features: ["Design Systems", "User Testing & Heuristics", "Micro-Interactions"],
                technologies: ["Figma", "Framer", "Spline (3D)", "Rive", "Adobe CC"]
            },
            {
                id: "hardcoded-development",
                title: "Hardcoded & Custom Architecture",
                icon: Code,
                shortDesc: "Custom, high-performance web applications built to handle massive concurrency without compromise.",
                description: "Our web engineering team focuses on component-driven development, server-side rendering for unparalleled performance, and robust state management. Delivered exactly to specifications.",
                features: ["Micro-Frontend Ready", "Performance First", "Complex Integrations"],
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
            },
            {
                id: "cms-development",
                title: "CMS: WordPress & Shopify",
                icon: LayoutTemplate,
                shortDesc: "Scalable, merchant-friendly platforms giving you maximum control over your content and inventory.",
                description: "Leverage the world's most powerful content management systems. We build headless Shopify storefronts and hyper-optimized WordPress solutions that are easy for your team to manage, while maintaining enterprise performance.",
                features: ["Custom Theme Engineering", "Headless Integrations", "E-commerce Optimization"],
                technologies: ["WordPress", "Shopify Plus", "Liquid", "PHP", "GraphQL"]
            },
            {
                id: "seo",
                title: "SEO & Growth",
                icon: Search,
                shortDesc: "Data-driven strategies to dominate search results, outrank competition, and drive high-intent organic traffic to your platform.",
                description: "Building a beautiful application is only step one. We implement rigorous technical SEO to ensure your product actually gets found by the people who need it, outranking your competition.",
                features: ["Technical SEO", "Programmatic SEO", "Semantic HTML Architecture"],
                technologies: ["Lighthouse", "Ahrefs API", "Puppeteer", "Google Search Console"]
            }
        ]
    }
};

export const getAllServices = () => Object.values(servicesData);
export const getServiceById = (id: string) => servicesData[id];
