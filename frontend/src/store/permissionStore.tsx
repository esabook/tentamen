import type { Permission } from '@/models/Permission.js';
import {
  getPermissionAll,
  permissionAdd,
  permissionDelete,
  permissionUpdate,
} from '../api/permission.js';
import { create } from 'zustand';
import type { Page } from '@/models/Page.js';

interface PermissionStoreInterface {
  permissions: Permission[] | null;
  page: Page | null;
  isLoading: boolean;
  error: string | null;

  getPermissionAll: () => void;
  permissionAdd: (data: Permission) => void;
  permissionUpdate: (data: Permission) => void;
  permissionDelete: (id: string) => void;
}

export const permissionStore = create<PermissionStoreInterface>((set) => ({
  permissions: null,
  page: null,
  isLoading: false,
  error: null,

  getPermissionAll: async () => {
    set({ isLoading: true });
    getPermissionAll()
      .then(({ data, page, size, total, totalPages }) => {
        set({
          permissions: data,
          page: {page, size, total, totalPages},
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
  permissionAdd: async (data: Permission) => {
    set({ isLoading: true });
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
  permissionUpdate: async (data: Permission) => {
    set({ isLoading: true });
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
  permissionDelete: async (id: string) => {
    set({ isLoading: true });
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
