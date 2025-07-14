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