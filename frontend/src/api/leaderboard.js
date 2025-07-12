import axiosInstance from "./axios";

const API_URL = "/api/ujianResult";

export async function getLeaderboard(ujianId) {
  const res = await axiosInstance.get(`${API_URL}/leaderboard/${ujianId}`);
  return res.data;
}
