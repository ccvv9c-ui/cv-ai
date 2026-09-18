import React from 'react';
import { Heart, Github, Twitter, Linkedin, Sparkles } from 'lucide-react';
import { Language } from '../types/cv';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <footer className="border-t bg-background/80 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-sky-600 flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight">
                  {isAr ? 'منصة بيئة' : 'Bayah Platform'}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  v2.5 Pro
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {isAr ? 'إشراف وتطوير: الأستاذ جعفر العبادي' : 'Crafted with precision by Mr. Jaafar Al-Abadi'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              {isAr ? 'صُنع بكل' : 'Made with'} <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" /> {isAr ? 'في العراق' : 'for global professionals'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-sm">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-sm">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-muted/60 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-sm">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {isAr ? 'منصة بيئة (Bi\'ah). جميع الحقوق محفوظة.' : 'Bayah (Bi\'ah) CV Platform. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};
