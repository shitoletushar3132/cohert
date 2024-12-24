import { atom } from "recoil";

export const authState = atom({
  key: "authState", // Unique identifier for this atom
  default: {
    token: null,
    isAuthenticated: false,
  },
});
