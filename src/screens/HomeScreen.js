import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { language, changeLanguage, isRTL } = useLanguage();

  const toggleLanguage = async () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    await changeLanguage(newLanguage);
  };

  return (
    <View style={[globalStyles.container, { alignItems: isRTL ? 'flex-end' : 'flex-start' }]}>
      <Text style={[globalStyles.title, { textAlign: isRTL ? 'right' : 'left' }]}>
        {t('welcome')}
      </Text>
      <Text style={[globalStyles.text, { textAlign: isRTL ? 'right' : 'left' }]}>
        {t('description')}
      </Text>
      <TouchableOpacity 
        style={globalStyles.button}
        onPress={toggleLanguage}
      >
        <Text style={globalStyles.buttonText}>
          {language === 'en' ? 'Switch to Arabic' : 'تغيير إلى الإنجليزية'}
        </Text>
      </TouchableOpacity>
      <View style={globalStyles.card}>
        <Text style={[globalStyles.text, { textAlign: isRTL ? 'right' : 'left', marginBottom: 0 }]}>
          {t('currentLanguage')}
        </Text>
      </View>
    </View>
  );
}
