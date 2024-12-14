import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../translations/en';
import ar from '../translations/ar';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

const init = async () => {
  const savedLanguage = await AsyncStorage.getItem('language');
  
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: savedLanguage || 'en',
      fallbackLng: 'en',
      compatibilityJSON: 'v3',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
};

init();

export default i18n;
