export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    category: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  badgeText: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  category: 'Full-Stack' | 'Data / AI' | 'Frontend';
  featured: boolean;
  visualType: 'food' | 'skillgap' | 'portfolio';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  scoreLabel: string;
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  duration: string;
  mode: string;
  location: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Jaiyand P A",
    shortName: "Jaiyand",
    brandLogo: "JAIYAND",
    title: "Computer Science Graduate",
    subTitle: "Software Developer",
    location: "Trichy, Tamil Nadu",
    degree: "B.E. Computer Science",
    institution: "SRM TRP Engineering College",
    availability: "Open to Entry-Level Opportunities",
    email: "jaiyandanand@gmail.com",
    phone: "+91 8825613114",
    github: "https://github.com/jaiyand",
    linkedin: "https://linkedin.com/in/jaiyand-a-915340267/",
    resumePath: "/Jaiyand's%20Resume.pdf",
    bio: "Computer Science graduate with knowledge of Python, web technologies, databases, and data analysis. Hands on experience through internships and projects using React.js, Node.js, MongoDB, SQL, and Power BI. Looking for an entry-level opportunity to apply my skills and grow through real-world experience.",
    taglines: [
      "Building MERN Stack Web Applications",
      "Analyzing Data & Extracting Insights",
      "Crafting Clean, Responsive Interfaces"
    ]
  },

  skills: [
    {
      category: "Web Technologies",
      description: "Core markup, styling, and modern scripting languages for interactive web applications.",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Frontend & Backend",
      description: "Building complete full-stack web solutions with modern JavaScript frameworks.",
      items: ["React.js", "Node.js", "Express.js", "MERN Stack"]
    },
    {
      category: "Database Management",
      description: "Structuring relational and non-relational database schemas for backend systems.",
      items: ["MongoDB", "SQL"]
    },
    {
      category: "Programming & Data Analytics",
      description: "Data manipulation, analytical visualization, and insight reporting tools.",
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"]
    }
  ],

  experience: [
    {
      id: "exp-t4teq",
      role: "MERN Stack Developer Intern",
      company: "T4TEQ Software Solution",
      badgeText: "Web Development Internship",
      responsibilities: [
        "Worked on full-stack web applications using MongoDB, Express.js, React.js, and Node.js, including RESTful API development and integration.",
        "Collaborated with the team to understand requirements and implement project features."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JavaScript"]
    },
    {
      id: "exp-qspider",
      role: "Data Analytics Intern",
      company: "QSpider Software Institute",
      badgeText: "Data Analytics Internship",
      responsibilities: [
        "Gained practical knowledge in Python, SQL, data analysis, and visualization.",
        "Worked with Pandas, NumPy, Matplotlib, and Power BI to analyse data and create visualizations.",
        "Developed basic data-driven insights and reports from datasets."
      ],
      technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Power BI"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "food-ordering-platform",
      title: "Food Ordering Platform",
      subtitle: "Full-Stack Web Application",
      description: "Developed a full-stack web application with REST API integration, user authentication (JWT), and MongoDB database management. Implemented responsive UI and optimized performance.",
      bullets: [
        "Full-stack MERN web application architecture.",
        "REST API integration for ordering and menu workflows.",
        "JWT user authentication for secure session control.",
        "MongoDB database management for schema structures.",
        "Responsive UI with performance optimization."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
      category: "Full-Stack",
      featured: true,
      visualType: "food"
    },
    {
      id: "ai-skill-gap-analyser",
      title: "AI Based Skill Gap Analyser",
      subtitle: "Machine Learning & Personalized Learning Paths",
      description: "Built an ML-based system to analyse student skill gaps using Python, recommended personalized learning paths based on user data.",
      bullets: [
        "ML-based analytical system logic.",
        "Analyses student skill gaps using Python.",
        "Recommended personalized learning paths based on user data."
      ],
      tags: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"],
      category: "Data / AI",
      featured: true,
      visualType: "skillgap"
    },
    {
      id: "developer-portfolio",
      title: "Portfolio",
      subtitle: "Interactive Web Showcase",
      description: "Developed a dynamic and responsive portfolio website for managing contact details, effectively showcasing projects and skills in an interactive and professional manner.",
      bullets: [
        "Dynamic contact management interface.",
        "Interactive showcase of projects, experience, and certifications.",
        "High-performance Next.js App Router architecture."
      ],
      tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      category: "Frontend",
      featured: true,
      visualType: "portfolio"
    }
  ] as ProjectItem[],

  education: [
    {
      id: "edu-be",
      degree: "B.E - Computer Science",
      institution: "SRM TRP Engineering College",
      score: "CGPA: 7.6",
      scoreLabel: "Graduated with 7.6 CGPA",
      highlight: true
    },
    {
      id: "edu-12th",
      degree: "Class 12",
      institution: "Kamala Niketan Montessori School",
      score: "74.5%",
      scoreLabel: "Board Exam Percentage"
    },
    {
      id: "edu-10th",
      degree: "Class 10",
      institution: "Kamala Niketan Montessori School",
      score: "80.5%",
      scoreLabel: "Board Exam Percentage"
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-mern",
      title: "MERN Stack Development Course",
      issuer: "T4TEQ Software Solutions",
      duration: "6 Months",
      mode: "Offline",
      location: "Trichy"
    },
    {
      id: "cert-data",
      title: "Data Analytics Course",
      issuer: "QSpider Software Institute",
      duration: "3 Months",
      mode: "Offline",
      location: "Chennai"
    }
  ] as CertificationItem[]
};
