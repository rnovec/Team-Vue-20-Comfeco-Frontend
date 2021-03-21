import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_DATA_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// response interceptor
client.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;
