import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigninUp: false,
  isLogginIn: false,
  isUploading: false,
  socket: null,
  onlineUsers: [],
  isLoading: false,
  error: null,
  message: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSoket();
    } catch (error) {
      console.log("Error in authCheck", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigninUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });

      toast.success("Account created successfully");
      get().connectSoket();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigninUp: false });
    }
  },

  login: async (data) => {
    set({ isLogginIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });

      toast.success("Logged in successfully");
      get().connectSoket();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLogginIn: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully ");
      get().disconnectSocket();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("auth/verify-email", { code });
      set({ authUser: res.data.user, isLoading: false });

      return res.data;
    } catch (error) {
      set({ error: error.response.data.message || "Error verifying email", isLoading: false });
      throw error;
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/auth/forgot-password", { email });
      set({ isLoading: false });
      toast.success(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },

  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null, message: null });

    try {
      const res = await axiosInstance.post(`/auth/reset-password/${token}`, { password });
      set({ isLoading: false, message: res.data.message });
    } catch (error) {
      set({ isLoading: false, error: error.response.data.message || "Error resetting password" });
      throw error;
    }
  },

  updateProfile: async (data) => {
    set({ isUploading: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUploading: false });
    }
  },

  connectSoket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      withCredentials: true, // this ensures cookies are sent with the connection
    });

    socket.connect();

    set({ socket: socket });

    //listen for online user events

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
