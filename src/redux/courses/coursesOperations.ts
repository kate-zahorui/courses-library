import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../services/api";
import { ICourse, ICourseDetails } from "../../types/courses";

export const getToken = createAsyncThunk(
  "courses/getToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = await UserAPI.getToken();

      return token as string;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async (_, { rejectWithValue }) => {
    try {
      const courses = await UserAPI.fetchCourses();

      return courses as ICourse[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (id: string, { rejectWithValue }) => {
    try {
      const course = await UserAPI.fetchCourseById(id);

      return course as ICourseDetails;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
