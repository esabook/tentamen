import { addSoalCategory, deleteSoalCategory, getSoalCategories, updateSoalCategory } from "@/api/soalCategory";
import type { SoalCategory } from "@/models/SoalCategory";
import { create } from "zustand";

interface ICategoryStore {
    isLoading: boolean,
    errorMessage: string | null,
    categories: SoalCategory[],
    fetchCategories: () => void,

    categoryCreate: (data: SoalCategory) => void,
    categoryUpdate: (data: SoalCategory) => void,
    categoryDelete: (id: string) => void,


}

export const useCategoryStore = create<ICategoryStore>((set)=>({
    isLoading: false,
    errorMessage: null,
    categories: [],
    fetchCategories: async () => {
        set({isLoading: true})
        getSoalCategories(0, 10)
        .then((res) => {
            set({categories: res.data})
        })
        .catch((err) => {
            set({errorMessage: err.message})
        })
        .finally(() => {
            set({isLoading: false})
        })
    },

    categoryCreate: async (data: SoalCategory) => {
        set({isLoading: true})
        addSoalCategory(data)
        .then((res) => {
            set((state) => ({categories: [...state.categories, res.data]}))
            set({errorMessage: res.message})
            set({isLoading: false})
        })
        .catch((err) => {
            set({errorMessage: err.message})
            set({isLoading: false})
        })
        },
    categoryUpdate: async (data: SoalCategory) => { 
        set({isLoading: true})
        updateSoalCategory(data)
        .then((res) => {
            set({categories : res.data})
            set({errorMessage: res.message})
            set({isLoading: false})
        })
        .catch((err) => {
            set({errorMessage: err.message})
            set({isLoading: false})
        })
    },
    categoryDelete: async (id: string) => {
        set({isLoading: true})
        deleteSoalCategory({_id: id})
        .then((res) => {
            set({ isLoading: false, errorMessage: null})
        })
        .catch((err) => {
            set({isLoading: false, errorMessage: err.message})
        })
    }
}))


import { addSoalTag, deleteSoalTag, getSoalTags, updateSoalTag } from "@/api/soalTag";
import type { SoalTag } from "@/models/SoalTag";

interface ITagStore {
    isLoading: boolean,
    errorMessage: string | null,
    tags: SoalTag[],
    fetchTags: () => void,

    tagCreate: (data: SoalTag) => void,
    tagUpdate: (data: SoalTag) => void,
    tagDelete: (id: string) => void,


}

export const useTagStore = create<ITagStore>((set)=>({
    isLoading: false,
    errorMessage: null,
    tags: [],
    fetchTags: async () => {
        set({isLoading: true})
        getSoalTags(0, 10)
        .then((res) => {
            set({tags: res.data})
        })
        .catch((err) => {
            set({errorMessage: err.message})
        })
        .finally(() => {
            set({isLoading: false})
        })
    },

    tagCreate: async (data: SoalTag) => {
        set({isLoading: true})
        addSoalTag(data)
        .then((res) => {
            set((state) => ({tags: [...state.tags, res.data]}))
            set({errorMessage: res.message})
            set({isLoading: false})
        })
        .catch((err) => {
            set({errorMessage: err.message})
            set({isLoading: false})
        })
        },
    tagUpdate: async (data: SoalTag) => { 
        set({isLoading: true})
        updateSoalTag(data)
        .then((res) => {
            set({tags : res.data})
            set({errorMessage: res.message})
            set({isLoading: false})
        })
        .catch((err) => {
            set({errorMessage: err.message})
            set({isLoading: false})
        })
    },
    tagDelete: async (id: string) => {
        set({isLoading: true})
        deleteSoalTag({_id: id})
        .then((res) => {
            set({ isLoading: false, errorMessage: null})
        })
        .catch((err) => {
            set({isLoading: false, errorMessage: err.message})
        })
    }
}))