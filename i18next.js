import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Define translation resources
const resources = {
  en: {
    translation: {
      // Home
      btn_details: 'Details',
      ban_play_now: 'Play Now',
      // Profile
      english: 'English',
      spanish: 'Spanish',
      email: 'Email',
      dark_mode: 'Dark Mode',
      change_language: 'Change Language',
    },
  },
  es: {
    translation: {
      // Home
      btn_details: 'Detalles',
      ban_play_now: 'Jugar ahora',
      // Profile
      english: 'Inglés',
      spanish: 'Español',
      email: 'Correo Electrónico',
      dark_mode: 'Modo Oscuro',
      change_language: 'Cambiar Idioma',
    },
  },
};

// Get the current language from device settings
const deviceLanguage = RNLocalize.getLocales()[0].languageTag.split('-')[0];

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
