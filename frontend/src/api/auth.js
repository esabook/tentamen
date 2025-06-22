import axiosInstance from "./axios.js";

const API_URL = `/auth`;

export async function signin(username, password) {
  const res = await axiosInstance.post(`${API_URL}/signin`, { email: username, password });
  return res.data;
}

export async function logout() {
  try {
    await axiosInstance.get(`${API_URL}/logout`);
  } catch (e) {
    console.error("Logout error:", e);
  }
}
