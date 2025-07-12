import type { Role } from '@/models/Role.js';
import { getRoleAll, roleAdd, roleDelete, roleUpdate } from '../api/role.js';
import { create } from 'zustand';
import type { Page } from '@/models/Page.js';

interface RoleStoreInterface {
  roles: Role[] | null;
  page: Page | null;
  isLoading: boolean;
  error: string | null;

  setIsLoading: (isLoading: boolean) => void;


  getRoles: () => void;
  roleAdd: (data: Role) => void;
  roleUpdate: (data: Role) => void;
  roleDelete: (id: string) => void;
}

export const roleStore = create<RoleStoreInterface>((set) => ({
  roles: null,
  page: null,
  isLoading: false,
  error: null,

  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  getRoles: async () => {
    set({ isLoading: true });
    getRoleAll()
      .then(({ data, page, size, total, totalPages }) => {
        set({
          roles: data,
          page: { page, size, total, totalPages },
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
    set({ isLoading: true });
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
  roleUpdate: async (newData) => {
    set({ isLoading: true });
    roleUpdate(newData)
      .then(({ data }) => {
        set((state) => {
          // Temukan dan ganti role yang diupdate di dalam array yang sudah ada
          const updatedRoles = state.roles
            ? state.roles.map((role) => (role._id === data._id ? data : role))
            : null;

          return {
            roles: updatedRoles,
            isLoading: false,
            error: null,
          };
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
    set({ isLoading: true });
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
