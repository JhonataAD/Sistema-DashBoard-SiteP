import axios from "axios";

const api = axios.create({
   baseURL: "https://site-pessoal-api2-0.onrender.com/api",
});

export default api;

 