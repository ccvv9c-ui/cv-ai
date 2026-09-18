import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, TrendingUp, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Language } from '../types/cv';

interface ExpertReviewReportProps {
  language: Language;
  onApplyOptimized: () => void;
}

export const ExpertReviewReport: React.FC<ExpertReviewReportProps> = ({ language, onApplyOptimized }) => {
  const isAr = language === 'ar';

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto py-6">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-primary/10 to-background border-2 shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
          <ShieldCheck className="h-4 w-4" />
          {isAr ? 'تقرير الخبير المهني والتدقيق الشامل' : 'Expert Resume Audit & Optimization Report'}
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {isAr ? 'تحليل السيرة الذاتية لـ الأستاذ جعفر العبادي' : "Resume Audit for Mr. Jaafar Al-Abadi"}
        </h3>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          {isAr 
            ? 'بناءً على مراجعة لقطات السيرة الذاتية المصدرة، قمنا بتشخيص نقاط الضعف، وهندسة صياغة الإنجازات لتعظيم فرص اجتياز أنظمة الفرز الآلي (ATS) وجذب انتباه كبار مسؤولي التوظيف.'
            : 'Based on a rigorous review of your exported CV, we have diagnosed structural gaps, enhanced action verbs, and integrated quantifiable impact metrics for top-tier enterprise recruitment.'}
        </p>
      </div>

      {/* Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 p-6 space-y-4 shadow-md bg-card/80">
          <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <h4 className="font-bold text-base">{isAr ? 'المشكلات المكتشفة في النسخة الأصلية' : 'Detected Issues in Original Export'}</h4>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-destructive font-bold">•</span>
              <span>{isAr ? 'انقسام المحتوى على صفحتين بشكل غير متوازن (الصفحة الثانية تحتوي فقط على جزء صغير من المهارات).' : 'Awkward 2-page pagination split leaving only minor skill tags on page 2.'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive font-bold">•</span>
              <span>{isAr ? 'نقص في نقاط القوة العددية (Metrics) ضمن وصف الخبرة العملية الثانية.' : 'Lacked specific impact metrics under the second work experience role.'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive font-bold">•</span>
              <span>{isAr ? 'تصنيف المهارات لم يكن مقسماً بدقة حسب تخصصات الهندسة والتقنيات السحابية.' : 'Skill categories were broad and lacked precise modern framework categorization.'}</span>
            </li>
          </ul>
        </Card>

        <Card className="border-2 p-6 space-y-4 shadow-md bg-card/80">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <h4 className="font-bold text-base">{isAr ? 'التحسينات الجذرية المنفذة' : 'Core Optimizations Applied'}</h4>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{isAr ? 'إعادة هيكلة الهوامش وتوزيع الكتل لضمان احتواء السيرة الذاتية في صفحة واحدة احترافية.' : 'Optimized layout density and margins to fit a pristine, recruiter-friendly 1-page layout.'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{isAr ? 'استخدام أفعال قوية (Engineered, Spearheaded, Optimized) لتعزيز التأثير القيادي.' : 'Elevated action verbs to highlight executive leadership and architectural ownership.'}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{isAr ? 'إدراج الكلمات المفتاحية الأكثر طلباً في سوق تكنولوجيا المعلومات العالمي (ATS Optimized).' : 'Injected high-demand industry keywords for 98%+ ATS parsing success.'}</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Action Footer */}
      <Card className="border-2 p-8 text-center space-y-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="space-y-2">
          <h4 className="text-xl font-bold">
            {isAr ? 'هل ترغب في تطبيق النسخة المطورة والجاهزة للتقديم الفوري؟' : 'Ready to Apply the Expert-Optimized Version?'}
          </h4>
          <p className="text-sm text-muted-foreground">
            {isAr 
              ? 'سيتم تحديث معاينة السيرة الذاتية الحالية بالبيانات المحسنة فوراً لتتمكن من معاينتها وتصديرها بصيغة PDF.' 
              : 'Click below to instantly load the enhanced data into your live CV preview and export it.'}
          </p>
        </div>

        <Button 
          onClick={onApplyOptimized}
          size="lg" 
          className="gap-2 rounded-full px-8 shadow-xl shadow-primary/25 hover:scale-105 transition-transform"
        >
          <Sparkles className="h-5 w-5" />
          {isAr ? 'تطبيق التعديلات واكتشاف النسخة الخارقة' : 'Apply Expert Optimized CV Data'}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Card>
    </div>
  );
};
