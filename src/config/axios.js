import axios from "axios";


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Authorization":`Bearer ${localStorage.getItem("token")}`// Adjust this as needed for your CORS policy
  },
}) // Adjust the base URL as needed

export default axiosInstance;