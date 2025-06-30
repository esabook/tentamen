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

export async function signup(full_name, email, password) {
  const res = await axiosInstance.post(`${API_URL}/signup`, { full_name, email, password });
  return res.data;
}

export async function checkLogin() {
  const res = await axiosInstance.get(`${API_URL}/check`);
  return res.data;
}