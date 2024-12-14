import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nManager } from 'react-native';
import { LanguageProvider } from './src/context/LanguageContext';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n';

// Enable RTL support globally
I18nManager.allowRTL(true);
I18nManager.forceRTL(I18nManager.isRTL);

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </LanguageProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
