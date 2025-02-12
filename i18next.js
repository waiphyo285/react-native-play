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
      // Login
      email: 'Email',
      password: 'Password',
      btn_login: 'Login',
      // Profile
      email: 'Email',
      english: 'English',
      myanmar: 'Myanmar',
      language: 'Language',
      dark_mode: 'Dark Mode',
      // Roll Dice
      btn_roll_dice: 'Roll Dice',
      btn_roll_again: 'Roll Again',
      msg_tie: "It's a tie round!",
      msg_winner: 'You are winner!',
      msg_loser: 'You are not winner!',
      // General
      player: 'Player',
      computer: 'Computer',
    },
  },
  my: {
    translation: {
      // Home
      btn_details: 'အသေးစိတ်',
      ban_play_now: 'ကစားမယ်',
      // Login
      email: 'အီးမေးလ်',
      password: 'လျို့ဝှက်နံပတ်',
      btn_login: 'လော့ဂ်အင်',
      // Profile
      email: 'အီးမေးလ်',
      english: 'အင်္ဂလိပ်',
      myanmar: 'မြန်မာ',
      language: 'ဘာသာစကား',
      dark_mode: 'Dark Mode',
      // Roll Dice
      btn_roll_dice: 'လှည့်မယ်',
      btn_roll_again: 'ထပ်လှည့်မယ်',
      msg_tie: 'သရေပွဲ ဖြစ်ပါတယ်!',
      msg_winner: 'မင်း နိုင်ပါတယ်!',
      msg_loser: 'မင်း ရှုံးပါတယ်!',
      // General
      player: 'ကစားသူ',
      computer: 'ကွန်ပျူတာ',
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
