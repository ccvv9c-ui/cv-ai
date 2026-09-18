import React from 'react';
import { LayoutDashboard, FileText, ShieldCheck, Award, Plus, ArrowUpRight, TrendingUp, Users, CheckCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CVData, Language, TemplateStyle } from '../types/cv';

interface DashboardProps {
  language: Language;
  cvData: CVData;
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ language, cvData, setActiveTab }) => {
  const isAr = language === 'ar';

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 relative z-10 space-y-10">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gradient-to-r from-primary/10 via-sky-500/10 to-background p-8 rounded-3xl border-2 shadow-lg backdrop-blur-md">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
            <LayoutDashboard className="h-3.5 w-3.5" />
            {isAr ? 'لوحة تحكم المستخدم المهني' : 'Professional Candidate Dashboard'}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            {isAr ? `مرحباً بك، ${cvData.personalInfo.fullName}` : `Welcome back, ${cvData.personalInfo.fullName}`}
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            {isAr 
              ? 'أنت على بعد خطوات قليلة من الحصول على وظيفة الأحلام. تتبع تقدم سيرتك الذاتية وقوالبك المفضلة من مكان واحد.' 
              : 'Manage your career assets, track ATS performance, and create tailored resumes effortlessly.'}
          </p>
        </div>

        <Button onClick={() => setActiveTab('builder')} className="gap-2 rounded-full shadow-lg shadow-primary/25">
          <Plus className="h-4 w-4" />
          {isAr ? 'إنشاء سيرة جديدة' : 'Create New CV'}
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 p-6 space-y-2 shadow-sm hover:border-primary/50 transition-all">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-semibold">{isAr ? 'السير الذاتية النشطة' : 'Active Resumes'}</span>
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div className="text-3xl font-bold">2</div>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5" /> {isAr ? 'محدثة اليوم' : 'Updated today'}
          </p>
        </Card>

        <Card className="border-2 p-6 space-y-2 shadow-sm hover:border-primary/50 transition-all">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-semibold">{isAr ? 'معدل توافق ATS' : 'Avg ATS Score'}</span>
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">94%</div>
          <p className="text-xs text-muted-foreground">{isAr ? 'اجتياز ممتاز' : 'Top tier ranking'}</p>
        </Card>

        <Card className="border-2 p-6 space-y-2 shadow-sm hover:border-primary/50 transition-all">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-semibold">{isAr ? 'القالب الحالي' : 'Active Template'}</span>
            <Award className="h-4 w-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold capitalize">{cvData.templateId}</div>
          <p className="text-xs text-muted-foreground">{isAr ? 'جاهز للطباعة' : 'Print ready'}</p>
        </Card>

        <Card className="border-2 p-6 space-y-2 shadow-sm hover:border-primary/50 transition-all">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-xs font-semibold">{isAr ? 'مرات التحميل' : 'Export Count'}</span>
            <Briefcase className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-3xl font-bold">14</div>
          <p className="text-xs text-muted-foreground">{isAr ? 'PDF و PNG' : 'PDF & Print'}</p>
        </Card>
      </div>

      {/* Quick Actions / Recent CVs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-2 p-6 space-y-6 shadow-md">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            {isAr ? 'السير الذاتية المحفوظة' : 'Saved Resumes'}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/20 hover:bg-muted/40 transition-colors">
              <div className="space-y-1">
                <span className="font-bold block text-sm">{cvData.personalInfo.fullName} - {cvData.personalInfo.jobTitle}</span>
                <span className="text-xs text-muted-foreground">{isAr ? `القالب: ${cvData.templateId} | آخر تحديث: اليوم` : `Template: ${cvData.templateId} | Updated Today`}</span>
              </div>
              <Button size="sm" onClick={() => setActiveTab('builder')} className="gap-1 rounded-full">
                {isAr ? 'تعديل' : 'Edit'}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="border-2 p-6 space-y-6 shadow-md">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            {isAr ? 'نصائح الخبراء لزيادة حظوظ التوظيف' : 'Expert Career Tips'}
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-background border">
              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
              <span>{isAr ? 'احرص على تحديث إنجازاتك الرقمية وربط حساب GitHub أو LinkedIn بانتظام.' : 'Keep your digital footprint (GitHub/LinkedIn) updated and linked in the header.'}</span>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-background border">
              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
              <span>{isAr ? 'استخدم قالب "Modern" أو "Tech" إذا كنت تتقدم لشركة برمجيات كبرى لاجتياز فاحص الـ ATS.' : 'Use "Modern" or "Tech" templates when applying to engineering roles for high ATS parsing.'}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
