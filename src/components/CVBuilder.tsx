import React, { useState } from 'react';
import { 
  FileText, Sparkles, Palette, User, Briefcase, 
  GraduationCap, Award, Plus, Trash2, Printer, Check, 
  Camera, Search, Calendar, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CVData, Language, TemplateStyle, CVStyling } from '../types/cv';
import { CV_THEMES } from '../data/cvThemes';
import { CVPreview } from './CVPreview';
import { ImageUploaderModal } from './ImageUploaderModal';

interface CVBuilderProps {
  cvData: CVData;
  setCvData: React.Dispatch<React.SetStateAction<CVData>>;
  language: Language;
}

export const CVBuilder: React.FC<CVBuilderProps> = ({ cvData, setCvData, language }) => {
  const [activeSection, setActiveSection] = useState<'personal' | 'experience' | 'education' | 'skills' | 'certifications' | 'themes' | 'design'>('themes');
  const [themeCategoryFilter, setThemeCategoryFilter] = useState<string>('All');
  const [themeSearchQuery, setThemeSearchQuery] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);
  const [dateErrors, setDateErrors] = useState<{ [key: string]: string }>({});
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const isAr = language === 'ar';

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  const validateDates = (id: string, start: string, end: string, isCurrent: boolean) => {
    if (!isCurrent && start && end && start > end) {
      setDateErrors(prev => ({
        ...prev,
        [id]: isAr ? 'تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء' : 'Start date cannot be after end date'
      }));
      return false;
    } else {
      setDateErrors(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
      return true;
    }
  };

  const totalWords = (
    cvData.personalInfo.fullName + ' ' + 
    cvData.personalInfo.jobTitle + ' ' + 
    cvData.personalInfo.summary + ' ' +
    cvData.experiences.map(e => e.company + ' ' + e.position + ' ' + e.description).join(' ') + ' ' +
    cvData.education.map(ed => ed.institution + ' ' + ed.degree + ' ' + ed.field).join(' ') + ' ' +
    cvData.certifications.map(c => c.name + ' ' + c.issuer).join(' ')
  ).split(/\s+/).filter(Boolean).length;

  const sectionCompletion = Math.round(
    ((cvData.personalInfo.fullName ? 20 : 0) +
     (cvData.experiences.length > 0 ? 30 : 0) +
     (cvData.education.length > 0 ? 20 : 0) +
     (cvData.skills.length > 0 ? 15 : 0) +
     (cvData.certifications.length > 0 ? 15 : 0))
  );

  const addExperience = () => {
    setCvData({
      ...cvData,
      experiences: [
        ...cvData.experiences,
        {
          id: Date.now().toString(),
          company: isAr ? 'شركة جديدة' : 'New Company',
          position: isAr ? 'مهندس برمجيات' : 'Software Engineer',
          location: isAr ? 'عن بعد' : 'Remote',
          startDate: '2023-01',
          endDate: '2024-01',
          current: false,
          description: isAr ? 'أهم المسؤوليات والإنجازات...' : 'Key responsibilities and achievements...',
          highlights: ['Built scalable features']
        }
      ]
    });
  };

  const addEducation = () => {
    setCvData({
      ...cvData,
      education: [
        ...cvData.education,
        {
          id: Date.now().toString(),
          institution: isAr ? 'الجامعة التقنية' : 'Tech University',
          degree: isAr ? 'بكالوريوس' : 'Bachelor',
          field: isAr ? 'علوم الحاسوب' : 'Computer Science',
          startDate: '2019-09',
          endDate: '2023-06',
          gpa: '3.8/4.0'
        }
      ]
    });
  };

  const addCertification = () => {
    setCvData({
      ...cvData,
      certifications: [
        ...cvData.certifications,
        {
          id: Date.now().toString(),
          name: isAr ? 'شهادة احترافية جديدة' : 'New Professional Certification',
          issuer: isAr ? 'جهة الإصدار' : 'Issuing Organization',
          date: '2023'
        }
      ]
    });
    showNotification(isAr ? 'تمت إضافة شهادة جديدة' : 'New certification added');
  };

  const updateStyling = (key: keyof CVStyling, value: any) => {
    setCvData({
      ...cvData,
      styling: {
        ...cvData.styling,
        [key]: value
      }
    });
  };

  const filteredThemes = CV_THEMES.filter(theme => {
    const matchesCategory = themeCategoryFilter === 'All' || theme.category === themeCategoryFilter;
    const matchesSearch = theme.nameEn.toLowerCase().includes(themeSearchQuery.toLowerCase()) || 
                          theme.nameAr.includes(themeSearchQuery) ||
                          theme.badge.toLowerCase().includes(themeSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 relative z-10 animate-in fade-in duration-300">
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="h-5 w-5" />
          <span className="font-bold text-sm">{notification}</span>
        </div>
      )}

      <ImageUploaderModal 
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        currentImageUrl={cvData.personalInfo.avatarUrl}
        onImageUpdate={(newUrl) => {
          setCvData({
            ...cvData,
            personalInfo: { ...cvData.personalInfo, avatarUrl: newUrl }
          });
          showNotification(isAr ? 'تم تحديث الصورة الشخصية بنجاح!' : 'Avatar updated successfully!');
        }}
        isAr={isAr}
      />

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl flex flex-wrap items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold animate-pulse">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{isAr ? 'أكثر من 50 ثيم وتصميم احترافي متوفر' : '50+ Professional CV Themes & Layouts Available'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            {isAr ? 'مصمم السيرة الذاتية الذكي المتقدم' : 'Advanced Smart CV Studio'}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl">
            {isAr 
              ? 'تخصيص كامل لتواريخ الخبرات والتعليم والشهادات الاحترافية مع التحقق الفوري.'
              : 'Full date customization for experiences, education, and professional certifications with instant validation.'}
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950/80 p-3 rounded-2xl border border-slate-800 shadow-inner relative z-10">
          <div className="relative">
            <img 
              src={cvData.personalInfo.avatarUrl || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"} 
              alt="Profile" 
              className="w-14 h-14 rounded-xl object-cover border-2 border-sky-500 shadow-lg animate-pulse"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 animate-ping" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">{cvData.personalInfo.fullName}</h4>
            <p className="text-[10px] text-sky-400 font-medium">{cvData.personalInfo.jobTitle}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsImageModalOpen(true)}
            className="ml-2 rounded-xl text-xs bg-slate-900 border-slate-700 hover:bg-slate-800"
          >
            <Camera className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Counters Header Bar */}
      <div className="bg-card/90 backdrop-blur-md border rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">{isAr ? 'اكتمال السيرة:' : 'CV Completion:'}</span>
            <div className="w-32 bg-muted rounded-full h-2.5 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${sectionCompletion}%` }} />
            </div>
            <span className="text-xs font-bold text-primary">{sectionCompletion}%</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-muted-foreground border-l pl-6">
            <FileText className="h-4 w-4 text-primary" />
            <span>{totalWords} {isAr ? 'كلمة' : 'words'}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={handlePrint} variant="outline" size="sm" className="gap-1.5 rounded-full border-slate-300">
            <Printer className="h-4 w-4 text-slate-700 dark:text-slate-300" />
            {isAr ? 'طباعة مباشرة' : 'Print CV'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Editor Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex flex-wrap gap-1.5 bg-muted/60 p-1.5 rounded-2xl border backdrop-blur-md">
            <button
              onClick={() => setActiveSection('themes')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'themes' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Palette className="h-3.5 w-3.5" />
              {isAr ? 'الـ 50+ ثيم' : '50+ Themes'}
            </button>
            <button
              onClick={() => setActiveSection('personal')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'personal' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="h-3.5 w-3.5" />
              {isAr ? 'المعلومات' : 'Personal'}
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'experience' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase className="h-3.5 w-3.5" />
              {isAr ? 'الخبرات' : 'Experience'}
            </button>
            <button
              onClick={() => setActiveSection('education')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'education' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {isAr ? 'التعليم' : 'Education'}
            </button>
            <button
              onClick={() => setActiveSection('certifications')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'certifications' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              {isAr ? 'الشهادات' : 'Certificates'}
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'skills' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              {isAr ? 'المهارات' : 'Skills'}
            </button>
            <button
              onClick={() => setActiveSection('design')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'design' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {isAr ? 'التصميم' : 'Design'}
            </button>
          </div>

          <Card className="p-6 space-y-6 shadow-md border-2 bg-card/90 backdrop-blur-md">
            {/* 50+ Themes Selection Section */}
            {activeSection === 'themes' && (
              <div className="space-y-4">
                <div className="flex flex-col gap-3 border-b pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-sky-500" />
                      {isAr ? 'مكتبة الثيمات والـ 50+ قالب' : '50+ CV Themes Library'}
                    </h3>
                    <span className="text-xs bg-sky-500/10 text-sky-400 font-bold px-2.5 py-1 rounded-full">
                      {filteredThemes.length} {isAr ? 'ثيم متاح' : 'Available'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
                      <Input 
                        placeholder={isAr ? 'ابحث عن قالب أو ثيم...' : 'Search themes...'}
                        value={themeSearchQuery}
                        onChange={(e) => setThemeSearchQuery(e.target.value)}
                        className="pl-9 text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['All', 'Modern & Clean', 'Executive & Corporate', 'Tech & Developer', 'Creative & Bold', 'Luxury & Dark'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setThemeCategoryFilter(cat)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                          themeCategoryFilter === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
                  {filteredThemes.map((theme) => {
                    const isSelected = cvData.templateId === theme.id;
                    return (
                      <div
                        key={theme.id}
                        onClick={() => {
                          setCvData({ 
                            ...cvData, 
                            templateId: theme.id, 
                            accentColor: theme.accentColor 
                          });
                          showNotification(isAr ? `تم تطبيق ثيم: ${theme.nameAr}` : `Applied theme: ${theme.nameEn}`);
                        }}
                        className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between gap-3 relative overflow-hidden group ${
                          isSelected 
                            ? 'border-sky-500 bg-sky-500/10 shadow-lg shadow-sky-500/10 scale-[1.02]' 
                            : 'border-border bg-background/50 hover:border-sky-400 hover:bg-muted/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                            {theme.badge}
                          </span>
                          <div 
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm" 
                            style={{ backgroundColor: theme.accentColor }} 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-foreground group-hover:text-sky-400 transition-colors">
                            {isAr ? theme.nameAr : theme.nameEn}
                          </h4>
                          <span className="text-[10px] text-muted-foreground">{theme.category}</span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-sky-500 text-white rounded-full p-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Personal Section */}
            {activeSection === 'personal' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-lg">{isAr ? 'المعلومات الشخصية' : 'Personal Details'}</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsImageModalOpen(true)}
                    className="gap-1.5 rounded-full text-xs font-semibold"
                  >
                    <Camera className="h-3.5 w-3.5 text-primary" />
                    {isAr ? 'تغيير الصورة الشخصية' : 'Change Avatar'}
                  </Button>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                    <Input 
                      value={cvData.personalInfo.fullName} 
                      onChange={(e) => setCvData({
                        ...cvData,
                        personalInfo: { ...cvData.personalInfo, fullName: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{isAr ? 'المسمى الوظيفي' : 'Job Title'}</label>
                    <Input 
                      value={cvData.personalInfo.jobTitle} 
                      onChange={(e) => setCvData({
                        ...cvData,
                        personalInfo: { ...cvData.personalInfo, jobTitle: e.target.value }
                      })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Email</label>
                      <Input 
                        value={cvData.personalInfo.email} 
                        onChange={(e) => setCvData({
                          ...cvData,
                          personalInfo: { ...cvData.personalInfo, email: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Phone</label>
                      <Input 
                        value={cvData.personalInfo.phone} 
                        onChange={(e) => setCvData({
                          ...cvData,
                          personalInfo: { ...cvData.personalInfo, phone: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Location</label>
                    <Input 
                      value={cvData.personalInfo.location} 
                      onChange={(e) => setCvData({
                        ...cvData,
                        personalInfo: { ...cvData.personalInfo, location: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">{isAr ? 'الملخص المهني' : 'Professional Summary'}</label>
                    <Textarea 
                      rows={4}
                      value={cvData.personalInfo.summary} 
                      onChange={(e) => setCvData({
                        ...cvData,
                        personalInfo: { ...cvData.personalInfo, summary: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-lg">{isAr ? 'الخبرات المهنية وتواريخها' : 'Work Experience & Dates'}</h3>
                  <Button size="sm" onClick={addExperience} className="gap-1 rounded-full">
                    <Plus className="h-4 w-4" />
                    {isAr ? 'إضافة خبرة' : 'Add Experience'}
                  </Button>
                </div>

                {cvData.experiences.map((exp, index) => {
                  const hasError = dateErrors[exp.id];
                  return (
                    <div key={exp.id} className="p-4 rounded-xl border bg-muted/20 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-primary flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          #{index + 1} - {exp.company || (isAr ? 'شركة جديدة' : 'New Company')}
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => {
                            const exps = cvData.experiences.filter(item => item.id !== exp.id);
                            setCvData({ ...cvData, experiences: exps });
                          }}
                          className="text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground">{isAr ? 'اسم الشركة' : 'Company'}</label>
                          <Input 
                            value={exp.company}
                            onChange={(e) => {
                              const updated = [...cvData.experiences];
                              updated[index].company = e.target.value;
                              setCvData({ ...cvData, experiences: updated });
                            }}
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground">{isAr ? 'المسمى الوظيفي' : 'Position'}</label>
                          <Input 
                            value={exp.position}
                            onChange={(e) => {
                              const updated = [...cvData.experiences];
                              updated[index].position = e.target.value;
                              setCvData({ ...cvData, experiences: updated });
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t">
                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-sky-500" />
                            {isAr ? 'تاريخ البدء (YYYY-MM)' : 'Start Date (YYYY-MM)'}
                          </label>
                          <Input 
                            type="text" 
                            placeholder="2018-01"
                            value={exp.startDate}
                            onChange={(e) => {
                              const val = e.target.value;
                              const updated = [...cvData.experiences];
                              updated[index].startDate = val;
                              setCvData({ ...cvData, experiences: updated });
                              validateDates(exp.id, val, exp.endDate, exp.current);
                            }}
                            className="text-xs font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-sky-500" />
                            {isAr ? 'تاريخ الانتهاء' : 'End Date'}
                          </label>
                          <Input 
                            type="text" 
                            placeholder="2021-02"
                            disabled={exp.current}
                            value={exp.current ? (isAr ? 'حتى الآن' : 'Present') : exp.endDate}
                            onChange={(e) => {
                              const val = e.target.value;
                              const updated = [...cvData.experiences];
                              updated[index].endDate = val;
                              setCvData({ ...cvData, experiences: updated });
                              validateDates(exp.id, exp.startDate, val, exp.current);
                            }}
                            className="text-xs font-mono disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
                          <input 
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              const updated = [...cvData.experiences];
                              updated[index].current = isChecked;
                              if (isChecked) {
                                updated[index].endDate = isAr ? 'حتى الآن' : 'Present';
                              }
                              setCvData({ ...cvData, experiences: updated });
                              validateDates(exp.id, exp.startDate, updated[index].endDate, isChecked);
                            }}
                            className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 h-4 w-4"
                          />
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {isAr ? 'أعمل هنا حالياً (حتى الآن)' : 'I currently work here'}
                          </span>
                        </label>
                      </div>

                      {hasError && (
                        <div className="flex items-center gap-1.5 text-xs text-rose-500 bg-rose-500/10 p-2 rounded-lg border border-rose-500/20">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{hasError}</span>
                        </div>
                      )}

                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">{isAr ? 'وصف المهام والإنجازات' : 'Description'}</label>
                        <Textarea 
                          rows={2} 
                          value={exp.description}
                          onChange={(e) => {
                            const updated = [...cvData.experiences];
                            updated[index].description = e.target.value;
                            setCvData({ ...cvData, experiences: updated });
                          }}
                          className="text-xs"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-lg">{isAr ? 'التعليم الأكاديمي وتواريخه' : 'Education & Dates'}</h3>
                  <Button size="sm" onClick={addEducation} className="gap-1 rounded-full">
                    <Plus className="h-4 w-4" />
                    {isAr ? 'إضافة تعليم' : 'Add Education'}
                  </Button>
                </div>

                {cvData.education.map((edu, index) => (
                  <div key={edu.id} className="p-4 rounded-xl border bg-muted/20 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5" />
                        #{index + 1} - {edu.institution || (isAr ? 'مؤسسة تعليمية' : 'Institution')}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          const edus = cvData.education.filter(item => item.id !== edu.id);
                          setCvData({ ...cvData, education: edus });
                        }}
                        className="text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">{isAr ? 'اسم المؤسسة' : 'Institution'}</label>
                        <Input 
                          value={edu.institution}
                          onChange={(e) => {
                            const updated = [...cvData.education];
                            updated[index].institution = e.target.value;
                            setCvData({ ...cvData, education: updated });
                          }}
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">{isAr ? 'الدرجة والتخصص' : 'Degree & Field'}</label>
                        <Input 
                          value={edu.degree}
                          onChange={(e) => {
                            const updated = [...cvData.education];
                            updated[index].degree = e.target.value;
                            setCvData({ ...cvData, education: updated });
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t">
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-sky-500" />
                          {isAr ? 'سنة / تاريخ البدء' : 'Start Date'}
                        </label>
                        <Input 
                          type="text" 
                          placeholder="2016"
                          value={edu.startDate}
                          onChange={(e) => {
                            const updated = [...cvData.education];
                            updated[index].startDate = e.target.value;
                            setCvData({ ...cvData, education: updated });
                          }}
                          className="text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-sky-500" />
                          {isAr ? 'سنة / تاريخ الانتهاء' : 'End Date'}
                        </label>
                        <Input 
                          type="text" 
                          placeholder="2020"
                          value={edu.endDate}
                          onChange={(e) => {
                            const updated = [...cvData.education];
                            updated[index].endDate = e.target.value;
                            setCvData({ ...cvData, education: updated });
                          }}
                          className="text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications & Accreditations Management Section */}
            {activeSection === 'certifications' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-sky-500" />
                      {isAr ? 'الشهادات والاعتمادات المهنية' : 'Professional Certificates & Accreditations'}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {isAr ? 'مثل: AWS Certified Solutions Architect, Scrum.org' : 'e.g. AWS Certified Solutions Architect, Scrum.org'}
                    </p>
                  </div>
                  <Button size="sm" onClick={addCertification} className="gap-1 rounded-full">
                    <Plus className="h-4 w-4" />
                    {isAr ? 'إضافة شهادة' : 'Add Certificate'}
                  </Button>
                </div>

                {cvData.certifications.length === 0 && (
                  <div className="text-center py-8 bg-muted/20 rounded-xl border border-dashed">
                    <Award className="h-8 w-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                    <p className="text-xs text-muted-foreground">
                      {isAr ? 'لم تتم إضافة شهادات بعد. اضغط على زر "إضافة شهادة" للبدء.' : 'No certificates added yet. Click "Add Certificate" to get started.'}
                    </p>
                  </div>
                )}

                {cvData.certifications.map((cert, index) => (
                  <div key={cert.id} className="p-4 rounded-xl border bg-muted/20 space-y-3 relative group">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        <Award className="h-3.5 w-3.5" />
                        #{index + 1} - {cert.name || (isAr ? 'شهادة جديدة' : 'New Certification')}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          const updatedCerts = cvData.certifications.filter(item => item.id !== cert.id);
                          setCvData({ ...cvData, certifications: updatedCerts });
                          showNotification(isAr ? 'تم حذف الشهادة بنجاح' : 'Certificate removed successfully');
                        }}
                        className="text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[11px] font-medium text-muted-foreground">
                          {isAr ? 'اسم الشهادة الاحترافية' : 'Certification Name'}
                        </label>
                        <Input 
                          placeholder="e.g. AWS Certified Solutions Architect"
                          value={cert.name}
                          onChange={(e) => {
                            const updated = [...cvData.certifications];
                            updated[index].name = e.target.value;
                            setCvData({ ...cvData, certifications: updated });
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground">
                            {isAr ? 'جهة الإصدار / المؤسسة' : 'Issuing Organization'}
                          </label>
                          <Input 
                            placeholder="e.g. Amazon Web Services / Scrum.org"
                            value={cert.issuer}
                            onChange={(e) => {
                              const updated = [...cvData.certifications];
                              updated[index].issuer = e.target.value;
                              setCvData({ ...cvData, certifications: updated });
                            }}
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-sky-500" />
                            {isAr ? 'تاريخ الحصول / السنة' : 'Date / Year'}
                          </label>
                          <Input 
                            placeholder="2022"
                            value={cert.date}
                            onChange={(e) => {
                              const updated = [...cvData.certifications];
                              updated[index].date = e.target.value;
                              setCvData({ ...cvData, certifications: updated });
                            }}
                            className="text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">{isAr ? 'المهارات التقنية' : 'Skills'}</h3>
                {cvData.skills.map((cat, index) => (
                  <div key={cat.id} className="p-4 rounded-xl border bg-muted/20 space-y-3">
                    <Input 
                      value={cat.category}
                      onChange={(e) => {
                        const updated = [...cvData.skills];
                        updated[index].category = e.target.value;
                        setCvData({ ...cvData, skills: updated });
                      }}
                    />
                    <Input 
                      placeholder="Comma separated skills"
                      value={cat.skills.join(', ')}
                      onChange={(e) => {
                        const updated = [...cvData.skills];
                        updated[index].skills = e.target.value.split(',').map(s => s.trim());
                        setCvData({ ...cvData, skills: updated });
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'design' && (
              <div className="space-y-6">
                <h3 className="font-bold text-lg border-b pb-2">
                  {isAr ? 'التصميم والتخصيص المتقدم' : 'Advanced Design & Styling'}
                </h3>
                
                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'لون التمييز (Accent Color)' : 'Accent Color'}</label>
                  <div className="flex gap-3">
                    {['#0284c7', '#059669', '#7c3aed', '#dc2626', '#334155', '#d97706', '#f59e0b', '#06b6d4'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setCvData({ ...cvData, accentColor: color })}
                        className={`h-8 w-8 rounded-full border-2 transition-transform ${cvData.accentColor === color ? 'scale-110 ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'نوع الخط' : 'Font Family'}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'sans', label: 'Sans-Serif' },
                      { id: 'serif', label: 'Serif' },
                      { id: 'mono', label: 'Monospace' }
                    ].map((font) => (
                      <Button
                        key={font.id}
                        variant={cvData.styling.fontFamily === font.id ? 'default' : 'outline'}
                        onClick={() => updateStyling('fontFamily', font.id)}
                        size="sm"
                        className="rounded-xl text-xs"
                      >
                        {font.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'حجم الخط' : 'Font Size'}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'sm', label: isAr ? 'صغير' : 'Small' },
                      { id: 'base', label: isAr ? 'متوسط' : 'Normal' },
                      { id: 'lg', label: isAr ? 'كبير' : 'Large' }
                    ].map((sz) => (
                      <Button
                        key={sz.id}
                        variant={cvData.styling.fontSize === sz.id ? 'default' : 'outline'}
                        onClick={() => updateStyling('fontSize', sz.id)}
                        size="sm"
                        className="rounded-xl text-xs"
                      >
                        {sz.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'تباعد الأسطر' : 'Line Spacing'}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'tight', label: isAr ? 'متقارب' : 'Tight' },
                      { id: 'normal', label: isAr ? 'عادي' : 'Normal' },
                      { id: 'relaxed', label: isAr ? 'متباعد' : 'Relaxed' }
                    ].map((sp) => (
                      <Button
                        key={sp.id}
                        variant={cvData.styling.lineSpacing === sp.id ? 'default' : 'outline'}
                        onClick={() => updateStyling('lineSpacing', sp.id)}
                        size="sm"
                        className="rounded-xl text-xs"
                      >
                        {sp.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'الهوامش' : 'Margins'}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'compact', label: isAr ? 'صغيرة' : 'Compact' },
                      { id: 'normal', label: isAr ? 'عادية' : 'Normal' },
                      { id: 'spacious', label: isAr ? 'واسعة' : 'Spacious' }
                    ].map((mg) => (
                      <Button
                        key={mg.id}
                        variant={cvData.styling.marginSize === mg.id ? 'default' : 'outline'}
                        onClick={() => updateStyling('marginSize', mg.id)}
                        size="sm"
                        className="rounded-xl text-xs"
                      >
                        {mg.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <label className="text-xs font-medium text-muted-foreground">{isAr ? 'لغة السيرة الذاتية' : 'CV Language'}</label>
                  <div className="flex gap-3">
                    <Button 
                      variant={cvData.language === 'en' ? 'default' : 'outline'}
                      onClick={() => setCvData({ ...cvData, language: 'en' })}
                      className="flex-1 rounded-full"
                    >
                      English 🇺🇸
                    </Button>
                    <Button 
                      variant={cvData.language === 'ar' ? 'default' : 'outline'}
                      onClick={() => setCvData({ ...cvData, language: 'ar' })}
                      className="flex-1 rounded-full"
                    >
                      العربية 🇮🇶
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Live Preview Panel */}
        <div className="lg:col-span-7 space-y-4 flex flex-col items-center justify-center">
          <div className="w-full flex flex-wrap justify-between items-center bg-card/90 backdrop-blur-md p-4 rounded-2xl border shadow-sm gap-3">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              {isAr ? 'المعاينة المباشرة (تحديث فوري ومتمركز في المنتصف)' : 'Live Preview (Centered & Auto-updating)'}
            </span>
            <div className="flex flex-wrap gap-2">
              <Button onClick={handlePrint} variant="outline" className="gap-2 rounded-full shadow-sm" size="sm">
                <Printer className="h-4 w-4 text-slate-700" />
                {isAr ? 'طباعة' : 'Print'}
              </Button>
            </div>
          </div>

          <div className="w-full flex justify-center items-center overflow-x-auto pb-6">
            <div className="mx-auto flex justify-center w-full">
              <CVPreview cvData={cvData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
