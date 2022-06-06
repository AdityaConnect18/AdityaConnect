import axios from "axios";
// const API = process.env.REACT_APP_BACKEND_API_KEY
const API = "http://Adityaconnectbackend-env.eba-v5evckwp.ap-south-1.elasticbeanstalk.com"
const api = axios.create({
  baseURL: `${API}`,
  headers: {
    Accept: "application/json",
    // Accept: 'multipart/form-data',
    // 'Content-Type': 'multipart/form-data'
  },
});

export default api;
