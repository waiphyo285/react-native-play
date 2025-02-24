import apiClient from './apiClient';
import { firebase } from '@react-native-firebase/firestore';
import { firebaseDb } from '@/helpers/firebase';

interface AuthData {
  email: string;
}
interface LoginData extends AuthData {
  password: string;
}

const userService = {
  login: async (data: LoginData) => {
    const userRef = firebaseDb.collection('users').where('email', '==', data.email);
    const snapshot = await userRef.get();

    if (!snapshot.empty) {
      return { data: snapshot.docs[0].data() };
    } else {
      const newUserRef = firebaseDb.collection('users').doc();
      await newUserRef.set({ email: data.email });
    }

    // const response = await apiClient.post('/login', data);
    // return response.data;
    return { data };
  },

  logout: async (data: AuthData) => {
    // const response = await apiClient.post('/logout', data);
    // return response.data;
    return true;
  },
};

export default userService;
