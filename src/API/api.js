import axios from "axios";
//const API = process.env.REACT_APP_API_KEY;
const API = "http://localhost:3500"
const api = axios.create({
  baseURL: `${API}`,
  headers: {
    Accept: 'application/json',
    // Accept: 'multipart/form-data',
    // 'Content-Type': 'multipart/form-data'
  },
});

export default api;
