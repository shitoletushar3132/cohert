import { atom } from "recoil";

export const authAtom = atom({
  key: "authAtom", // Unique identifier for this atom
  default: {
    token: null,
    isAuthenticated: false,
  },
});
