import axios from "axios";

const API_URL = "/api/ujianResult";

export async function getLeaderboard(ujianId, token) {
  const res = await axios.get(`${API_URL}/leaderboard/${ujianId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
