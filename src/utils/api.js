import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-5BHWikR33GpwaXkq6Vu6Vwb8",
  },
});

export default api;
