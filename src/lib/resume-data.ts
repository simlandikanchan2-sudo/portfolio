export interface Experience {
  role: string
  company: string
  period: string
  achievements: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  highlights: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
}

export interface Certification {
  title: string
  issuer: string
}

export const personalInfo = {
  name: "Kanchan Simlandi",
  role: "Full-Stack / Backend Developer",
  tagline: "Laravel · PHP · MySQL · System Design",
  intro:
    "A results-driven full-stack developer with over 4 years of experience architecting scalable web applications. I specialize in Laravel, PHP, and MySQL, with deep expertise in payment gateways, security hardening, and data-driven dashboards. I combine strong analytical thinking with an ownership mindset to deliver production-ready solutions.",
  phone: "+91-8617830875",
  email: "1707368kanchan@gmail.com",
  location: "Suri, Birbhum, 731101",
  linkedin: "#",
  github: "#",
  languages: ["English", "Hindi", "Bengali"] as const,
  websites: [
    { label: "Jewelbox", href: "https://jewelbox.co.in/" },
    { label: "Tata Pravesh", href: "https://tatapravesh.com/" },
    { label: "Tata Pravesh Lead", href: "https://lead.tatapravesh.com/" },
    { label: "Alongkari", href: "https://www.alongkari.com/" },
  ] as const,
  strengths: [
    { title: "Analytical Thinking", icon: "brain" },
    { title: "Ownership Mindset", icon: "target" },
    { title: "Attention to Detail", icon: "search" },
    { title: "Self-Motivated", icon: "zap" },
    { title: "Communication", icon: "message-square" },
    { title: "Team Collaboration", icon: "users" },
    { title: "Time Management", icon: "clock" },
  ] as const,
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Hair Rap by YoYo Pvt Ltd",
    period: "Jul 2025 – Present",
    achievements: [
      "Architected the DonateBazaar platform (~50 Eloquent models, 90+ migrations, ~70 controllers, 8 middleware)",
      "Built a 5-layer Razorpay payment pipeline with HMAC verification, signature validation, webhook reconciliation, idempotency checks, and automated refund handling",
      "Implemented 18 security controls including CSRF, rate limiting, role/status middleware, KYC workflows, and comprehensive audit logging",
      "Developed an AI-powered chatbot assistant using the Anthropic Claude API for real-time donor support and query resolution",
      "Designed and automated email notification system (welcome series, donation receipts, campaign updates, security alerts) using Laravel queues",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infomaticae Technology Pvt Ltd",
    period: "Dec 2023 – Jul 2025",
    achievements: [
      "Developed and maintained full-stack web applications using Laravel and MySQL, delivering features on schedule",
      "Designed relational database schemas with optimized indexing strategies, reducing query execution time by 40%",
      "Integrated third-party RESTful APIs and implemented robust error handling for production reliability",
      "Collaborated in an agile team environment, participating in sprint planning, code reviews, and deployment cycles",
    ],
  },
  {
    role: "Developer",
    company: "Alongkari",
    period: "Feb 2024 – Feb 2025",
    achievements: [
      "Built and maintained Laravel-based web applications with focus on clean, maintainable code",
      "Implemented database triggers and stored procedures for automated data processing workflows",
      "Developed reporting modules with data aggregation and export functionality",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "FliqaIndia",
    period: "May 2022 – Dec 2023",
    achievements: [
      "Developed responsive web pages and contributed to full-stack features using PHP and JavaScript",
      "Assisted in database design and optimization, gaining foundational experience in ER modeling and SQL",
      "Participated in client requirements gathering and translated business needs into technical solutions",
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: ["PHP", "Laravel 11", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Databases & Data Modeling",
    skills: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "ER Modeling",
      "DB Triggers",
      "Indexing",
    ],
  },
  {
    category: "Payments & Integrations",
    skills: ["Razorpay", "Anthropic Claude API", "RESTful APIs"],
  },
  {
    category: "Security Engineering",
    skills: [
      "CSRF",
      "HMAC Verification",
      "Role/Status Middleware",
      "KYC Workflows",
      "Rate Limiting",
      "Audit Logging",
    ],
  },
  {
    category: "Data & BI",
    skills: [
      "Power BI",
      "DAX",
      "KPIs",
      "Data Cleaning",
      "Dashboards",
      "ETL Basics",
    ],
  },
]

export const featuredStats = [
  { label: "Eloquent Models", value: 50, suffix: "+" },
  { label: "Migrations", value: 90, suffix: "+" },
  { label: "Controllers", value: 70, suffix: "+" },
  { label: "Security Controls", value: 18, suffix: "" },
  { label: "Middleware", value: 8, suffix: "" },
  { label: "Verification Layers", value: 5, suffix: "" },
]

export const projects: Project[] = [
  {
    title: "Vehicle Theft Analysis",
    description:
      "Comprehensive regional risk analysis dashboard built with PostgreSQL and Power BI. Analyzed theft patterns across regions, uncovering a 70.6% rise trend and providing actionable intelligence for law enforcement.",
    tech: ["PostgreSQL", "Power BI", "DAX"],
    highlights: [
      "70.6% rise trend insight across monitored regions",
      "Interactive regional risk scoring and heatmaps",
    ],
  },
  {
    title: "Blinkit Sales Dashboard",
    description:
      "Interactive sales analytics dashboard for Blinkit using Power BI. Features custom DAX measures, dynamic KPIs, and trend analysis for data-driven decision making.",
    tech: ["Power BI", "DAX"],
    highlights: [
      "Custom KPI definitions and real-time tracking",
      "Sales trend analysis with drill-down capabilities",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "B.E. / B.Tech",
    institution: "KIIT University",
    location: "Bhubaneswar",
    period: "2017 – 2021",
  },
  {
    degree: "Class 12 (Higher Secondary)",
    institution: "Birbhum Zilla School",
    location: "Birbhum",
    period: "2014 – 2016",
  },
]

export const certifications: Certification[] = [
  {
    title: "Power BI Certification (Basic to Advanced)",
    issuer: "Rajdeep Dar Pathshala",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const
