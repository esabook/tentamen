import axiosInstance from './axios';

const API_URL = '/account';

export async function getProfile() {
  const res = await axiosInstance.get(`${API_URL}/profile`);
  return res.data;
}

export async function updateAccount(data) {
  const res = await axiosInstance.post(`${API_URL}/profile`, data);
  return res.data;
}

export async function getRoleAll() {
  const res = await axiosInstance.get(`${API_URL}/role/all`);
  return res.data;
}

export async function roleAdd(data) {
  const res = await axiosInstance.post(`${API_URL}/role/add`, data);
  return res.data;
}
export async function roleUpdate(data) {
  const res = await axiosInstance.post(`${API_URL}/role/update`, data);
  return res.data;
}
export async function roleDelete(data) {
  const res = await axiosInstance.post(`${API_URL}/role/delete`, data);
  return res.data;
}
