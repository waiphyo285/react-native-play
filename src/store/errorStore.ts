import { create } from 'zustand';

interface ErrorStore {
  error: string | null;
  setError: (error: string | null) => void;
}

const useErrorStore = create<ErrorStore>(set => ({
  error: null,
  setError: error => set({ error }),
}));

export default useErrorStore;
