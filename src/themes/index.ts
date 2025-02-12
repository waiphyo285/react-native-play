import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

export const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2bb448',
    secondary: '#283848',
  },
};

export const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#2bb448',
    secondary: '#283848',
  },
};
