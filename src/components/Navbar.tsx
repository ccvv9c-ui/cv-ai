import React from 'react';
import { FileText, Sparkles, LayoutDashboard, Globe, ShieldCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language } from '../types/cv';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, language, setLanguage }) => {
  const isAr = language === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('builder')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-sky-600 text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                بيئة
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                {isAr ? 'المهنية' : 'Pro'}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium">
              {isAr ? 'بواسطة الأستاذ جعفر العبادي' : 'By Mr. Jaafar Al-Abadi'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/60 p-1.5 rounded-full border shadow-inner">
          <button
            onClick={() => setActiveTab('builder')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'builder' ? 'bg-background text-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <FileText className="h-4 w-4" />
            {isAr ? 'منصة السيرة الذاتية' : 'CV Builder'}
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'templates' ? 'bg-background text-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Award className="h-4 w-4" />
            {isAr ? 'القوالب الاحترافية' : 'Templates'}
          </button>
          <button
            onClick={() => setActiveTab('ats')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'ats' ? 'bg-background text-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            {isAr ? 'فاحص ATS' : 'ATS Checker'}
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'dashboard' ? 'bg-background text-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            {isAr ? 'لوحة التحكم' : 'Dashboard'}
          </button>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(isAr ? 'en' : 'ar')}
            className="gap-2 rounded-full font-medium shadow-sm hover:scale-105 transition-transform"
          >
            <Globe className="h-4 w-4 text-primary" />
            {isAr ? 'English 🇺🇸' : 'العربية 🇮🇶'}
          </Button>

          <Button 
            size="sm" 
            onClick={() => setActiveTab('builder')}
            className="hidden sm:flex gap-1.5 rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
          >
            <Sparkles className="h-4 w-4" />
            {isAr ? 'إنشاء سيرة ذاتية' : 'Create CV'}
          </Button>
        </div>
      </div>
    </header>
  );
};
