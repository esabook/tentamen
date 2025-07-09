import axiosInstance from './axios';

const API_URL = '/permission';

export async function getPermissionAll() {
  const res = await axiosInstance.get(`${API_URL}/all`);
  return res.data;
}

export async function permissionAdd(data) {
  const res = await axiosInstance.post(`${API_URL}/add`, data);
  return res.data;
}

export async function permissionUpdate(data) {
  const res = await axiosInstance.post(`${API_URL}/update`, data);
  return res.data;
}

export async function permissionDelete(data) {
  const res = await axiosInstance.post(`${API_URL}/delete`, data);
  return res.data;
}
