# خطة استعادة وتأهيل الشيفرة البرمجية (Codebase Recovery & Restoration Plan)
**إشراف المعمار البرمجي:** الأستاذ جعفر العبادي (Mr. Jaafar Al-Abadi)

---

## 1. استراتيجيات التحكم الإصداري والنسخ الاحتياطي (Version Control & Backup Strategies)

عند حدوث حذف غير مقصود للملفات والإعدادات، نتبع التسلسل الهرمي التالي للتعافي:

### أ. فحص سجل Git المحلي (Local Git Reflog)
إذا تم إجراء `git commit` قبل الحذف أو حتى التعديلات غير المثبتة:
```bash
# عرض سجل العمليات والتحولات في مستودع Git المحلي
git reflog

# استعادة ملف أو مجلد تم حذفه محلياً
git checkout <commit-hash> -- path/to/deleted/file
```

### ب. استعادة التعديلات غير المحفوظة (Stash & Uncommitted Changes)
إذا كانت التعديلات مخزنة في الذاكرة المؤقتة:
```bash
git stash list
git stash apply stash@{0}
```

### ج. النسخ الاحتياطي اليدوي في الـ IDE
* التحقق من سلة المحذوفات المحلية (Local History في VS Code عبر الضغط بزر الماوس الأيمن واختيار *Local History: Show History*).

---

## 2. قائمة تدقيق تدقيق الإعدادات (Configuration Audit Checklist)

يجب مراجعة الملفات الأساسية التالية للتأكد من عدم تلفها أو فقدانها:
- [ ] `package.json`: التحقق من وجود جميع التبعيات (Dependencies) والمكتبات الضرورية (مثل `lucide-react`, `html2pdf.js`, `react-router-dom`).
- [ ] `tsconfig.json`: التحقق من إعدادات TypeScript والمحددات والمسارات (`paths` & `baseUrl`).
- [ ] `vite.config.ts`: التأكد من إعدادات البناء والمكونات الإضافية (Vite Plugins).
- [ ] متغيرات البيئة (`.env` / `.env.example`): التأكد من عدم فقدان أي مفاتيح API أو إعدادات اتصال.

---

## 3. إعادة بناء الميزات (Feature Reconstruction Best Practices)

لضمان عودة الميزات المفقودة بكفاءة دون كسر التطبيق:
1. **النمط الجزيئي (Atomic Design):** إعادة بناء المكونات من الأساسيات (Atoms -> Molecules -> Organisms).
2. **عزل حالة التطبيق (State Isolation):** التأكد من فصل بيانات الحالة (`CVData`, `AppState`) عن واجهات العرض.
3. **الاختبار المستمر:** تشغيل خادم التطوير (`npm run dev`) والتحقق من لوحة تحكم الأخطاء في المتصفح بعد كل إضافة مكون.

---

## 4. تدابير وقائية للمستقبل (Prevention Measures)

1. **إنشاء فروع حماية (Protected Branches):** منع العمل المباشر على فرع الإنتاج (`main` أو `master`).
2. **النسخ الاحتياطي السحابي التلقائي:** ربط المشروع بمستودع خارجي (GitHub / GitLab) مع تفعيل الـ Auto-commit أو الحفظ المستمر.
3. **التوثيق المستمر:** تحديث ملفات `README.md` ووثائق المتطلبات بانتظام.

---
