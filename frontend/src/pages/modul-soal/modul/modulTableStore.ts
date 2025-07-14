import type { SoalCategory } from '@/models/SoalCategory';
import type { SoalTag } from '@/models/SoalTag';
import { create } from 'zustand';

type IModuleStore = {
  selectedCategory: SoalCategory | null;
  setSelectedCategory: (category: SoalCategory | null) => void;

  selectedTags: SoalTag[];
  setSelectedTags: (tags: SoalTag[]) => void;
};

export const useModuleStore = create<IModuleStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set((state) => ({ ...state, selectedCategory: category })),

  selectedTags: [],
  setSelectedTags: (tags) => set((state) => ({ ...state, selectedTags: tags })),
}));
