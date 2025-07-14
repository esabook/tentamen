import type { SoalTag } from '@/models/SoalTag';
import axiosInstance from './axios';

const API_URL = '/soal/tag';

export async function getSoalTags(page: number, size: number) {
  const res = await axiosInstance.get(`${API_URL}/all?page=${page}&size=${size}`);
  return res.data;
}

export async function addSoalTag(data: SoalTag) {
  const res = await axiosInstance.post(`${API_URL}/add`, data);
  return res.data;
}

export async function updateSoalTag(data: SoalTag) {
  const res = await axiosInstance.post(`${API_URL}/update`, data);
  return res.data;
}

export async function deleteSoalTag(data: { _id: string }) {
  const res = await axiosInstance.post(`${API_URL}/delete`, data);
  return res.data;
}
