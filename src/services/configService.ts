import useConfigStore from '@/store/configStore';
import { setItem } from '@/helpers/localStorage';

interface ConfigData {
  introDone?: boolean;
  darkTheme?: boolean;
  showModal?: boolean;
}

const configService = {
  setIntroDone: async (data: ConfigData) => {
    await setItem('introDone', String(data.introDone));
    useConfigStore.getState().setIntroDone(data.introDone as boolean);
  },

  setDarkTheme: async (data: ConfigData) => {
    await setItem('darkTheme', String(data.darkTheme));
    useConfigStore.getState().setDarkTheme(data.darkTheme as boolean);
  },

  setShowModal: async (data: ConfigData) => {
    useConfigStore.getState().setShowModal(data.showModal as boolean);
  },
};

export default configService;
