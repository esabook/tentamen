import axios from "axios";
// Membaca root url dari .env (Vite: import.meta.env.VITE_API_URL)
const API_ROOT = import.meta.env.VITE_API_URL || "";
const HEADER_DELAY = { "delay-ms": 3000 };

// Membuat instance axios dengan konfigurasi dasar
// Anda bisa menambahkan interceptor, headers, dll di sini
// Contoh: axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// Contoh: axios.defaults.baseURL = API_ROOT;
const axiosInstance = axios.create({
  baseURL: API_ROOT + "/api",
  timeout: 5000,
  headers: {
    "X-Custom-Header": "CBT-Tentament-Client",
    // ...HEADER_DELAY
  },
});

export default axiosInstance;
