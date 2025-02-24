import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  // apiKey: 'YOUR_API_KEY',
  // authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'react-native-play-login',
  appId: '1:764285331381:android:74a4f2e09becf1e6641bfc',
  storageBucket: 'react-native-play-login.firebasestorage.app',
  // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export const auth = firebase.auth();
export const firebaseDb = firebase.firestore();
