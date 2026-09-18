import { CVData } from '../types/cv';

export const initialCVData: CVData = {
  personalInfo: {
    fullName: 'Jaafar Al-Abadi',
    jobTitle: 'Senior Full-Stack Developer & UI/UX Expert',
    email: 'jaafar.alabadi@example.com',
    phone: '+964 770 000 0000',
    location: 'Baghdad, Iraq',
    website: 'https://github.com/jaafar-alabadi',
    summary: 'Passionate Senior Software Engineer with 8+ years of experience architecting and delivering high-performance web applications. Specialized in React, TypeScript, Node.js, and modern cloud infrastructures with a strong eye for pixel-perfect UI/UX design.',
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
      description: 'Leading the frontend architecture team across 3 core SaaS products. Reduced bundle size by 42% and implemented design systems used by 50+ engineers.',
      highlights: ['Engineered micro-frontend architecture', 'Mentored 12 junior and mid-level developers']
    },
    {
      id: '2',
      company: 'Digital Solutions Inc.',
      position: 'Senior Full-Stack Engineer',
      location: 'Dubai, UAE',
      startDate: '2018-01',
      endDate: '2021-02',
      current: false,
      description: 'Developed scalable RESTful APIs and real-time dashboards utilizing React, Node.js, and PostgreSQL.',
      highlights: ['Increased API throughput by 60%', 'Spearheaded cloud migration to AWS']
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Master of Science',
      field: 'Software Engineering',
      startDate: '2016',
      endDate: '2018',
      gpa: '3.9/4.0'
    },
    {
      id: '2',
      institution: 'Baghdad College',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2012',
      endDate: '2016',
      gpa: '3.7/4.0'
    }
  ],
  skills: [
    {
      id: '1',
      category: 'Frontend & UI',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Figma']
    },
    {
      id: '2',
      category: 'Backend & Cloud',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST APIs', 'Docker']
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022'
    },
    {
      id: '2',
      name: 'Professional Scrum Master I',
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
