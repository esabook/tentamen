import { getProfile } from "../api/account.js";
import { create } from "zustand";
import { logout, signin } from "../api/auth.js";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  account: null,
  authLoading: true,
  error: null,
  setAccount: (account) => set({ account }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setAuthLoading: (authLoading) => set({ authLoading }),

  checkAuth: async () => {

    setTimeout(()=>{console.log("2sec")}, 2000);
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
        .catch((error) => {
          set({
            isAuthenticated: false,
            account: null,
            authLoading: false,
            error: error,
          });
        });
    } else {
      set({
        isAuthenticated: false,
        account: null,
        authLoading: false,
        error: null,
      });
    }
  },
  signin: async (username, password) => {
    setTimeout(()=>{console.log("2sec")}, 2000);
    signin(username, password)
      .then((data) => {

        localStorage.setItem("token", data.jwt);
        set({ isAuthenticated: true, account: data, error: null });
        console.log("Login successful, token stored:", data.jwt);
      })
      .catch((error) => {
        console.error("Login error:", error);
        set({ error: error });
      });
  },
  signout: async () => {
    logout()
      .then(() => {
        localStorage.removeItem("token");
        set({ isAuthenticated: false, account: null, error: null });
        console.log("Logout successful, token removed.");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        set({ error: error });
      });
  },
}));
