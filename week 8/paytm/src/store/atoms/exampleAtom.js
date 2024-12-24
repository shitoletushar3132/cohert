import { atom } from "recoil";

export const exampleState = atom({
  key: "exampleState", // unique ID
  default: 0, // initial value
});
