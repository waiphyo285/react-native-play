import { create } from 'zustand';

interface ConfigStore {
  introDone: boolean;
  setIntroDone: (isDone: boolean) => void;

  darkTheme: boolean;
  setDarkTheme: (isDark: boolean) => void;
}

const useConfigStore = create<ConfigStore>(set => ({
  introDone: false,
  setIntroDone: isDone => set({ introDone: isDone }),

  darkTheme: false,
  setDarkTheme: darkTheme => set({ darkTheme }),
}));

export default useConfigStore;
