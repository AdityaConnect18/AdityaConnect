import axios from "axios";
const API = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL: `${API}`,
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    //"x-access-token": localStorage.getItem("token"),
  },
});

export default api;
