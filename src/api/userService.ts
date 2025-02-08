import apiClient from './apiClient';

interface LoginData {
  email: string;
  password: string;
}

const userService = {
  login: async (data: LoginData) => {
    // const response = await apiClient.post('/login', data);
    // return response.data;
    return { data };
  },
};

export default userService;
