import axiosInstance from './axios';

const API_URL = '/account/role';

export async function getRoleAll() {
  const res = await axiosInstance.get(`${API_URL}/all`);
  return res.data;
}

export async function roleAdd(data) {
  const res = await axiosInstance.post(`${API_URL}/add`, data);
  return res.data;
}

export async function roleUpdate(data) {
  const res = await axiosInstance.post(`${API_URL}/update`, data);
  return res.data;
}

export async function roleDelete(data) {
  const res = await axiosInstance.post(`${API_URL}/delete`, data);
  return res.data;
}
