import { TemplateStyle } from '../types/cv';

export interface ThemePreset {
  id: TemplateStyle;
  nameEn: string;
  nameAr: string;
  category: 'Modern & Clean' | 'Executive & Corporate' | 'Tech & Developer' | 'Creative & Bold' | 'Luxury & Dark';
  accentColor: string;
  badge: string;
}

export const CV_THEMES: ThemePreset[] = [
  // Modern & Clean (10)
  { id: 'modern', nameEn: 'Modern Executive', nameAr: 'عصري تنفيذي', category: 'Modern & Clean', accentColor: '#0284c7', badge: 'Popular' },
  { id: 'minimalist', nameEn: 'Minimalist ATS', nameAr: 'بسيط متوافق مع ATS', category: 'Modern & Clean', accentColor: '#334155', badge: 'ATS #1' },
  { id: 'nordic-clean', nameEn: 'Nordic Clean', nameAr: 'نورديك النظيف', category: 'Modern & Clean', accentColor: '#0ea5e9', badge: 'Clean' },
  { id: 'zen-minimal', nameEn: 'Zen Minimal', nameAr: 'زن الهادئ', category: 'Modern & Clean', accentColor: '#64748b', badge: 'Minimal' },
  { id: 'pearl-white', nameEn: 'Pearl White', nameAr: 'اللؤلؤي الأبيض', category: 'Modern & Clean', accentColor: '#3b82f6', badge: 'Sleek' },
  { id: 'monochrome-chic', nameEn: 'Monochrome Chic', nameAr: 'أبيض وأسود أنيق', category: 'Modern & Clean', accentColor: '#0f172a', badge: 'Chic' },
  { id: 'ocean-breeze', nameEn: 'Ocean Breeze', nameAr: 'نسيم المحيط', category: 'Modern & Clean', accentColor: '#06b6d4', badge: 'Fresh' },
  { id: 'lavender-dream', nameEn: 'Lavender Dream', nameAr: 'حلم اللافندر', category: 'Modern & Clean', accentColor: '#8b5cf6', badge: 'Soft' },
  { id: 'sapphire-blue', nameEn: 'Sapphire Blue', nameAr: 'الأزرق الياقوتي', category: 'Modern & Clean', accentColor: '#2563eb', badge: 'Elite' },
  { id: 'eco-green', nameEn: 'Eco Green', nameAr: 'الأخضر البيئي', category: 'Modern & Clean', accentColor: '#10b981', badge: 'Natural' },

  // Executive & Corporate (10)
  { id: 'executive', nameEn: 'Executive Classic', nameAr: 'كلاسيكي تنفيذي', category: 'Executive & Corporate', accentColor: '#991b1b', badge: 'Formal' },
  { id: 'corporate-elite', nameEn: 'Corporate Elite', nameAr: 'النخبة المؤسسية', category: 'Executive & Corporate', accentColor: '#1e3a8a', badge: 'Leader' },
  { id: 'academic', nameEn: 'Academic Scholar', nameAr: 'باحث أكاديمي', category: 'Executive & Corporate', accentColor: '#78350f', badge: 'Research' },
  { id: 'vintage-scholar', nameEn: 'Vintage Scholar', nameAr: 'العالم العتيق', category: 'Executive & Corporate', accentColor: '#92400e', badge: 'Classic' },
  { id: 'royal-gold', nameEn: 'Royal Gold', nameAr: 'الذهبي الملكي', category: 'Executive & Corporate', accentColor: '#d97706', badge: 'Luxury' },
  { id: 'platinum-edition', nameEn: 'Platinum Edition', nameAr: 'إصدار البلاتين', category: 'Executive & Corporate', accentColor: '#64748b', badge: 'Top Tier' },
  { id: 'titanium-pro', nameEn: 'Titanium Pro', nameAr: 'تيتانيوم برو', category: 'Executive & Corporate', accentColor: '#475569', badge: 'Pro' },
  { id: 'emerald-wealth', nameEn: 'Emerald Wealth', nameAr: 'الثروة الزمردية', category: 'Executive & Corporate', accentColor: '#047857', badge: 'Finance' },
  { id: 'fintech-lead', nameEn: 'Fintech Lead', nameAr: 'قائد التكنولوجيا المالية', category: 'Executive & Corporate', accentColor: '#0d9488', badge: 'Fintech' },
  { id: 'product-visionary', nameEn: 'Product Visionary', nameAr: 'رؤية المنتجات', category: 'Executive & Corporate', accentColor: '#4f46e5', badge: 'Vision' },

  // Tech & Developer (10)
  { id: 'tech', nameEn: 'Tech Terminal', nameAr: 'طرفية المطورين', category: 'Tech & Developer', accentColor: '#10b981', badge: 'Dev' },
  { id: 'ai-engineer', nameEn: 'AI Engineer', nameAr: 'مهندس الذكاء الاصطناعي', category: 'Tech & Developer', accentColor: '#6366f1', badge: 'AI/ML' },
  { id: 'data-scientist', nameEn: 'Data Scientist', nameAr: 'عالم البيانات', category: 'Tech & Developer', accentColor: '#3b82f6', badge: 'Data' },
  { id: 'cloud-architect', nameEn: 'Cloud Architect', nameAr: 'مهندس السحابة', category: 'Tech & Developer', accentColor: '#0284c7', badge: 'AWS/GCP' },
  { id: 'devops-ninja', nameEn: 'DevOps Ninja', nameAr: 'محترف ديف أوبس', category: 'Tech & Developer', accentColor: '#ea580c', badge: 'DevOps' },
  { id: 'fullstack-guru', nameEn: 'FullStack Guru', nameAr: 'خبير الـ FullStack', category: 'Tech & Developer', accentColor: '#8b5cf6', badge: 'FullStack' },
  { id: 'blockchain-dev', nameEn: 'Blockchain Dev', nameAr: 'مطور البلوكشين', category: 'Tech & Developer', accentColor: '#f59e0b', badge: 'Web3' },
  { id: 'mobile-expert', nameEn: 'Mobile Expert', nameAr: 'خبير الموبايل', category: 'Tech & Developer', accentColor: '#ec4899', badge: 'iOS/Android' },
  { id: 'security-expert', nameEn: 'Security Expert', nameAr: 'خبير الأمن السيبراني', category: 'Tech & Developer', accentColor: '#dc2626', badge: 'Security' },
  { id: 'quantum-analyst', nameEn: 'Quantum Analyst', nameAr: 'محلل الكم', category: 'Tech & Developer', accentColor: '#14b8a6', badge: 'Quantum' },

  // Creative & Bold (10)
  { id: 'creative', nameEn: 'Creative Gradient', nameAr: 'متدرج إبداعي', category: 'Creative & Bold', accentColor: '#7c3aed', badge: 'Creative' },
  { id: 'startup', nameEn: 'Startup Founder', nameAr: 'مؤسس شركة ناشئة', category: 'Creative & Bold', accentColor: '#f59e0b', badge: 'Startup' },
  { id: 'timeline', nameEn: 'Timeline Elegant', nameAr: 'الخط الزمني الأنيق', category: 'Creative & Bold', accentColor: '#059669', badge: 'Timeline' },
  { id: 'sunset-gradient', nameEn: 'Sunset Gradient', nameAr: 'غروب الشمس', category: 'Creative & Bold', accentColor: '#f43f5e', badge: 'Vibrant' },
  { id: 'solar-flare', nameEn: 'Solar Flare', nameAr: 'وهج شمسي', category: 'Creative & Bold', accentColor: '#e11d48', badge: 'Hot' },
  { id: 'ux-master', nameEn: 'UX Master', nameAr: 'سيد تجربة المستخدم', category: 'Creative & Bold', accentColor: '#db2777', badge: 'UI/UX' },
  { id: 'brand-director', nameEn: 'Brand Director', nameAr: 'مدير العلامة التجارية', category: 'Creative & Bold', accentColor: '#9333ea', badge: 'Branding' },
  { id: 'game-architect', nameEn: 'Game Architect', nameAr: 'مهندس الألعاب', category: 'Creative & Bold', accentColor: '#10b981', badge: 'Gaming' },
  { id: 'growth-hacker', nameEn: 'Growth Hacker', nameAr: 'هاكر النمو', category: 'Creative & Bold', accentColor: '#06b6d4', badge: 'Growth' },
  { id: 'bio-tech', nameEn: 'Bio Tech Innovator', nameAr: 'مبتكر التكنولوجيا الحيوية', category: 'Creative & Bold', accentColor: '#84cc16', badge: 'Bio' },

  // Luxury & Dark (10)
  { id: 'neon-cyber', nameEn: 'Neon Cyberpunk', nameAr: 'نيون سايبربانك', category: 'Luxury & Dark', accentColor: '#22c55e', badge: 'Cyber' },
  { id: 'glassmorphism', nameEn: 'Glassmorphism Pro', nameAr: 'الزجاجي الفاخر', category: 'Luxury & Dark', accentColor: '#38bdf8', badge: 'Glass' },
  { id: 'neo-brutalist', nameEn: 'Neo Brutalist', nameAr: 'البروتالي الحديث', category: 'Luxury & Dark', accentColor: '#eab308', badge: 'Bold' },
  { id: 'midnight-pro', nameEn: 'Midnight Pro', nameAr: 'منتصف الليل', category: 'Luxury & Dark', accentColor: '#6366f1', badge: 'Dark' },
  { id: 'cyber-punk', nameEn: 'Cyberpunk Redux', nameAr: 'سايبربانك المطور', category: 'Luxury & Dark', accentColor: '#ec4899', badge: 'Neon' },
  { id: 'deep-space', nameEn: 'Deep Space', nameAr: 'الفضاء العميق', category: 'Luxury & Dark', accentColor: '#818cf8', badge: 'Space' },
  { id: 'velvet-night', nameEn: 'Velvet Night', nameAr: 'ليلة مخملية', category: 'Luxury & Dark', accentColor: '#a855f7', badge: 'Velvet' },
  { id: 'obsidian-dark', nameEn: 'Obsidian Dark', nameAr: 'حجر السج الأسود', category: 'Luxury & Dark', accentColor: '#e2e8f0', badge: 'Obsidian' },
  { id: 'crimson-bold', nameEn: 'Crimson Bold', nameAr: 'القرمزي الجريء', category: 'Luxury & Dark', accentColor: '#ef4444', badge: 'Crimson' },
  { id: 'ruby-red', nameEn: 'Ruby Red Luxury', nameAr: 'الياقوت الأحمر الفاخر', category: 'Luxury & Dark', accentColor: '#9f1239', badge: 'Ruby' }
];
