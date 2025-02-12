import userApi from '@/api/userApi';
import useAuthStore from '@/store/authStore';
import { getItem, setItem } from '@/helpers/localStorage';

interface LoginData {
  email: string;
  password: string;
}

const authService = {
  login: async (data: LoginData) => {
    const response = await userApi.login(data);
    useAuthStore.getState().loginUser(response.data);
    await setItem('user', JSON.stringify(response.data));
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
