import type { SoalCategory } from '@/models/SoalCategory';
import axiosInstance from './axios';

const API_URL = '/soal/category';

export async function getSoalCategories(page: number, size: number) {
  const res = await axiosInstance.get(`${API_URL}/all?page=${page}&size=${size}`);
  return res.data;
}

export async function addSoalCategory(data: SoalCategory) {
  const res = await axiosInstance.post(`${API_URL}/add`, data);
  return res.data;
}

export async function updateSoalCategory(data: SoalCategory) {
  const res = await axiosInstance.post(`${API_URL}/update`, data);
  return res.data;
}

export async function deleteSoalCategory(data: { _id: string }) {
  const res = await axiosInstance.post(`${API_URL}/delete`, data);
  return res.data;
}
