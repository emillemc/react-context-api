import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("@User:access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    } else {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  response => {
    if (response.status === 401) {
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
