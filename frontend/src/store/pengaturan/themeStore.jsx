import { create } from "zustand";

export const themeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "bumblebee",
  themeNames: [
    "default",
    "dark",
    "dracula",
    "bumblebee",
    "corporate",
    "cupcake",
    "cyberpunk",
    "fantasy",
    "forest",
    "garden",
    "halloween",
    "luxury",
    "pastel",
    "retro",
    "synthwave",
    "valentine",
  ],
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
