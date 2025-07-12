import { getProfile } from '../api/account.js';
import { create } from 'zustand';
import { logout, signin } from '../api/auth.js';
import { isHaveToken, removeToken, setToken } from './sessionStore.jsx';

export type Account = {
  email: string;
  profile_pic: string;
  full_name: string;
  isActive: boolean;
};

interface authStoreInterface {
  isAuthenticated: boolean;
  account: Account | null;
  authLoading: boolean;
  error: string | null;

  setAccount: (account: Account) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  checkAuth: () => void;
  signin: (username: string, password: string) => void;
  signout: () => void;
}

export const authStore = create<authStoreInterface>((set) => ({
  isAuthenticated: isHaveToken(),
  account: null,
  authLoading: false,
  error: null,

  setAccount: (account: Account) => set({ account }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setAuthLoading: (authLoading: boolean) => set({ authLoading }),

  checkAuth: async () => {
    set({ authLoading: true });
    getProfile()
      .then((data) => {
        set({
          account: data,
          isAuthenticated: true,
          authLoading: false,
        });
      })
      .catch((error) => {
        set({
          isAuthenticated: false,
          account: null,
          authLoading: false,
          error: error,
        });
      });
  },
  signin: async (username: string, password: string) => {
    set({ authLoading: true });
    signin(username, password)
      .then((data) => {
        setToken(data.jwt);
        set({
          isAuthenticated: true,
          account: data,
          error: null,
          authLoading: false,
        });
        console.log('Login successful, token stored:', data.jwt);
      })
      .catch((error) => {
        console.error('Login error:', error);
        set({ error: error, authLoading: false });
      });
  },
  signout: async () => {
    set({ authLoading: true });
    logout()
      .then(() => {
        removeToken();
        set({ isAuthenticated: false, account: null, error: null, authLoading: false });
        console.log('Logout successful, token removed.');
      })
      .catch((error) => {
        console.error('Logout error:', error);
        set({ error: error, authLoading: false });
      });
  },
}));
