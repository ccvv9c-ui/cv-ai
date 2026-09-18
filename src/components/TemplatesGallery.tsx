import React from 'react';
import { Award, Check, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Language, TemplateStyle } from '../types/cv';

interface TemplatesGalleryProps {
  language: Language;
  onSelectTemplate: (templateId: TemplateStyle) => void;
}

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({ language, onSelectTemplate }) => {
  const isAr = language === 'ar';

  const templates = [
    {
      id: 'modern' as TemplateStyle,
      name: isAr ? 'الحديث المتقدم (Modern)' : 'Modern Executive',
      badge: isAr ? 'الأكثر طلباً' : 'Most Popular',
      description: isAr 
        ? 'تصميم راقي ومنظم يناسب المهندسين، مدراء المشاريع، والمتخصصين في التكنولوجيا.' 
        : 'Sleek, highly structured layout tailored for tech professionals, engineers, and modern leaders.',
      previewBg: 'from-sky-500/20 via-blue-500/10 to-background',
      accent: '#0284c7'
    },
    {
      id: 'executive' as TemplateStyle,
      name: isAr ? 'التنفيذي الرسمي (Executive)' : 'Corporate Classic',
      badge: isAr ? 'للإداريين' : 'Corporate',
      description: isAr 
        ? 'تصميم تقليدي فاخر يعكس الاحترافية العالية، مناسب للوظائف القيادية والمالية.' 
        : 'Traditional, authoritative design that commands respect in boardrooms and corporate finance.',
      previewBg: 'from-slate-500/20 via-zinc-500/10 to-background',
      accent: '#334155'
    },
    {
      id: 'tech' as TemplateStyle,
      name: isAr ? 'المطور الذكي (Tech Code)' : 'Tech & Developer',
      badge: isAr ? 'للمبرمجين' : 'Developer',
      description: isAr 
        ? 'يركز على المهارات البرمجية، الروابط، والمشاريع التقنية بطريقة تسرع القبول لدى الشركات الكبرى.' 
        : 'Highlights GitHub stats, tech stacks, and system architecture achievements for fast ATS parsing.',
      previewBg: 'from-emerald-500/20 via-teal-500/10 to-background',
      accent: '#059669'
    },
    {
      id: 'creative' as TemplateStyle,
      name: isAr ? 'المبدع العصري (Creative)' : 'Creative Minimal',
      badge: isAr ? 'للمصممين' : 'Designers',
      description: isAr 
        ? 'تخطيط بصري مبتكر يلفت انتباه مسؤولي التوظيف في وكالات التصميم والإعلام.' 
        : 'Striking typography and layout for creative directors, marketers, and product designers.',
      previewBg: 'from-purple-500/20 via-pink-500/10 to-background',
      accent: '#7c3aed'
    },
    {
      id: 'minimalist' as TemplateStyle,
      name: isAr ? 'البسيط النقي (Minimalist)' : 'Clean Minimalist',
      badge: isAr ? 'موصى به لـ ATS' : 'ATS Perfect',
      description: isAr 
        ? 'خالٍ من التعقيدات تماماً لضمان اجتياز أنظمة الفرز الآلي بنسبة 100%.' 
        : 'Zero fluff, laser-focused on clear typography and clean hierarchy for 100% ATS score.',
      previewBg: 'from-amber-500/20 via-orange-500/10 to-background',
      accent: '#d97706'
    },
    {
      id: 'startup' as TemplateStyle,
      name: isAr ? 'الشركة الناشئة (Startup Founder)' : 'Startup Founder',
      badge: isAr ? 'للرواد' : 'Founders',
      description: isAr 
        ? 'تصميم جريء داكن يعكس روح الريادة والمغامرة في الشركات الناشئة وقطاع الـ Web3.' 
        : 'Bold dark layout reflecting entrepreneurial spirit for startup founders and innovators.',
      previewBg: 'from-amber-600/20 via-yellow-500/10 to-background',
      accent: '#f59e0b'
    },
    {
      id: 'academic' as TemplateStyle,
      name: isAr ? 'الأكاديمي والباحث (Academic)' : 'Academic Researcher',
      badge: isAr ? 'للأبحاث' : 'Researchers',
      description: isAr 
        ? 'مخصص للأساتذة والباحثين والأطباء مع تنسيق كلاسيكي رسمي يبرز المنشورات والدراسات.' 
        : 'Tailored for professors, doctors, and researchers focusing on publications and degrees.',
      previewBg: 'from-amber-900/20 via-stone-500/10 to-background',
      accent: '#78350f'
    },
    {
      id: 'timeline' as TemplateStyle,
      name: isAr ? 'الخط الزمني (Timeline Flow)' : 'Timeline Flow',
      badge: isAr ? 'ديناميكي' : 'Interactive',
      description: isAr 
        ? 'يعرض مسيرتك المهنية على شكل خط زمني متصل يوضح التطور السريع لمهاراتك.' 
        : 'Visualizes your career trajectory through a connected sequential milestone flow.',
      previewBg: 'from-cyan-500/20 via-blue-500/10 to-background',
      accent: '#06b6d4'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold shadow-sm">
          <Sparkles className="h-3.5 w-3.5" />
          {isAr ? '8 قوالب عالمية صُممت لجميع التخصصات' : '8 Professional Templates for All Careers'}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {isAr ? 'اختر القالب الذي يليق بطموحك المهني' : 'Select a Template Built for Success'}
        </h2>
        <p className="text-muted-foreground text-base">
          {isAr 
            ? 'جميع القوالب مصممة خصيصاً لتجاوز أنظمة الفرز الآلي (ATS) وجذب انتباه مسؤولي التوظيف في كبرى الشركات.' 
            : 'Every template is engineered to pass rigorous ATS scanners while captivating hiring managers in top companies.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl) => (
          <Card 
            key={tpl.id} 
            onClick={() => onSelectTemplate(tpl.id)}
            className="group overflow-hidden border-2 hover:border-primary/80 transition-all duration-300 flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-1 bg-card/90 backdrop-blur-md"
          >
            <div className={`h-48 w-full bg-gradient-to-br ${tpl.previewBg} p-6 flex flex-col justify-between relative border-b`}>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold text-foreground shadow-sm">
                  {tpl.badge}
                </span>
                <div className="h-3 w-3 rounded-full shadow-md" style={{ backgroundColor: tpl.accent }} />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-3/4 bg-foreground/20 rounded-full" />
                <div className="h-2 w-1/2 bg-foreground/15 rounded-full" />
              </div>
            </div>

            <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {tpl.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tpl.description}
                </p>
              </div>

              <div className="pt-4 border-t flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Check className="h-4 w-4" />
                  {isAr ? 'متوافق مع ATS 100%' : '100% ATS Optimized'}
                </div>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTemplate(tpl.id);
                  }}
                  className="gap-1.5 rounded-full shadow-md"
                  size="sm"
                >
                  {isAr ? 'استخدم القالب' : 'Use Template'}
                  <ArrowRight className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
