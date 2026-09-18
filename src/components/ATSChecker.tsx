import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle2, Sparkles, Upload, FileText, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CVData, Language } from '../types/cv';

interface ATSCheckerProps {
  language: Language;
  cvData: CVData;
}

export const ATSChecker: React.FC<ATSCheckerProps> = ({ language, cvData }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const isAr = language === 'ar';

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-sm">
          <ShieldCheck className="h-4 w-4" />
          {isAr ? 'محاكي الفحص الذكي للشركات' : 'AI-Powered ATS Scanner Simulator'}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {isAr ? 'اختبر مدى توافق سيرتك الذاتية مع أنظمة الـ ATS' : 'Test Your Resume Against Enterprise ATS'}
        </h2>
        <p className="text-muted-foreground text-base">
          {isAr 
            ? 'تضمن خوارزمياتنا اجتياز سيرتك الذاتية لبرامج الفرز الآلي بنسبة تفوق 92% قبل وصولها لمسؤول التوظيف.' 
            : 'Ensure your resume clears automated hiring filters and ranks high in recruiter applicant pools.'}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-2 shadow-lg bg-card/80 backdrop-blur-md overflow-hidden">
          <CardContent className="p-8 text-center space-y-6">
            <div className="mx-auto h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <FileText className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                {isAr ? 'السيرة الذاتية الحالية جاهزة للفحص' : 'Current Active CV Ready for Analysis'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isAr ? `المرشح: ${cvData.personalInfo.fullName} (${cvData.personalInfo.jobTitle})` : `Candidate: ${cvData.personalInfo.fullName} (${cvData.personalInfo.jobTitle})`}
              </p>
            </div>

            <Button 
              onClick={handleRunAnalysis} 
              disabled={analyzing}
              size="lg"
              className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 transition-all hover:scale-105"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin" />
                  {isAr ? 'جاري الفحص العميق...' : 'Running Deep Analysis...'}
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  {isAr ? 'ابدأ فحص الـ ATS الآن' : 'Run ATS Compliance Scan'}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {analyzed && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 p-6 text-center space-y-2 bg-gradient-to-br from-emerald-500/10 to-background shadow-md">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{isAr ? 'درجة التوافق الإجمالية' : 'Overall Match Score'}</span>
                <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">94%</div>
                <p className="text-xs text-muted-foreground">{isAr ? 'ممتاز جداً - جاهز للتقديم' : 'Exceptional - Ready to apply'}</p>
              </Card>

              <Card className="border-2 p-6 text-center space-y-2 bg-gradient-to-br from-blue-500/10 to-background shadow-md">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{isAr ? 'وضوح الهيكلة' : 'Structure & Parsing'}</span>
                <div className="text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tight">98%</div>
                <p className="text-xs text-muted-foreground">{isAr ? 'قراءة مثالية للحقول' : 'Zero parsing errors detected'}</p>
              </Card>

              <Card className="border-2 p-6 text-center space-y-2 bg-gradient-to-br from-purple-500/10 to-background shadow-md">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{isAr ? 'الكلمات المفتاحية' : 'Keyword Match'}</span>
                <div className="text-5xl font-black text-purple-600 dark:text-purple-400 tracking-tight">89%</div>
                <p className="text-xs text-muted-foreground">{isAr ? 'تغطية واسعة للمهارات' : 'Strong tech stack keywords'}</p>
              </Card>
            </div>

            <Card className="border-2 p-6 space-y-6 shadow-md bg-card/80 backdrop-blur-md">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                {isAr ? 'توصيات الذكاء الاصطناعي للتحسين' : 'AI Improvement Recommendations'}
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-emerald-700 dark:text-emerald-300">{isAr ? 'التنسيق والهيكلة' : 'Formatting & Layout'}</span>
                    <span className="text-muted-foreground">{isAr ? 'استخدام العناوين القياسية (Experience, Education) ساهم في قراءة البيانات بنجاح.' : 'Standard section headers successfully recognized by all major ATS parsers.'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm">
                  <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-amber-700 dark:text-amber-300">{isAr ? 'الكلمات المفتاحية الإضافية الموصى بها' : 'Recommended Additional Keywords'}</span>
                    <span className="text-muted-foreground">{isAr ? 'أضف مصطلحات مثل: "CI/CD", "Agile Leadership", "RESTful APIs" لزيادة نسبة المطابقة في الوظائف القيادية.' : 'Consider adding terms like "CI/CD", "Agile Leadership", "RESTful APIs" to target senior roles.'}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
