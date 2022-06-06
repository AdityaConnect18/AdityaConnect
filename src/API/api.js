import axios from "axios";
const API = process.env.REACT_APP_BACKEND_API_KEY;
const api = axios.create({
  baseURL: `${API}`,
  headers: {
    Accept: "application/json",
    // Accept: 'multipart/form-data',
    // 'Content-Type': 'multipart/form-data'
  },
});

export default api;
