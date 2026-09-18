export type Language = 'en' | 'ar';

export type TemplateStyle = 
  | 'modern' 
  | 'executive' 
  | 'tech' 
  | 'creative' 
  | 'minimalist'
  | 'startup'
  | 'academic'
  | 'timeline'
  | 'neon-cyber'
  | 'glassmorphism'
  | 'neo-brutalist'
  | 'nordic-clean'
  | 'midnight-pro'
  | 'emerald-wealth'
  | 'royal-gold'
  | 'crimson-bold'
  | 'sunset-gradient'
  | 'ocean-breeze'
  | 'lavender-dream'
  | 'monochrome-chic'
  | 'vintage-scholar'
  | 'cyber-punk'
  | 'zen-minimal'
  | 'corporate-elite'
  | 'growth-hacker'
  | 'ai-engineer'
  | 'data-scientist'
  | 'cloud-architect'
  | 'fintech-lead'
  | 'blockchain-dev'
  | 'product-visionary'
  | 'ux-master'
  | 'brand-director'
  | 'security-expert'
  | 'devops-ninja'
  | 'fullstack-guru'
  | 'mobile-expert'
  | 'game-architect'
  | 'quantum-analyst'
  | 'bio-tech'
  | 'eco-green'
  | 'solar-flare'
  | 'deep-space'
  | 'velvet-night'
  | 'platinum-edition'
  | 'titanium-pro'
  | 'obsidian-dark'
  | 'pearl-white'
  | 'sapphire-blue'
  | 'ruby-red';

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
  avatarUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface CVStyling {
  fontSize: 'sm' | 'base' | 'lg';
  lineSpacing: 'tight' | 'normal' | 'relaxed';
  marginSize: 'compact' | 'normal' | 'spacious';
  fontFamily: 'sans' | 'serif' | 'mono';
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  certifications: Certification[];
  templateId: TemplateStyle;
  accentColor: string;
  language: Language;
  styling: CVStyling;
}
