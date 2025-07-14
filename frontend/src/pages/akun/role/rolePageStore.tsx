import type { Role } from '@/models/Role';
import { create } from 'zustand';

interface IRolePageStore {
  id: string;
  isDirty: boolean;
  editedRoles: Map<string, Role>;
  setEditedRoles: (editedRoles: Map<string, Role>) => void;
}

export const rolePageStore = create<IRolePageStore>((set) => ({
  id: new Date().getTime().toString(),
  isDirty: false,
  editedRoles: new Map<string, Role>(),
  setEditedRoles: (editedRoles: Map<string, Role>) =>
    set({ editedRoles, isDirty: editedRoles.size > 0 }),
}));
