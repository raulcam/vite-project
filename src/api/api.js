import axios from "axios";

export const KEY = "MY_SECRET";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (!config.url.includes("auth")) {
      const token = localStorage.getItem("@token");
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api; 
