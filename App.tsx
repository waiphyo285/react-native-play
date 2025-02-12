import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import useAuthStore from '@/store/authStore';
import useConfigStore from '@/store/configStore';

import authService from '@/services/authService';
import configService from '@/services/configService';
import storageService from '@/services/storageService';

import i18next from './i18next';
import AppAuth from './AppWrapper';
import AppPaperProvider from './AppPaperProvider';
import SplashScreen from '@/screens/Onboard/SplashScreen';
import IntroSliderScreen from '@/screens/Onboard/StartScreen';

const App = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const darkTheme = useConfigStore(state => state.darkTheme);
  const isIntroDone = useConfigStore(state => state.introDone);

  const handleIntroDone = async () => {
    configService.setIntroDone({ introDone: true });
  };

  useEffect(() => {
    const checkCurrentUser = async () => {
      const authStatus = await authService.currentUser();
      if (authStatus) {
        authService.setUser(authStatus.user);
      }
    };

    const checkIntroStatus = async () => {
      const introStatus = await storageService.retrieveItem('introDone');
      if (introStatus === 'true') {
        configService.setIntroDone({ introDone: true });
      }
    };

    const loadDarkTheme = async () => {
      const savedDarkTheme = await storageService.retrieveItem('darkTheme');
      if (savedDarkTheme === 'true') {
        configService.setDarkTheme({ darkTheme: true });
      }
    };

    const loadLanguage = async () => {
      const savedLanguage = await storageService.retrieveItem('language');
      if (savedLanguage) {
        i18next.changeLanguage(savedLanguage);
      }
    };

    const initializeApp = async () => {
      await checkIntroStatus();
      await checkCurrentUser();
      await loadDarkTheme();
      await loadLanguage();
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

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
