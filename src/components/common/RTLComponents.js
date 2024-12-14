import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../../context/LanguageContext';

const getFlexDirection = (isRTL) => ({
  flexDirection: isRTL ? 'row' : 'row-reverse'
});

const getMargins = (isRTL) => ({
  marginLeft: isRTL ? 0 : 16,
  marginRight: isRTL ? 16 : 0
});

const getAlignment = (isRTL) => ({
  alignItems: isRTL ? 'flex-start' : 'flex-end',
  textAlign: isRTL ? 'left' : 'right'
});

export const RTLView = ({ style, children, ...props }) => {
  return (
    <View 
      style={[
        getFlexDirection(I18nManager.isRTL),
        style
      ]} 
      {...props}
    >
      {children}
    </View>
  );
};

export const RTLText = ({ style, children, ...props }) => {
  const isRTL = I18nManager.isRTL;
  return (
    <Text 
      style={[
        { 
          textAlign: isRTL ? 'left' : 'right',
          writingDirection: isRTL ? 'rtl' : 'ltr'
        },
        style
      ]} 
      {...props}
    >
      {children}
    </Text>
  );
};

export const RTLTextInput = ({ style, ...props }) => {
  const isRTL = I18nManager.isRTL;
  return (
    <TextInput
      style={[
        { 
          textAlign: isRTL ? 'left' : 'right',
          writingDirection: isRTL ? 'rtl' : 'ltr'
        },
        style
      ]}
      {...props}
    />
  );
};

export const RTLButton = ({ 
  title, 
  onPress, 
  style, 
  variant = 'filled',
  icon,
  disabled = false,
  ...props 
}) => {
  const { colors } = useTheme();
  const isRTL = I18nManager.isRTL;
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.primary,
          },
          text: {
            color: colors.primary,
          },
          icon: colors.primary,
        };
      case 'text':
        return {
          container: {
            backgroundColor: 'transparent',
            paddingHorizontal: 8,
          },
          text: {
            color: colors.primary,
          },
          icon: colors.primary,
        };
      default:
        return {
          container: {
            backgroundColor: colors.primary,
          },
          text: {
            color: colors.buttonText,
          },
          icon: colors.buttonText,
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getFlexDirection(isRTL),
        variantStyles.container,
        style,
        disabled && { opacity: 0.5 },
      ]}
      {...props}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={variantStyles.icon}
          style={[
            title ? styles.buttonIcon : null,
            { transform: [{ scaleX: isRTL ? -1 : 1 }] }
          ]}
        />
      )}
      {title && (
        <RTLText style={[styles.buttonText, variantStyles.text]}>
          {title}
        </RTLText>
      )}
    </TouchableOpacity>
  );
};

export const RTLListItem = ({
  icon,
  title,
  subtitle,
  onPress,
  rightElement,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const { isRTL } = useLanguage();
  const isClickable = !!onPress;
  const Container = isClickable ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      style={[
        styles.listItem,
        { backgroundColor: colors.card },
        style,
        isClickable && styles.clickable,
      ]}
      {...props}
    >
      <View style={[
        styles.listItemContent,
        { flexDirection: isRTL ? 'row-reverse' : 'row' }
      ]}>
        <View style={[
          styles.mainSection,
          { flexDirection: isRTL ? 'row-reverse' : 'row' }
        ]}>
          {icon && (
            <View style={[
              styles.iconContainer,
              { backgroundColor: colors.primary + '15' },
              isRTL ? { marginLeft: 12 } : { marginRight: 12 }
            ]}>
              <Ionicons 
                name={icon} 
                size={22} 
                color={colors.primary}
              />
            </View>
          )}
          <View style={styles.textContainer}>
            <Text 
              style={[
                styles.listItemTitle,
                { 
                  color: colors.text,
                  textAlign: isRTL ? 'right' : 'left'
                }
              ]}
            >
              {title}
            </Text>
            {subtitle && (
              <Text 
                style={[
                  styles.listItemSubtitle,
                  { 
                    color: colors.textSecondary,
                    textAlign: isRTL ? 'right' : 'left'
                  }
                ]}
              >
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {rightElement && (
          <View style={[
            styles.rightElement,
            isRTL ? { marginRight: 'auto', marginLeft: 8 } : { marginLeft: 'auto', marginRight: 8 }
          ]}>
            {rightElement}
          </View>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    minHeight: 48,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonIcon: {
    marginHorizontal: 8,
  },
  listItem: {
    borderRadius: 12,
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
  },
  listItemContent: {
    width: '100%',
    alignItems: 'center',
  },
  mainSection: {
    flex: 1,
    alignItems: 'center',
    minWidth: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  listItemSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  rightElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickable: {
    cursor: 'pointer',
  },
});
