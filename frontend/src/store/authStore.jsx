import { getProfile } from "../api/account.js";
import { create } from "zustand";
import { logout, signin } from "../api/auth.js";

export const authStore = create((set) => ({
  isAuthenticated: false,
  account: null,
  authLoading: true,
  error: null,

  setAccount: (account) => set({ account }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setAuthLoading: (authLoading) => set({ authLoading }),

  checkAuth: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ authLoading: true });
      getProfile(token)
        .then((data) => {
          console.log("then");
          set({
            account: data,
            isAuthenticated: true,
            authLoading: false,
          });
        })
        .catch((error) => {
          console.log("catch ", error);
          set({
            isAuthenticated: false,
            account: null,
            authLoading: false,
            error: error,
          });
        });
    } else {
      console.log("else");
      set({
        isAuthenticated: false,
        account: null,
        authLoading: false,
        error: null,
      });
    }
  },
  signin: async (username, password) => {
    set({ authLoading: true });
    signin(username, password)
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        set({
          isAuthenticated: true,
          account: data,
          error: null,
          authLoading: false,
        });
        console.log("Login successful, token stored:", data.jwt);
      })
      .catch((error) => {
        console.error("Login error:", error);
        set({ error: error, authLoading: false });
      });
  },
  signout: async () => {
    set({ authLoading: true });
    logout()
      .then(() => {
        localStorage.removeItem("token");
        set({ isAuthenticated: false, account: null, error: null, authLoading: false });
        console.log("Logout successful, token removed.");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        set({ error: error, authLoading: false });
      });
  },
}));
