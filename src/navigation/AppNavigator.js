import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { colors } from '../styles/globalStyles';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: isRTL ? 'right' : 'left',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
          textAlign: isRTL ? 'right' : 'left',
          marginLeft: isRTL ? 0 : Platform.OS === 'ios' ? 0 : 30,
          marginRight: isRTL ? Platform.OS === 'ios' ? 0 : 30 : 0,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarLabelPosition: isRTL ? 'right' : 'left',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
      sceneContainerStyle={{
        flexDirection: isRTL ? 'row-reverse' : 'row',
      }}
    >
      {isRTL ? (
        <>
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t('settings'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="settings-outline" 
                  size={size} 
                  color={color}
                  style={styles.rtlIcon}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: t('profile'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="person-outline" 
                  size={size} 
                  color={color}
                  style={styles.rtlIcon}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: t('home'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="home-outline" 
                  size={size} 
                  color={color}
                  style={styles.rtlIcon}
                />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: t('home'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="home-outline" 
                  size={size} 
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: t('profile'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="person-outline" 
                  size={size} 
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t('settings'),
              tabBarIcon: ({ color, size }) => (
                <Ionicons 
                  name="settings-outline" 
                  size={size} 
                  color={color}
                />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  rtlIcon: {
    transform: [{ scaleX: -1 }],
  },
});
