import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
