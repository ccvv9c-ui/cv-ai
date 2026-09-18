import { CVData } from '../types/cv';

export const expertOptimizedCVData: CVData = {
  personalInfo: {
    fullName: 'Jaafar Al-Abadi',
    jobTitle: 'Senior Full-Stack Software Engineer & Frontend Architect',
    email: 'jaafar.alabadi@example.com',
    phone: '+964 770 000 0000',
    location: 'Baghdad, Iraq',
    website: 'https://github.com/jaafar-alabadi',
    summary: 'Results-driven Senior Full-Stack Engineer with 8+ years of expertise architecting high-performance web applications, micro-frontends, and scalable cloud infrastructure. Proven track record in reducing bundle sizes by 42%, boosting API throughput by 60%, and leading engineering teams to deliver robust enterprise SaaS solutions with pristine UI/UX standards.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  experiences: [
    {
      id: '1',
      company: 'TechCorp Global',
      position: 'Lead Frontend Architect',
      location: 'Remote',
      startDate: '2021-03',
      endDate: 'Present',
      current: true,
      description: 'Directing frontend architecture across 3 mission-critical enterprise SaaS products used by over 50,000 active users.',
      highlights: [
        'Engineered modular micro-frontend architecture, cutting initial bundle load time by 42%.',
        'Spearheaded the creation of an accessible design system adopted by 50+ engineers across 4 squads.',
        'Mentored 12 junior and mid-level developers, establishing robust code review protocols and CI/CD best practices.'
      ]
    },
    {
      id: '2',
      company: 'Digital Solutions Inc.',
      position: 'Senior Full-Stack Engineer',
      location: 'Dubai, UAE',
      startDate: '2018-01',
      endDate: '2021-02',
      current: false,
      description: 'Architected and scaled high-availability RESTful APIs and real-time analytical dashboards.',
      highlights: [
        'Optimized PostgreSQL query execution and caching layers, increasing overall API throughput by 60%.',
        'Led seamless zero-downtime cloud migration of core microservices to AWS infrastructure.',
        'Collaborated with UX and product teams to translate complex business logic into intuitive user experiences.'
      ]
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Master of Science (M.Sc.)',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2018',
      gpa: '3.9/4.0 (Top 5% of class)'
    },
    {
      Id: '2',
      institution: 'Baghdad College',
      degree: 'Bachelor of Science (B.Sc.)',
      field: 'Computer Science',
      startDate: '2012',
      endDate: '2016',
      gpa: '3.7/4.0'
    }
  ],
  skills: [
    {
      id: '1',
      category: 'Frontend Engineering',
      skills: ['React 18', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'HTML5/CSS3', 'Micro-Frontends']
    },
    {
      id: '2',
      category: 'Backend & Cloud',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'RESTful APIs', 'Docker', 'AWS', 'CI/CD Pipelines']
    },
    {
      id: '3',
      category: 'Methodologies & Tools',
      skills: ['Agile / Scrum', 'Git / GitHub Actions', 'Figma', 'Jest / Cypress', 'Performance Optimization']
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: '2022'
    },
    {
      id: '2',
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: '2021'
    }
  ],
  templateId: 'modern',
  accentColor: '#0284c7',
  language: 'en',
  styling: {
    fontSize: 'base',
    lineSpacing: 'normal',
    marginSize: 'normal',
    fontFamily: 'sans'
  }
};
