import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import useUserStore from '@/store/userStore';
import useThemeStore from '@/store/themeStore';
import { getItem, setItem } from '@/helpers/localStorage';

import i18next from './i18next';
import AppAuth from './AppWrapper';
import AppPaperProvider from './AppPaperProvider';
import IntroSliderScreen from '@/screens/Onboard/StartScreen';

const App = (): React.JSX.Element => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const darkTheme = useThemeStore(state => state.darkTheme);
  const setDarkTheme = useThemeStore(state => state.setDarkTheme);
  const [isIntroDone, setIntroDone] = useState(false);

  const handleIntroDone = async () => {
    await setItem('introDone', 'true');
    setIntroDone(true);
  };

  useEffect(() => {
    const loadDarkTheme = async () => {
      const savedDarkTheme = await getItem('darkMode');
      if (savedDarkTheme === 'true') {
        setDarkTheme(true);
      }
    };

    const checkIntroStatus = async () => {
      const introStatus = await getItem('introDone');
      if (introStatus === 'true') {
        setIntroDone(true);
      }
    };

    loadDarkTheme();
    checkIntroStatus();
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <AppPaperProvider darkTheme={darkTheme}>
        {isIntroDone ? (
          <AppAuth isLoggedIn={isLoggedIn} />
        ) : (
          <IntroSliderScreen onDone={handleIntroDone} />
        )}
      </AppPaperProvider>
    </I18nextProvider>
  );
};

export default App;
