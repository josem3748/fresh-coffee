import axios from "axios";

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Accept": "application/json",
    "X-Requested-Width": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default clienteAxios;
