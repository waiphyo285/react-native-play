import userApi from '@/api/userApi';
import useAuthStore from '@/store/authStore';
import { getItem, removeItem, setItem } from '@/helpers/localStorage';

interface AuthData {
  email: string;
}
interface LoginData extends AuthData {
  password: string;
}

const authService = {
  login: async (data: LoginData) => {
    const response = await userApi.login(data);
    useAuthStore.getState().loginUser(response.data);
    await setItem('user', JSON.stringify(response.data));
  },

  logout: async (data: AuthData) => {
    const response = await userApi.logout(data);
    if (response) {
      useAuthStore.getState().logoutUser();
      await removeItem('user');
    }
  },

  setUser: (data: LoginData) => {
    useAuthStore.getState().loginUser(data);
  },

  currentUser: async () => {
    const user = await getItem('user');
    const token = await getItem('authToken');
    return user ? { user: JSON.parse(user) } : null;
  },
};

export default authService;
