import apiClient from './apiClient';

interface AuthData {
  email: string;
}
interface LoginData extends AuthData {
  password: string;
}

const userService = {
  login: async (data: LoginData) => {
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
