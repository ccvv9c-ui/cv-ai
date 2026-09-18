import React from 'react';
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, CheckCircle, Code, Star, Sparkles } from 'lucide-react';
import { CVData, CVStyling } from '../types/cv';

interface CVPreviewProps {
  cvData: CVData;
}

const defaultStyling: CVStyling = {
  fontSize: 'base',
  lineSpacing: 'normal',
  marginSize: 'normal',
  fontFamily: 'sans'
};

export const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  if (!cvData) return null;

  const { 
    personalInfo, 
    experiences = [], 
    education = [], 
    skills = [], 
    certifications = [], 
    templateId = 'modern', 
    accentColor = '#0284c7', 
    language = 'en', 
    styling = defaultStyling 
  } = cvData;

  const isAr = language === 'ar';
  const currentStyling = styling || defaultStyling;

  const fontFamily = currentStyling.fontFamily || 'sans';
  const fontSize = currentStyling.fontSize || 'base';
  const lineSpacing = currentStyling.lineSpacing || 'normal';
  const marginSize = currentStyling.marginSize || 'normal';

  const fontClass = fontFamily === 'serif' ? 'font-serif' : fontFamily === 'mono' ? 'font-mono' : 'font-sans';
  const sizeClass = fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base' : 'text-sm';
  const spacingClass = lineSpacing === 'tight' ? 'space-y-3' : lineSpacing === 'relaxed' ? 'space-y-8' : 'space-y-6';
  const paddingClass = marginSize === 'compact' ? 'p-6' : marginSize === 'spacious' ? 'p-12 md:p-16' : 'p-8 md:p-10';

  return (
    <div 
      id="cv-print-area"
      className={`bg-white text-slate-900 shadow-2xl rounded-2xl mx-auto my-0 w-full max-w-[210mm] min-h-[297mm] ${paddingClass} ${fontClass} ${sizeClass} relative overflow-hidden print:shadow-none print:m-0 print:p-6 transition-all duration-300 block`}
      style={{ direction: isAr ? 'rtl' : 'ltr', marginLeft: 'auto', marginRight: 'auto' }}
    >
      {/* 1. Modern / Default Templates */}
      {(templateId === 'modern' || templateId === 'nordic-clean' || templateId === 'ocean-breeze' || templateId === 'lavender-dream' || templateId === 'sapphire-blue' || templateId === 'eco-green') && (
        <div className={spacingClass}>
          <div className="border-b-2 pb-6 flex items-center justify-between" style={{ borderColor: accentColor }}>
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: accentColor }}>
                {personalInfo?.fullName}
              </h1>
              <p className="text-lg font-semibold text-slate-700">{personalInfo?.jobTitle}</p>
            </div>
            {personalInfo?.avatarUrl && (
              <img 
                src={personalInfo.avatarUrl} 
                alt={personalInfo.fullName} 
                className="w-20 h-20 rounded-2xl object-cover border-2 shadow-md animate-pulse"
                style={{ borderColor: accentColor }}
              />
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border">
            {personalInfo?.email && <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" style={{ color: accentColor }} />{personalInfo.email}</span>}
            {personalInfo?.phone && <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" style={{ color: accentColor }} />{personalInfo.phone}</span>}
            {personalInfo?.location && <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" style={{ color: accentColor }} />{personalInfo.location}</span>}
            {personalInfo?.website && <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" style={{ color: accentColor }} />{personalInfo.website}</span>}
          </div>

          {personalInfo?.summary && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                {isAr ? 'الملخص المهني' : 'Professional Summary'}
              </h2>
              <p className="leading-relaxed text-slate-700">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: accentColor }}>
                {isAr ? 'الخبرات المهنية' : 'Work Experience'}
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-slate-900">{exp.position}</h3>
                      <span className="text-xs font-semibold text-slate-500">
                        {exp.startDate} {exp.startDate && (exp.endDate || exp.current) ? ' - ' : ''} {exp.current ? (isAr ? 'حتى الآن' : 'Present') : exp.endDate}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-slate-600">{exp.company} {exp.location ? `• ${exp.location}` : ''}</div>
                    <p className="text-slate-700 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: accentColor }}>
                {isAr ? 'التعليم الأكاديمي' : 'Education'}
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-slate-900">{edu.degree} {edu.field ? `in ${edu.field}` : ''}</h3>
                    <p className="text-xs text-slate-600">{edu.institution} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                  </div>
                  <span className="text-xs text-slate-500">
                    {edu.startDate} {edu.startDate && edu.endDate ? ' - ' : ''} {edu.endDate}
                  </span>
                </div>
              ))}
            </div>
          )}

          {skills.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: accentColor }}>
                {isAr ? 'المهارات التقنية' : 'Technical Skills'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((cat) => (
                  <div key={cat.id} className="text-xs bg-slate-100 px-3 py-1.5 rounded-lg border">
                    <span className="font-bold text-slate-900">{cat.category}: </span>
                    <span className="text-slate-700">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: accentColor }}>
                {isAr ? 'الشهادات والاعتمادات' : 'Certifications'}
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-between text-xs">
                    <span className="font-bold text-slate-900">{cert.name} - <span className="font-normal text-slate-600">{cert.issuer}</span></span>
                    <span className="text-slate-500">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Executive / Corporate Templates */}
      {(templateId === 'executive' || templateId === 'corporate-elite' || templateId === 'royal-gold' || templateId === 'platinum-edition' || templateId === 'titanium-pro' || templateId === 'emerald-wealth' || templateId === 'fintech-lead' || templateId === 'product-visionary') && (
        <div className="space-y-6 text-slate-800 font-serif">
          <div className="text-center border-b-2 pb-6" style={{ borderColor: accentColor }}>
            <h1 className="text-3xl font-bold tracking-wide" style={{ color: accentColor }}>
              {personalInfo?.fullName}
            </h1>
            <p className="text-md font-medium text-slate-600 uppercase tracking-widest mt-1 font-sans">{personalInfo?.jobTitle}</p>
            <div className="flex justify-center gap-4 text-xs text-slate-600 mt-3 font-sans">
              {personalInfo?.email && <span>{personalInfo.email}</span>}
              {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
              {personalInfo?.location && <span>• {personalInfo.location}</span>}
            </div>
          </div>

          {personalInfo?.summary && (
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <p className="text-slate-700 italic leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-center border-b pb-1 font-sans" style={{ color: accentColor }}>
                {isAr ? 'الخبرات التنفيذية' : 'Executive Experience'}
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>{exp.position} - {exp.company}</span>
                    <span className="text-xs text-slate-500 font-sans">
                      {exp.startDate} - {exp.current ? (isAr ? 'حتى الآن' : 'Present') : exp.endDate}
                    </span>
                  </div>
                  <p className="text-slate-700 font-sans">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. Tech / Developer Templates */}
      {(templateId === 'tech' || templateId === 'ai-engineer' || templateId === 'data-scientist' || templateId === 'cloud-architect' || templateId === 'devops-ninja' || templateId === 'fullstack-guru' || templateId === 'blockchain-dev' || templateId === 'mobile-expert' || templateId === 'security-expert' || templateId === 'quantum-analyst') && (
        <div className="space-y-6 font-mono">
          <div className="p-6 rounded-xl bg-slate-900 text-slate-100 space-y-3 shadow-lg">
            <div className="flex items-center justify-between text-xs text-emerald-400">
              <span>// TECH_PROFILE_INIT</span>
              <span>{personalInfo?.location}</span>
            </div>
            <h1 className="text-2xl font-bold text-white">{personalInfo?.fullName}</h1>
            <p className="text-sm text-emerald-400">$ {personalInfo?.jobTitle}</p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
              {personalInfo?.email && <span>email: {personalInfo.email}</span>}
              {personalInfo?.website && <span>github: {personalInfo.website}</span>}
            </div>
          </div>

          {personalInfo?.summary && (
            <div className="space-y-2 font-sans">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {isAr ? 'نبذة عن المطور' : 'System Overview'}
              </h2>
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="space-y-4 font-sans">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {isAr ? 'سجل الخبرات' : 'Experience Log'}
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl border bg-slate-50 space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.position} @ {exp.company}</span>
                    <span className="text-xs font-mono text-emerald-600">
                      [{exp.startDate} &rarr; {exp.current ? 'Present' : exp.endDate}]
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. Creative / Bold Templates */}
      {(templateId === 'creative' || templateId === 'startup' || templateId === 'timeline' || templateId === 'sunset-gradient' || templateId === 'solar-flare' || templateId === 'ux-master' || templateId === 'brand-director' || templateId === 'game-architect' || templateId === 'growth-hacker' || templateId === 'bio-tech') && (
        <div className="space-y-6">
          <div className="p-8 rounded-2xl text-white space-y-3 shadow-xl" style={{ background: `linear-gradient(135deg, ${accentColor}, #7c3aed)` }}>
            <h1 className="text-3xl font-black tracking-tight">{personalInfo?.fullName}</h1>
            <p className="font-medium opacity-90">{personalInfo?.jobTitle}</p>
            <div className="flex flex-wrap gap-4 text-xs opacity-80 pt-2">
              {personalInfo?.email && <span>{personalInfo.email}</span>}
              {personalInfo?.phone && <span>{personalInfo.phone}</span>}
              {personalInfo?.location && <span>{personalInfo.location}</span>}
            </div>
          </div>

          {personalInfo?.summary && (
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                {isAr ? 'الملخص الإبداعي' : 'Creative Vision'}
              </h2>
              <p className="text-slate-700 leading-relaxed font-medium">{personalInfo.summary}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                {isAr ? 'المسيرة المهنية' : 'Career Timeline'}
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 pl-4 py-1 space-y-1" style={{ borderColor: accentColor }}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.position} - {exp.company}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {exp.startDate} / {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 5. Minimalist / Academic / Fallback Templates */}
      {!(templateId.includes('modern') || templateId.includes('nordic') || templateId.includes('ocean') || templateId.includes('lavender') || templateId.includes('sapphire') || templateId.includes('eco') || templateId.includes('executive') || templateId.includes('corporate') || templateId.includes('royal') || templateId.includes('platinum') || templateId.includes('titanium') || templateId.includes('emerald') || templateId.includes('fintech') || templateId.includes('product') || templateId.includes('tech') || templateId.includes('ai-') || templateId.includes('data-') || templateId.includes('cloud-') || templateId.includes('devops') || templateId.includes('fullstack') || templateId.includes('blockchain') || templateId.includes('mobile') || templateId.includes('security') || templateId.includes('quantum') || templateId.includes('creative') || templateId.includes('startup') || templateId.includes('timeline') || templateId.includes('sunset') || templateId.includes('solar') || templateId.includes('ux-') || templateId.includes('brand') || templateId.includes('game') || templateId.includes('growth') || templateId.includes('bio')) && (
        <div className="space-y-6 font-sans">
          <div className="border-b pb-4 space-y-1">
            <h1 className="text-3xl font-bold text-slate-900">{personalInfo?.fullName}</h1>
            <p className="font-semibold text-slate-600">{personalInfo?.jobTitle}</p>
            <div className="flex gap-4 text-xs text-slate-500 pt-1">
              <span>{personalInfo?.email}</span>
              <span>{personalInfo?.phone}</span>
              <span>{personalInfo?.location}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 rounded">
              {isAr ? 'الملخص المهني' : 'Summary'}
            </h2>
            <p className="text-slate-700 leading-relaxed">{personalInfo?.summary}</p>
          </div>

          {experiences.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 rounded">
                {isAr ? 'الخبرات المهنية' : 'Experience'}
              </h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.position} | {exp.company}</span>
                    <span className="text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-slate-700">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
