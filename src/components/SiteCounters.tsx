import React, { useState, useEffect } from 'react';
import { Users, FileCheck, Award, Globe, TrendingUp, Sparkles } from 'lucide-react';
import { Language } from '../types/cv';

interface SiteCountersProps {
  language: Language;
}

export const SiteCounters: React.FC<SiteCountersProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [counts, setCounts] = useState({
    resumesCreated: 48920,
    atsMatched: 94.8,
    activeRecruiters: 1420,
    countriesServed: 64
  });

  useEffect(() => {
    // Subtle live increment effect for realism
    const interval = setInterval(() => {
      setCounts(prev => ({
        ...prev,
        resumesCreated: prev.resumesCreated + Math.floor(Math.random() * 3)
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/5 via-sky-500/5 to-purple-500/5 border-y py-8 my-8 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 p-4 rounded-2xl bg-background/60 border shadow-sm">
            <div className="flex justify-center items-center text-primary mb-2">
              <FileCheck className="h-5 w-5" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {counts.resumesCreated.toLocaleString()} +
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {isAr ? 'سيرة ذاتية تم إنشاؤها' : 'Resumes Generated'}
            </p>
          </div>

          <div className="space-y-1 p-4 rounded-2xl bg-background/60 border shadow-sm">
            <div className="flex justify-center items-center text-emerald-600 dark:text-emerald-400 mb-2">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
              {counts.atsMatched}%
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {isAr ? 'معدل اجتياز فاحص ATS' : 'Avg ATS Success Rate'}
            </p>
          </div>

          <div className="space-y-1 p-4 rounded-2xl bg-background/60 border shadow-sm">
            <div className="flex justify-center items-center text-purple-600 dark:text-purple-400 mb-2">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {counts.activeRecruiters.toLocaleString()} +
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {isAr ? 'شركة ومسؤول توظيف' : 'Active Hiring Partners'}
            </p>
          </div>

          <div className="space-y-1 p-4 rounded-2xl bg-background/60 border shadow-sm">
            <div className="flex justify-center items-center text-amber-600 dark:text-amber-400 mb-2">
              <Globe className="h-5 w-5" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {counts.countriesServed}
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {isAr ? 'دولة حول العالم' : 'Countries Worldwide'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
