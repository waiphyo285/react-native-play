import React, { useMemo } from 'react';
import { PaperProvider } from 'react-native-paper';
import { CustomTheme, CustomDarkTheme } from '@/themes/index';

const AppPaperProvider = ({
  darkTheme,
  children,
}: {
  darkTheme: boolean;
  children: React.ReactNode;
}) => {
  const appTheme = useMemo(() => {
    const customTheme = darkTheme ? CustomDarkTheme : CustomTheme;

    const customFonts = Object.fromEntries(
      Object.entries(customTheme).map(([variantName, variantProps]: any) => [
        variantName,
        {
          ...variantProps,
          fontFamily: 'Orbitron',
        },
      ]),
    );
    return {
      ...customTheme,
      // fonts: customFonts,
    };
  }, [darkTheme]);

  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export default AppPaperProvider;
