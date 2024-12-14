# RTL-LTR Expo App | تطبيق  للغات RTL/LTR

<div dir="rtl">

## نظرة عامة
تطبيق React Native Expo يدعم اللغة العربية والإنجليزية مع دعم كامل لاتجاه الكتابة من اليمين لليسار (RTL) واليسار لليمين (LTR).

## المميزات
- 🌍 دعم ثنائي اللغة (العربية والإنجليزية)
- 🔄 تبديل تخطيط RTL/LTR
- 🌓 وضع داكن/فاتح
- 💾 حفظ الإعدادات
- 📱 تصميم عصري

## المتطلبات الأساسية
- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn
- Expo CLI
- محاكي iOS (لنظام Mac) أو محاكي Android


## هيكل المشروع
```
src/
├── components/      # مكونات واجهة المستخدم القابلة لإعادة الاستخدام
├── context/         # مزودي سياق React
├── navigation/      # إعدادات التنقل
├── screens/         # شاشات التطبيق
└── translations/    # ملفات اللغة
```
</div>

---

## Overview
A React Native Expo app that supports both Arabic and English languages with full RTL (Right-to-Left) and LTR (Left-to-Right) support.

## Features
- 🌍 Bilingual Support (Arabic & English)
- 🔄 RTL/LTR Layout Switching
- 🌓 Dark/Light Theme Toggle
- 💾 Persistent Settings
- 📱 Modern UI Design

## Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator



## Project Structure
```
src/
├── components/      # Reusable UI components
├── context/         # React Context providers
├── navigation/      # Navigation configuration
├── screens/         # App screens
└── translations/    # Language files
```

## Key Components | المكونات الرئيسية

<div dir="rtl">

### بالعربية
- `LanguageContext`: إدارة تبديل اللغة وتخطيط RTL/LTR
- `ThemeContext`: التحكم في تبديل السمة الداكنة/الفاتحة
- `RTLComponents`: مكونات واجهة المستخدم الداعمة للـ RTL
- `i18n`: إعدادات التعريب
</div>

### In English
- `LanguageContext`: Manages language switching and RTL/LTR layout
- `ThemeContext`: Handles dark/light theme switching
- `RTLComponents`: RTL-aware UI components
- `i18n`: Internationalization configuration

## Technologies | التقنيات المستخدمة

<div dir="rtl">

### المستخدمة
- React Native
- Expo
- React Navigation
- react-i18next
- AsyncStorage
- React Context API
</div>

## Contributing | المساهمة

<div dir="rtl">

### للمساهمة
1. انسخ المستودع
2. أنشئ فرع الميزة الخاص بك (`git checkout -b feature/amazing-feature`)
3. قم بعمل commit للتغييرات (`git commit -m 'إضافة ميزة رائعة'`)
4. ادفع إلى الفرع (`git push origin feature/amazing-feature`)
5. افتح طلب سحب
</div>

## License | الرخصة



