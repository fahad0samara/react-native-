import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';
import i18n from '../i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    loadLanguagePreference();
  }, []);

  const loadLanguagePreference = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
        const shouldBeRTL = savedLanguage === 'ar';
        setIsRTL(shouldBeRTL);
        I18nManager.allowRTL(shouldBeRTL);
        I18nManager.forceRTL(shouldBeRTL);
        await i18n.changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language preference:', error);
    }
  };

  const changeLanguage = async (newLanguage) => {
    try {
      const shouldBeRTL = newLanguage === 'ar';
      
      // Save the new language preference
      await AsyncStorage.setItem('language', newLanguage);
      
      // Update i18n language
      await i18n.changeLanguage(newLanguage);
      
      // Update context state
      setLanguage(newLanguage);
      setIsRTL(shouldBeRTL);

      // Handle RTL changes
      if (I18nManager.isRTL !== shouldBeRTL) {
        I18nManager.allowRTL(shouldBeRTL);
        I18nManager.forceRTL(shouldBeRTL);
        // Reload the app to apply RTL changes
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, changeLanguage }}>
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
