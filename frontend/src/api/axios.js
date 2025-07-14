import { getToken } from '@/store/sessionStore';
import axios from 'axios';
// Membaca root url dari .env (Vite: import.meta.env.VITE_API_URL)
const API_ROOT = import.meta.env.VITE_API_URL || '';
// const HEADER_DELAY = { 'delay-ms': 2000 };

function getBearerToken() {
  const token = getToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

// Membuat instance axios dengan konfigurasi dasar
// Anda bisa menambahkan interceptor, headers, dll di sini
// Contoh: axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// Contoh: axios.defaults.baseURL = API_ROOT;
const axiosInstance = axios.create({
  baseURL: API_ROOT + '/api',
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'CBT-Tentament-Client',
    // ...HEADER_DELAY
  },
});

axiosInstance.interceptors.request.use((config)=>{
  config.headers = {
    ...config.headers,
    ...getBearerToken(),
  }
  return config;

})

export default axiosInstance;
