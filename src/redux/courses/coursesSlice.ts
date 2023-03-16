import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken, getCourses } from "./coursesOperations";
import { ICourse, IState } from "../../types/courses";

const initialState: IState = {
  token: null,
  items: [],
  currentCourse: null,
  isLoading: false,
  error: "",
  perPage: 15,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState: initialState,
  reducers: {
    setJob: (state, action: PayloadAction<string>) => {
      const job = state.items.find((i) => i.id === action.payload)!;
      state.currentCourse = job;
    },
  },
  extraReducers: (builder) => {
    builder
      // ---------- getToken ----------
      .addCase(getToken.pending, (state: IState, _: any) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        getToken.fulfilled,
        (state: IState, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.token = action.payload;
        }
      )
      .addCase(getToken.rejected, (state: IState, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // ---------- getCourses ----------
      .addCase(getCourses.pending, (state: IState, _: any) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        getCourses.fulfilled,
        (state: IState, action: PayloadAction<ICourse[]>) => {
          state.isLoading = false;

          if (action.payload.length > 0) {
            console.log(" action.payload", action.payload);
            state.items = action.payload;
          }
        }
      )
      .addCase(getCourses.rejected, (state: IState, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setJob } = coursesSlice.actions;

export default coursesSlice.reducer;
