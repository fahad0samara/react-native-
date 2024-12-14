import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import i18n from '../i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    loadLanguageSettings();
  }, []);

  const loadLanguageSettings = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        await changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language settings:', error);
    }
  };

  const changeLanguage = async (language) => {
    try {
      const isArabic = language === 'ar';
      if (I18nManager.isRTL !== isArabic) {
        I18nManager.forceRTL(isArabic);
      }
      
      await i18n.changeLanguage(language);
      setCurrentLanguage(language);
      setIsRTL(isArabic);
      await AsyncStorage.setItem('language', language);
      
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const toggleLanguage = async () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    await changeLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      isRTL,
      toggleLanguage,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
