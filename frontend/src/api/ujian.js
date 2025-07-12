import axiosInstance from "./axios";

const API_URL = "/api/ujian";

export async function getUjianList() {
  const res = await axiosInstance.get(`${API_URL}/list`);
  return res.data;
}
