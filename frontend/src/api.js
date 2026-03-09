import axios from "axios";

export const api = axios.create({
  baseURL: "https://agriyield-backend-c5nc.onrender.com",
  timeout: 60000
});
