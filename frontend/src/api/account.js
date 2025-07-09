import axiosInstance from './axios';

const API_URL = '/account';

export async function getProfile(token) {
  console.log('Fetching profile with token:', token);
  const res = await axiosInstance.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function updateAccount(data, token) {
  const res = await axiosInstance.post(`${API_URL}/profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function getRoleAll(token) {
  const res = await axiosInstance.get(`${API_URL}/role/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function roleAdd(data, token) {
  const res = await axiosInstance.post(`${API_URL}/role/add`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
export async function roleUpdate(data, token) {
  const res = await axiosInstance.post(`${API_URL}/role/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
export async function roleDelete(data, token) {
  const res = await axiosInstance.post(`${API_URL}/role/delete`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
