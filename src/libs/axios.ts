import axios from "axios";

const apiKey = import.meta.env.VITE_KONTENBASE_API_KEY;

export const axiosClient = axios.create({
  baseURL: `https://api.kontenbase.com/query/api/v1/${apiKey}`,
});
