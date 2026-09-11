export const profile = {
  firstName: 'Reem',
  name: 'Reem Bakker',
  role: 'Business Analyst',
  headline: 'Business Analyst with a Software Engineering background.',
  summary:
    'I turn business needs into clear requirements, structured workflows, and practical digital solutions.',
  location: 'Jeddah, Saudi Arabia',
  email: 'eng.reembakker@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reem-bakker-71219b273',
  github: 'https://github.com/rm18x',
  cvFile: 'public/CV Reem Bakker .pdf',
  infoPanel: [
    { label: 'Role', value: 'Business Analyst' },
    { label: 'Degree', value: 'Software Engineering, BSc' },
    { label: 'Based in', value: 'Jeddah, Saudi Arabia' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const whatIDo = {
  eyebrow: 'About',
  title: 'What I Do',
  items: [
    {
      icon: 'analyze',
      title: 'Analyze',
      description:
        'Understanding business needs, stakeholder requirements, processes, and system challenges.',
    },
    {
      icon: 'define',
      title: 'Define',
      description:
        'Transforming requirements into structured SRS documents, user stories, acceptance criteria, and clear workflows.',
    },
    {
      icon: 'validate',
      title: 'Validate',
      description:
        'Supporting system testing and UAT to ensure solutions meet business requirements and expected functionality.',
    },
    {
      icon: 'create',
      title: 'Create Digital Presence',
      description:
        'Designing and building modern, responsive landing pages and portfolio websites for professionals, personal brands, and businesses that need a clear online presence.',
    },
  ],
}

export const experience = [
  {
    role: 'Business Analyst',
    company: 'Satr Saudi Information Technology Company',
    location: 'Jeddah, Saudi Arabia',
    period: 'April 2026 – Present',
    responsibilities: [
      'Gather and analyze business requirements.',
      'Translate business needs into functional specifications and workflows.',
      'Prepare and maintain SRS documents, user stories, and acceptance criteria.',
      'Conduct system testing and UAT.',
      'Collaborate with stakeholders and technical teams.',
      'Support business process improvement and system enhancement.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'Saudi Arabian Glass Company Ltd.',
    location: 'Jeddah, Saudi Arabia',
    period: 'September 2025 – January 2026',
    responsibilities: [
      'Managed company IT systems, networks, and user accounts.',
      'Provided technical support and troubleshooting.',
      'Supported system testing and validation for a new factory system.',
      'Worked with company data and created dashboards and reports using Power BI.',
      'Supported system security and backup procedures.',
    ],
  },
  {
    role: 'Training Intern',
    company: 'Saudi National Bank (SNB)',
    location: 'Jeddah, Saudi Arabia',
    period: '',
    responsibilities: [
      'Supported the EPD team with project coordination and documentation.',
      'Worked with Microsoft Office and PowerPoint.',
      'Gained exposure to enterprise project delivery and cross-functional collaboration.',
    ],
  },
  {
    role: 'Business Analyst Trainee',
    company: 'Moltaqa Software Company',
    location: 'Jeddah, Saudi Arabia',
    period: '',
    responsibilities: [
      'Gathered and analyzed stakeholder requirements.',
      'Helped bridge business needs and technical solutions.',
      'Collaborated with development teams.',
    ],
  },
]

export const projects = {
  eyebrow: 'Portfolio',
  title: 'Projects',
  description:
    'A focused selection of projects. This section is structured to grow as new case studies are added.',
  items: [
    {
      type: 'Client Website / Landing Page',
      title: 'Fadel Cherkaoui — Educational Landing Page',
      description:
        'Designed and developed a responsive landing page for a mathematics and physics tutor in Rabat, focused on clear service presentation, student conversion, and easy WhatsApp-based booking.',
      role: '',
      tools: [],
      challenge: '',
      process: '',
      outcome: '',
      image: null,
      tags: ['Responsive Design', 'UI/UX', 'Landing Page', 'WhatsApp Integration'],
      liveUrl: 'https://www.cherkaouifadel.com/',
      caseStudy: false,
      footnote: '',
    },
    {
      type: 'Graduation Project — University of Jeddah',
      title: 'AI Symptom Diagnosis System',
      description:
        'An AI-based system designed to analyze user-input symptoms and identify possible illnesses using logic-based matching and health data analysis.',
      role: '',
      tools: [],
      challenge: '',
      process: '',
      outcome: '',
      image: null,
      tags: ['AI', 'Software Engineering', 'Data Analysis', 'System Design'],
      caseStudy: false,
      footnote: 'Completed as part of my bachelor’s degree at University of Jeddah.',
    },
  ],
}

export const skills = [
  {
    category: 'Business Analysis',
    skills: [
      'Requirements Gathering',
      'Requirements Analysis',
      'User Stories',
      'Acceptance Criteria',
      'SRS Documentation',
      'UAT',
      'Business Process Analysis',
      'Stakeholder Communication',
    ],
  },
  {
    category: 'Technical',
    skills: [
      'Software Development Life Cycle (SDLC)',
      'System Testing',
      'Data Analysis',
      'UI / UX Awareness',
      'Software Engineering Fundamentals',
    ],
  },
  {
    category: 'Tools',
    skills: [ 'Jira', 'VScode', 'Figma', 'NetBeans', 'Power BI', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
]

export const education = {
  eyebrow: 'Education',
  title: 'Academic Background',
  degree: 'Bachelor of Science in Software Engineering',
  institution: 'University of Jeddah',
  location: 'Jeddah, Saudi Arabia',
  graduated: 'January 2025',
  gpa: '4.67 / 5.0',
  secondary: {
    label: 'Additional Academic Results',
    items: [
      { name: 'STEP English Proficiency Test', score: '83' },
      { name: 'General Aptitude Test for University Graduates', score: '77' },
    ],
  },
}

export const credentials = {
  eyebrow: 'Courses & Credentials',
  title: 'Continuous Learning',
  items: [
    {
      title: 'Power BI — Microsoft Certification Course',
      description:
        'Focused on data visualization, dashboard development, and business intelligence reporting using Microsoft Power BI.',
    },
    {
      title: 'PMP — 40-Hour Certification Course',
      description:
        'Covered project planning, execution, monitoring, risk management, and stakeholder communication based on PMI standards.',
    },
    {
      title: 'Fundamentals of Digital Marketing — Google',
      description:
        'Covered SEO, content marketing, digital marketing strategies, and analytics.',
    },
  ],
}

export const statement = {
  eyebrow: 'Perspective',
  title: 'Beyond the Resume',
  body: 'I’m interested in the space where technology, business, and people meet — understanding how systems should work, why they should work that way, and how to make the experience clearer for everyone involved.',
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Let’s Connect',
  description:
    'Interested in working together, discussing an opportunity, or connecting professionally? Feel free to reach out.',
}

export const footer = {
  name: 'Reem Bakker',
  tagline: 'Business Analyst & Software Engineering Graduate',
}