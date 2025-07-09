import { get } from 'http';
import { getRoleAll, roleAdd, roleDelete, roleUpdate } from '../api/role.js';
import { create } from 'zustand';

export const authStore = create((set) => ({
  roles: null,
  isLoading: false,
  error: null,

  setRoles: (roles) => set({ roles }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  getRoles: async () => {
    set({ isLoading: true });
    getRoleAll()
      .then((data) => {
        set({
          roles: data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('getRoles', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  roleAdd: async (data) => {
    set({ authLoading: true });
    roleAdd(data)
      .then((newData) => {
        set({
          roles: newData,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('roleAdd', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  roleUpdate: async (data) => {
    set({ authLoading: true });
    roleUpdate(data)
      .then((newData) => {
        set({
          roles: newData,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('roleUpdate', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  roleDelete: async (id) => {
    set({ authLoading: true });
    roleDelete(id)
      .then(() => {
        set({
          roles: null,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('roleDelete', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
}));
