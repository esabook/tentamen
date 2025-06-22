import axios from "axios";

const API_URL = "/api/ujian";

export async function getUjianList(token) {
  const res = await axios.get(`${API_URL}/list`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
