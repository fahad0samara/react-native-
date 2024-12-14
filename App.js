import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from './src/context/LanguageContext';
import AppNavigator from './src/navigation/AppNavigator';
import { I18nManager } from 'react-native';
import 'react-native-gesture-handler';
import './src/i18n';

// Configure the default RTL behavior
I18nManager.allowRTL(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
