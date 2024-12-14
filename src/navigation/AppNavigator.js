import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { colors } = useTheme();

  const screenOptions = {
    headerShown: true,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.text,
    tabBarStyle: {
      backgroundColor: colors.card,
      borderTopColor: colors.border,
    },
    headerStyle: {
      backgroundColor: colors.card,
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
      fontWeight: '600',
    },
    headerTitleAlign: 'center',
  };

  const homeScreenOptions = {
    title: t('navigation.home'),
    headerTitle: t('navigation.home'),
    tabBarLabel: t('navigation.home'),
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} />
    ),
  };

  const settingsScreenOptions = {
    title: t('navigation.settings'),
    headerTitle: t('navigation.settings'),
    tabBarLabel: t('navigation.settings'),
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={size} color={color} />
    ),
  };

  return (
    <Tab.Navigator 
      screenOptions={screenOptions}
      initialRouteName="Home"
    >
      {isRTL ? (
        <>
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={settingsScreenOptions}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={settingsScreenOptions}
          />
        </>
      )}
    </Tab.Navigator>
  );
}
