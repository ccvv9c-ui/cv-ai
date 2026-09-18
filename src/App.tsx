import React, { useState, useRef } from 'react';
import { 
  FileText, LayoutDashboard, ShieldCheck, Download, Printer, 
  Sparkles, Palette, Globe, Check, Settings2, HelpCircle, 
  User, Briefcase, GraduationCap, Award, Plus, Trash2, Edit3 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { CVData, Language, TemplateStyle, CVStyling } from './types/cv';
import { initialCVData } from './data/mockData';
import { expertOptimizedCVData } from './data/expertOptimizedCV';
import { CVPreview } from './components/CVPreview';
import { Dashboard } from './components/Dashboard';
import { ATSChecker } from './components/ATSChecker';
import { ExpertReviewReport } from './components/ExpertReviewReport';
import { CVBuilder } from './components/CVBuilder';
import { AnimatedHeroBadge } from './components/AnimatedHeroBadge';
import { exportElementToPDF } from './utils/pdfExport';

export function App() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [exporting, setExporting] = useState<boolean>(false);
  const [exportStatus, setExportStatus] = useState<string>('');

  const isAr = cvData.language === 'ar';

  const handleLanguageToggle = () => {
    setCvData(prev => ({
      ...prev,
      language: prev.language === 'en' ? 'ar' : 'en'
    }));
  };

  const handleApplyExpertData = () => {
    setCvData(expertOptimizedCVData);
    setActiveTab('builder');
  };

  const handleDownloadPDF = async () => {
    setExporting(true);
    try {
      await exportElementToPDF('cv-print-area', {
        filename: `Jaafar_Al_Abadi_CV_${cvData.templateId}.pdf`,
        isAr,
        onProgress: (status) => setExportStatus(status),
        onSuccess: () => setExportStatus(''),
        onError: () => setExportStatus('')
      });
    } catch (err) {
      console.error('PDF Export failed, falling back to print', err);
      window.print();
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white animated-bg-gradient">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('dashboard')}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black shadow-lg shadow-sky-500/25 text-lg group-hover:scale-105 transition-transform">
            بي
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              بيئة • Bayah CV
            </h1>
            <p className="text-[10px] text-slate-400 font-medium">
              {isAr ? 'منصة السيرة الذاتية للأستاذ جعفر العبادي' : 'Smart CV Platform for Mr. Jaafar Al-Abadi'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
          <Button 
            variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('dashboard')}
            className="rounded-full text-xs h-8 px-4 transition-all duration-300 hover:scale-105"
          >
            <LayoutDashboard className="h-3.5 w-3.5 mr-1.5" />
            {isAr ? 'لوحة التحكم' : 'Dashboard'}
          </Button>

          <Button 
            variant={activeTab === 'builder' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('builder')}
            className="rounded-full text-xs h-8 px-4 transition-all duration-300 hover:scale-105"
          >
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            {isAr ? 'المصمم الشامل' : 'Full CV Builder'}
          </Button>

          <Button 
            variant={activeTab === 'expert-review' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('expert-review')}
            className="rounded-full text-xs h-8 px-4 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5 text-emerald-400 animate-pulse" />
            {isAr ? 'مراجعة الخبير' : 'Expert Review'}
          </Button>

          <Button 
            variant={activeTab === 'ats' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('ats')}
            className="rounded-full text-xs h-8 px-4 transition-all duration-300 hover:scale-105"
          >
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
            {isAr ? 'فاحص الـ ATS' : 'ATS Scanner'}
          </Button>
        </div>

        {/* Header Right Utilities */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLanguageToggle}
            className="rounded-full text-xs h-9 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:scale-105 transition-transform"
          >
            <Globe className="h-3.5 w-3.5 mr-1.5 text-sky-400" />
            {isAr ? 'English 🇺🇸' : 'العربية 🇮🇶'}
          </Button>

          <Button 
            onClick={handleDownloadPDF} 
            disabled={exporting}
            size="sm" 
            className="rounded-full text-xs h-9 gap-1.5 shadow-lg shadow-sky-500/20 bg-sky-600 hover:bg-sky-500 text-white font-semibold hover:scale-105 transition-transform"
          >
            <Download className="h-3.5 w-3.5" />
            {exporting ? (exportStatus || (isAr ? 'جاري التصدير...' : 'Exporting...')) : (isAr ? 'تحميل PDF' : 'Export PDF')}
          </Button>
        </div>
      </header>

      {/* Main App Content Area */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 space-y-8">
        <AnimatedHeroBadge isAr={isAr} />

        {activeTab === 'dashboard' && (
          <Dashboard language={cvData.language} cvData={cvData} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'expert-review' && (
          <ExpertReviewReport language={cvData.language} onApplyOptimized={handleApplyExpertData} />
        )}

        {activeTab === 'ats' && (
          <ATSChecker language={cvData.language} cvData={cvData} />
        )}

        {activeTab === 'builder' && (
          <CVBuilder cvData={cvData} setCvData={setCvData} language={cvData.language} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 px-4 md:px-8 text-center text-xs text-slate-500">
        <p>بيئة (Bayah) • {isAr ? 'جميع الحقوق محفوظة للأستاذ جعفر العبادي' : 'Professional CV Suite for Mr. Jaafar Al-Abadi'}</p>
      </footer>
    </div>
  );
}

export default App;
