import userService from '../api/userService';
import useUserStore from '../store/userStore';

interface LoginData {
  email: string;
  password: string;
}

const authService = {
  login: async (data: LoginData) => {
    const response = await userService.login(data);
    useUserStore.getState().loginUser(response.data);
  },
};

export default authService;
