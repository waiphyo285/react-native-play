import React from 'react';
import { I18nextProvider } from 'react-i18next';
import useUserStore from './src/store/userStore';
import useThemeStore from './src/store/themeStore';
import AppPaperProvider from './AppPaperProvider';
import AppAuth from './AppWrapper';
import i18next from './i18next';

const App = (): React.JSX.Element => {
  const darkTheme = useThemeStore(state => state.darkTheme);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  return (
    <I18nextProvider i18n={i18next}>
      <AppPaperProvider darkTheme={darkTheme}>
        <AppAuth isLoggedIn={isLoggedIn} />
      </AppPaperProvider>
    </I18nextProvider>
  );
};

export default App;
