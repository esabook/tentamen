import { create } from "zustand";

export const loadingDialogStore = create((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
