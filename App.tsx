import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import useUserStore from '@/store/userStore';
import useThemeStore from '@/store/themeStore';
import IntroSliderScreen from '@/screens/Onboard/StartScreen';
import AppPaperProvider from './AppPaperProvider';
import AppAuth from './AppWrapper';
import i18next from './i18next';

const App = (): React.JSX.Element => {
  const darkTheme = useThemeStore(state => state.darkTheme);
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const [isIntroDone, setIntroDone] = useState(false);

  useEffect(() => {
    // const introStatus = localStorage.getItem('introDone');
    // if (introStatus) {
    //   setIntroDone(true);
    // }
  }, []);

  const handleIntroDone = () => {
    // localStorage.setItem('introDone', 'true');
    setIntroDone(true);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <AppPaperProvider darkTheme={darkTheme}>
        {!isIntroDone ? (
          <IntroSliderScreen onDone={handleIntroDone} />
        ) : (
          <AppAuth isLoggedIn={isLoggedIn} />
        )}
      </AppPaperProvider>
    </I18nextProvider>
  );
};

export default App;
