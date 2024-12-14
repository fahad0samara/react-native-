import React, { createContext, useContext, useState, useEffect } from 'react';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../i18n';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        const isRTL = savedLanguage === 'ar';
        await handleLanguageChange(savedLanguage, isRTL, false);
      }
    } catch (error) {
      console.error('Error loading saved language:', error);
    }
  };

  const handleLanguageChange = async (newLanguage, isRTL, savePreference = true) => {
    try {
      // Update RTL setting without restarting
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
      }

      // Update i18n language
      await i18n.changeLanguage(newLanguage);

      // Update state
      setLanguage(newLanguage);
      setIsRTL(isRTL);

      // Save preference if needed
      if (savePreference) {
        await AsyncStorage.setItem('language', newLanguage);
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const changeLanguage = async (newLanguage) => {
    const isRTL = newLanguage === 'ar';
    await handleLanguageChange(newLanguage, isRTL);
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
