import React from 'react';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface AnimatedHeroBadgeProps {
  isAr: boolean;
}

export const AnimatedHeroBadge: React.FC<AnimatedHeroBadgeProps> = ({ isAr }) => {
  return (
    <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950/50 to-indigo-950/60 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
      {/* Background Animated Glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold animate-float">
            <Sparkles className="h-4 w-4 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{isAr ? 'منصة بيئة الاحترافية للسير الذاتية • 50+ ثيم وتصميم' : 'Bayah Pro CV Suite • 50+ Themes & Layouts'}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-sky-300 bg-clip-text text-transparent">
            {isAr ? 'اصنع سيرة ذاتية تنافس كبرى الشركات العالمية' : 'Build Resumes That Pass Top Global ATS'}
          </h1>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {isAr 
              ? 'صمم سيرتك الذاتية باحترافية تامة مع أكثر من 50 قالب وتصميم مدروس بعناية، مع دعم كامل للغة العربية والإنجليزية وتصدير فورى.'
              : 'Craft your professional narrative with 50+ expertly curated themes, real-time ATS optimization, and instant bilingual export.'}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{isAr ? 'متوافق 100% مع أنظمة الفرز الآلي ATS' : '100% ATS Parsing Ready'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <Zap className="h-4 w-4 text-sky-400" />
              <span>{isAr ? 'تحديث فوري ومعاينة حية' : 'Live Real-time Preview'}</span>
            </div>
          </div>
        </div>

        {/* Lottie-style CSS Animated Graphic Widget */}
        <div className="relative flex items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 shadow-inner group">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex flex-col items-center gap-4 text-center">
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 animate-float">
              <Sparkles className="h-10 w-10 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-950 animate-ping" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-white">{isAr ? 'الأستاذ جعفر العبادي' : 'Mr. Jaafar Al-Abadi'}</h3>
              <p className="text-[11px] text-sky-400 font-medium">{isAr ? 'منصة بيئة الذكية' : 'Bayah Smart CV Studio'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
