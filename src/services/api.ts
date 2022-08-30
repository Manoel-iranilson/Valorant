import axios from "axios";

const api = axios.create({
  baseURL: "https://valorant-api.com/",
});

export default api;
