import { getItem, setItem } from '@/helpers/localStorage';

const storageService = {
  addItem: async (key: string, value: any) => {
    await setItem(key, value);
    return true;
  },
  retrieveItem: async (key: string) => {
    const item = await getItem(key);
    return item ? item : null;
  },
};

export default storageService;
