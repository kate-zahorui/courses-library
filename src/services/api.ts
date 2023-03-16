import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

const token = {
  set(token: string) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};

export const UserAPI = {
  getToken: async () => {
    const response = await instance.get(
      "/auth/anonymous?platform=subscriptions"
    );
    token.set(response.data.token);
    return response.data.token;
  },

  fetchCourses: async () => {
    const response = await instance.get(`/core/preview-courses`);
    return response.data.courses;
  },
};
