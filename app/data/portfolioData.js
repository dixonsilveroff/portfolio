export const navItems = [
  { href: "#MyServices", label: "Services" },
  { href: "#MySkills", label: "Skills" },
  { href: "#AboutMe", label: "About" },
  { href: "#MyWork", label: "Work" },
  { href: "#ContactMe", label: "Contact" },
];

export const serviceItems = [
  {
    icon: "⚡",
    title: "Frontend Development",
    description:
      "I build interactive, performant interfaces from the ground up using React, Next.js, and vanilla JavaScript.",
    details: [
      "Single-page apps & progressive web apps",
      "Component-driven architecture",
      "API integration & state management",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX & Web Design",
    description:
      "I translate designs into responsive, pixel-perfect code - or design from scratch using modern web design principles.",
    details: [
      "Figma to code implementation",
      "WordPress & CMS customization",
      "Responsive layouts across all devices",
    ],
  },
  {
    icon: "🔍",
    title: "Auditing & Optimization",
    description:
      "I analyze existing websites for accessibility, performance, and SEO issues - then fix them.",
    details: [
      "WCAG compliance audits",
      "Core Web Vitals optimization",
      "Cross-browser & device testing",
    ],
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    description:
      "I ensure your site loads fast, ranks well, and delivers a smooth experience for every visitor.",
    details: [
      "Lighthouse & PageSpeed audits",
      "Lazy loading & code splitting",
      "Structured data & meta optimization",
    ],
  },
];

export const projects = [
  {
    role: "Lead Developer",
    name: "SkillBridge",
    description:
      "A companion platform for aspiring tech entrepreneurs. Built a responsive dashboard with curated learning paths, progress tracking, and community features - serving hundreds of users.",
    tech: ["React", "Node.js", "REST API"],
    live: "https://skillbridge-nine.vercel.app/",
    source: "https://github.com/dixonsilveroff",
    image: "/images/skillbridge.webp",
    alt: "SkillBridge dashboard landing page",
  },
  {
    role: "Full-Stack Developer",
    name: "SlickSneaks",
    description:
      "An e-commerce storefront built exclusively for sneaker enthusiasts. Features product filtering, a cart system with persistent state, and a checkout flow powered by Express on the backend.",
    tech: ["React", "Express", "Node.js"],
    live: "https://hng-task-two-tawny.vercel.app/",
    source: "https://github.com/dixonsilveroff",
    image: "/images/slicksneaks.webp",
    alt: "SlickSneaks e-commerce landing page",
  },
  {
    role: "Web Designer",
    name: "ASCE Nigeria",
    description:
      "The official website for ASCE Nigeria International Branch. Designed and built a professional multi-page site with event listings, member resources, and an admin content management system.",
    tech: ["WordPress", "Elementor", "Custom CSS"],
    live: "https://ascenigeria.org",
    source: null,
    image: "/images/ascenigeria.webp",
    alt: "ASCE Nigeria homepage",
  },
];

export const socialLinks = [
  {
    href: "https://github.com/dixonsilveroff",
    label: "GitHub",
    icon: "/images/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/therealvict0r/",
    label: "LinkedIn",
    icon: "/images/linkedin.svg",
  },
  {
    href: "https://x.com/dixonsilveroff",
    label: "Twitter / X",
    icon: "/images/twitter.svg",
  },
];
