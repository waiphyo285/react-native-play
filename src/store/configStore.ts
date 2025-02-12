import { create } from 'zustand';

interface ConfigStore {
  introDone: boolean;
  setIntroDone: (isDone: boolean) => void;

  darkTheme: boolean;
  setDarkTheme: (isDark: boolean) => void;

  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const useConfigStore = create<ConfigStore>(set => ({
  introDone: false,
  setIntroDone: isDone => set({ introDone: isDone }),

  darkTheme: false,
  setDarkTheme: darkTheme => set({ darkTheme }),

  showModal: false,
  setShowModal: showModal => set({ showModal }),
}));

export default useConfigStore;
