import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "Ahinav", _id: 123, age: 12 },
  isLoading: false,
}));
