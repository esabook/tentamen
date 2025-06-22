import { getProfile } from "../api/account.js";
import { create } from "zustand";
import { logout, signin } from "../api/auth.js";


export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  account: null,
  authLoading: false,
  setUser: (account) => set({ account }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setAuthLoading: (authLoading) => set({ authLoading }),

  checkAuth: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ authLoading: true });
      getProfile(token)
        .then((data) => {
          set({
            account: data,
            isAuthenticated: true,
            authLoading: false,
          });
        })
        .catch(() => {
          set({
            isAuthenticated: false,
            account: null,
            authLoading: false,
          });
        });
    } else {
      set({
        isAuthenticated: false,
        account: null,
        authLoading: false,
      });
    }
  },
  signin: async (username, password) => {
    signin(username, password)
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        set({ isAuthenticated: true, account: data });
        console.log("Login successful, token stored:", data.jwt);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  },
  signout: async () => {
      logout()
        .then(() => {
          localStorage.removeItem("token");
          set({ isAuthenticated: false, account: null });
          console.log("Logout successful, token removed.");
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    },
}));
