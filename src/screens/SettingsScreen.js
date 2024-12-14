import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { globalStyles } from '../styles/globalStyles';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <View style={[globalStyles.container, { alignItems: isRTL ? 'flex-end' : 'flex-start' }]}>
      <Text style={[globalStyles.title, { textAlign: isRTL ? 'right' : 'left' }]}>
        {t('settings')}
      </Text>
      <View style={globalStyles.card}>
        <Text style={[globalStyles.text, { textAlign: isRTL ? 'right' : 'left', marginBottom: 0 }]}>
          {t('currentLanguage')}
        </Text>
      </View>
    </View>
  );
}
