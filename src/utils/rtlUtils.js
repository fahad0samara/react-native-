import { I18nManager, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

export const isRTL = I18nManager.isRTL;

export const flipStyleValue = (value) => {
  if (typeof value !== 'string') return value;
  
  const flips = {
    'left': 'right',
    'right': 'left',
    'flex-start': 'flex-end',
    'flex-end': 'flex-start',
    'row': 'row-reverse',
    'row-reverse': 'row',
  };

  return flips[value] || value;
};

export const getPlatformRTLStyles = () => {
  if (!I18nManager.isRTL) return {};

  const baseStyles = {
    flexDirection: 'row-reverse',
    textAlign: 'right',
  };

  if (Platform.OS === 'ios') {
    return {
      ...baseStyles,
      writingDirection: 'rtl',
    };
  }

  return baseStyles;
};

export const getRTLMargin = (margin) => {
  if (!I18nManager.isRTL) return margin;

  const marginFlips = {
    marginLeft: 'marginRight',
    marginRight: 'marginLeft',
    marginStart: 'marginEnd',
    marginEnd: 'marginStart',
  };

  if (typeof margin === 'object') {
    const flippedMargin = {};
    Object.entries(margin).forEach(([key, value]) => {
      const flippedKey = marginFlips[key] || key;
      flippedMargin[flippedKey] = value;
    });
    return flippedMargin;
  }

  return margin;
};

export const getRTLPadding = (padding) => {
  if (!I18nManager.isRTL) return padding;

  const paddingFlips = {
    paddingLeft: 'paddingRight',
    paddingRight: 'paddingLeft',
    paddingStart: 'paddingEnd',
    paddingEnd: 'paddingStart',
  };

  if (typeof padding === 'object') {
    const flippedPadding = {};
    Object.entries(padding).forEach(([key, value]) => {
      const flippedKey = paddingFlips[key] || key;
      flippedPadding[flippedKey] = value;
    });
    return flippedPadding;
  }

  return padding;
};

export const getIconRotation = (isRTL) => {
  return {
    transform: [{ scaleX: isRTL ? -1 : 1 }],
  };
};

export const setAppLanguage = async (language) => {
  try {
    const shouldBeRTL = language === 'ar';
    
    // Only reload if RTL setting is different
    if (I18nManager.isRTL !== shouldBeRTL) {
      await AsyncStorage.setItem('language', language);
      I18nManager.allowRTL(shouldBeRTL);
      I18nManager.forceRTL(shouldBeRTL);
      await Updates.reloadAsync();
    } else {
      await AsyncStorage.setItem('language', language);
    }
  } catch (error) {
    console.error('Error setting language:', error);
  }
};
