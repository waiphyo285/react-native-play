import { create } from 'zustand';

interface ErrorStore {
  darkTheme: boolean;
  setDarkTheme: (isDark: boolean) => void;
}

const useThemeStore = create<ErrorStore>(set => ({
  darkTheme: false,
  setDarkTheme: darkTheme => set({ darkTheme }),
}));

export default useThemeStore;
