import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { RTLListItem } from '../components/common/RTLComponents';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { colors, isDark, toggleTheme } = useTheme();
  const { toggleLanguage, currentLanguage } = useLanguage();

  const renderSwitch = (value, onValueChange) => (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: colors.border, true: colors.primary + '99' }}
      thumbColor={value ? colors.primary : colors.card}
      ios_backgroundColor={colors.border}
      style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
    />
  );

  const sections = [
    {
      title: t('settings.appearance'),
      icon: isDark ? 'moon' : 'moon-outline',
      subtitle: t('settings.darkMode'),
      rightElement: renderSwitch(isDark, toggleTheme)
    },
    {
      title: t('settings.language'),
      icon: 'globe-outline',
      subtitle: currentLanguage === 'ar' ? 'العربية' : 'English',
      rightElement: renderSwitch(currentLanguage === 'ar', toggleLanguage)
    }
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {sections.map((section, index) => (
        <RTLListItem
          key={index}
          icon={section.icon}
          title={section.title}
          subtitle={section.subtitle}
          rightElement={section.rightElement}
          style={[
            styles.listItem,
            index === sections.length - 1 && styles.lastItem
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    marginBottom: 8,
  },
  lastItem: {
    marginBottom: 0,
  }
});
