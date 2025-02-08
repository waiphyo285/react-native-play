import { create } from 'zustand';

interface User {
  email: string;
  password: string;
}

interface UserStore {
  user: User | null;
  initialValues: User;
  isLoggedIn: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

const useUserStore = create<UserStore>(set => ({
  user: null,
  initialValues: {
    email: 'hello@gmail.com',
    password: '123456',
  },
  isLoggedIn: false,
  loginUser: (user: User) => {
    set({
      user,
      isLoggedIn: true,
      initialValues: { email: user.email, password: '' },
    });
  },
  logoutUser: () => {
    set({
      user: null,
      isLoggedIn: false,
      initialValues: {
        email: 'hello@gmail.com',
        password: '123456',
      },
    });
  },
}));

export default useUserStore;
