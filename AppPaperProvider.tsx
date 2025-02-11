import React, { useMemo } from 'react';
import { PaperProvider } from 'react-native-paper';
import { CustomTheme, CustomDarkTheme } from './src/themes/index';

const REGULAR = ['title', 'bodySmall'];
const BOLD = ['display', 'headline'];

const AppPaperProvider = ({
  children,
  darkTheme,
}: {
  children: React.ReactNode;
  darkTheme: boolean;
}) => {
  const appTheme = useMemo(() => {
    const customTheme = darkTheme ? CustomDarkTheme : CustomTheme;

    const customFonts = Object.fromEntries(
      Object.entries(customTheme).map(([variantName, variantProps]: any) => [
        variantName,
        {
          ...variantProps,
          fontFamily: 'Orbitron',
          //   fontFamily: BOLD.find(f => variantName.toLowerCase().includes(f))
          //     ? 'Orbitron'
          //     : REGULAR.find(f => variantName.toLowerCase().includes(f))
          //     ? 'Orbitron'
          //     : 'Orbitron',
        },
      ]),
    );
    return {
      ...customTheme,
      fonts: customFonts,
    };
  }, [darkTheme]);

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export default AppPaperProvider;
