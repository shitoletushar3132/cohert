// Configrure store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// export store
export const store = configureStore({ reducer: todoReducer });
