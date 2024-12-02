import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userId: '',
  setUserId: (userId) => set({ userId }),

  pwd: '',
  setPwd: (pwd) => set({ pwd }),

  userName: '',
  setUserName: (userName) => set({ userName }),

  email: '',
  setEmail: (email) => set({ email }),

  resetAuthState: () => set({ userId: '', pwd: '', userName: '', email: '' }),
}));

export default useAuthStore;
