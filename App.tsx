import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { PaperProvider, DefaultTheme, MD3DarkTheme, useTheme } from 'react-native-paper';
import { I18nextProvider } from 'react-i18next';
import AppNavigator from './AppNavigator';
import LoginScreen from './src/screens/Auth/LoginScreen';
import useUserStore from './src/store/userStore';
import useThemeStore from './src/store/themeStore';
import i18next from './i18next';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#18a558', // Gold - Reward, Action, Attention
    secondary: '#ffcc00', // Red - Excitement, Urgency, Danger
    tertiary: '#70c837', // Neon Blue - Futuristic, Digital Vibes
  },
};

const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#18a558', // Gold - Reward, Action, Attention
    secondary: '#ffcc00', // Red - Excitement, Urgency, Danger
    tertiary: '#70c837', // Neon Blue - Futuristic, Digital Vibes
  },
};

const App = (): React.JSX.Element => {
  const darkTheme = useThemeStore(state => state.darkTheme);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  return (
    <I18nextProvider i18n={i18next}>
      <PaperProvider theme={darkTheme ? CustomDarkTheme : CustomTheme}>
        <AppWrapper isLoggedIn={isLoggedIn} />
      </PaperProvider>
    </I18nextProvider>
  );
};

const AppWrapper = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {!isLoggedIn ? <LoginScreen /> : <AppNavigator />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
