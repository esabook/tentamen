import {
  getPermissionAll,
  permissionAdd,
  permissionDelete,
  permissionUpdate,
} from '../api/permission.js';
import { create } from 'zustand';

export const authStore = create((set) => ({
  permissions: null,
  isLoading: false,
  error: null,

  setPermissions: (permissions) => set({ permissions }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  getPermissionAll: async () => {
    set({ isLoading: true });
    getPermissionAll()
      .then((data) => {
        set({
          permissions: data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('getPermissionAll', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  permissionAdd: async (data) => {
    set({ authLoading: true });
    permissionAdd(data)
      .then((newData) => {
        set({
          permissions: newData,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('permissionAdd', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  permissionUpdate: async (data) => {
    set({ authLoading: true });
    permissionUpdate(data)
      .then((newData) => {
        set({
          permissions: newData,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('permissionUpdate', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
  permissionDelete: async (id) => {
    set({ authLoading: true });
    permissionDelete(id)
      .then(() => {
        set({
          permissions: null,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.error('permissionDelete', error);
        set({
          isLoading: false,
          error: error,
        });
      });
  },
}));
