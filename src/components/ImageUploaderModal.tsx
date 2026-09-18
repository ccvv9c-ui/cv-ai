import React, { useState } from 'react';
import { Upload, X, Check, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ImageUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImageUrl?: string;
  onImageUpdate: (url: string) => void;
  isAr: boolean;
}

const PRESET_AVATARS = [
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300'
];

export const ImageUploaderModal: React.FC<ImageUploaderModalProps> = ({
  isOpen,
  onClose,
  currentImageUrl,
  onImageUpdate,
  isAr
}) => {
  const [urlInput, setUrlInput] = useState(currentImageUrl || '');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          onImageUpdate(reader.result as string);
          onClose();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-6 text-white relative animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-sky-400" />
            {isAr ? 'تحديث صورة الملف الشخصي' : 'Update Profile Photo'}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Preset Avatars */}
        <div className="space-y-3">
          <Label className="text-xs text-slate-400">{isAr ? 'صور احترافية جاهزة' : 'Professional Preset Avatars'}</Label>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {PRESET_AVATARS.map((preset, idx) => (
              <img
                key={idx}
                src={preset}
                alt="Preset"
                onClick={() => {
                  onImageUpdate(preset);
                  onClose();
                }}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-700 hover:border-sky-500 cursor-pointer transition-all hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Direct URL Input */}
        <div className="space-y-2">
          <Label className="text-xs text-slate-400">{isAr ? 'أو أدخل رابط الصورة مباشرة (URL)' : 'Or Enter Image URL'}</Label>
          <div className="flex gap-2">
            <Input 
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://images.pexels.com/..."
              className="bg-slate-950 border-slate-800 text-xs text-white"
            />
            <Button 
              size="sm"
              onClick={() => {
                if (urlInput.trim()) {
                  onImageUpdate(urlInput.trim());
                  onClose();
                }
              }}
              className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
            >
              <Check className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Local File Upload */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <Label className="text-xs text-slate-400">{isAr ? 'رفع صورة من جهازك' : 'Upload from Device'}</Label>
          <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-950/50 hover:bg-slate-950 cursor-pointer transition-all">
            <Upload className="h-8 w-8 text-sky-400 mb-2" />
            <span className="text-xs font-semibold text-slate-300">
              {isAr ? 'انقر لاختيار صورة من جهازك' : 'Click to browse device'}
            </span>
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};
