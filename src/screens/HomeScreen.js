import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { RTLView, RTLText, RTLButton } from '../components/common/RTLComponents';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { language } = useLanguage();

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <RTLView style={styles.header}>
        <RTLView style={styles.welcomeSection}>
          <RTLText style={styles.title}>
            {t('home.welcome')}
          </RTLText>
          <RTLText style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t('home.subtitle')}
          </RTLText>
        </RTLView>
        <RTLButton
          icon={language === 'ar' ? 'language-outline' : 'language'}
          variant="text"
          onPress={navigateToSettings}
          style={styles.languageButton}
        />
      </RTLView>

      <RTLView style={styles.featuresContainer}>
        <RTLText style={styles.sectionTitle}>
          {t('home.features')}
        </RTLText>

        <RTLView style={styles.featureList}>
          <FeatureCard
            icon="language"
            title={t('home.feature1')}
            description={t('home.feature1Description')}
            colors={colors}
          />
          <FeatureCard
            icon="swap-horizontal"
            title={t('home.feature2')}
            description={t('home.feature2Description')}
            colors={colors}
          />
          <FeatureCard
            icon="color-palette"
            title={t('home.feature3')}
            description={t('home.feature3Description')}
            colors={colors}
          />
        </RTLView>
      </RTLView>

      <RTLView style={styles.actions}>
        <RTLButton
          title={t('settings.language')}
          icon="language"
          variant="outlined"
          style={styles.actionButton}
          onPress={() => navigateToSettings()}
        />
        <RTLButton
          title={t('settings.theme')}
          icon="color-palette"
          style={styles.actionButton}
          onPress={() => navigateToSettings()}
        />
      </RTLView>
    </ScrollView>
  );
}

const FeatureCard = ({ icon, title, description, colors }) => (
  <RTLView style={[styles.featureCard, { backgroundColor: colors.card }]}>
    <RTLView style={[styles.iconContainer, { backgroundColor: colors.primary + '20' }]}>
      <Ionicons name={icon} size={24} color={colors.primary} />
    </RTLView>
    <RTLView style={styles.featureContent}>
      <RTLText style={[styles.featureTitle, { color: colors.text }]}>
        {title}
      </RTLText>
      <RTLText style={[styles.featureDescription, { color: colors.textSecondary }]}>
        {description}
      </RTLText>
    </RTLView>
  </RTLView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  welcomeSection: {
    flex: 1,
  },
  languageButton: {
    marginLeft: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  featureList: {
    gap: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    width: '100%',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
});
