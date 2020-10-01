import {createTheme, useTheme as useReTheme} from '@shopify/restyle';

const palette = {
  mainGreen: '#2CB9B0',
  green: '#80B50E',
  blue: '#14A1FF',
  orange: '#FF9F0F',
  red: '#FF4258',
  white: '#FFFFFF',
  black: '#0B0B0B',
  darkBlue: '#0C0D34',
  grey: '#d6e0f0',
};

export const theme = createTheme({
  colors: {
    mainBackground: '#e9f1fe',
    mainForeground: palette.darkBlue,
    secondary: palette.darkBlue,
    text: 'rgba(12,13,52,0.7)',
    primary: palette.mainGreen,
    primaryLight: 'rgba(44, 185, 176,0.1)',
    white: palette.white,
    danger: palette.red,
    sucess: palette.green,
    info: palette.blue,
    warning: palette.orange,
    grey: palette.grey,
    transparent: 'transparent',
    ripple: 'rgba(12,13,52,0.1)',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 45,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 45,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 350,
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    hero: {
      fontFamily: 'Poppins-Bold',
      fontSize: 36,
      lineHeight: 40,
      color: 'secondary',
    },
    header: {
      fontFamily: 'Poppins-Bold',
      fontSize: 26,
      lineHeight: 30,
      color: 'secondary',
    },
    subHeader: {
      fontFamily: 'Poppins-Medium',
      fontSize: 20,
      lineHeight: 24,
      color: 'secondary',
    },
    title: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      lineHeight: 24,
      color: 'secondary',
    },
    button: {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      lineHeight: 18,
      color: 'secondary',
    },
    subTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      lineHeight: 18,
      color: 'text',
    },
    body: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      lineHeight: 18,
      color: 'text',
    },
    info: {
      fontFamily: 'Poppins-Regular',
      fontSize: 11,
      lineHeight: 18,
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
