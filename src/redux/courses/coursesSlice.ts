import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken, getCourses, getCourseById } from "./coursesOperations";
import { ICourse, ICourseDetails, IState } from "../../types/courses";

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
  reducers: {},
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
      })
      // ---------- getCourseById ----------
      .addCase(getCourseById.pending, (state: IState, _: any) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        getCourseById.fulfilled,
        (state: IState, action: PayloadAction<ICourseDetails>) => {
          state.isLoading = false;
          state.currentCourse = action.payload;
        }
      )
      .addCase(getCourseById.rejected, (state: IState, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default coursesSlice.reducer;
