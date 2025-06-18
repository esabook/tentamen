import { Server } from "socket.io";
import UjianResult from "./models/db/ujianResult.model.js";

let io;

export function setupWebSocket(server) {
  // Namespace khusus untuk leaderboard ujianResult
  io = new Server(server, {
    path: "/api/ujianResult/leaderboard/ws",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    // Client join room ujianId
    socket.on("subscribeLeaderboard", async ({ ujianId }) => {
      if (!ujianId) return;
      socket.join(ujianId);
      // Kirim leaderboard awal
      const result = await UjianResult.findOne(
        { ujian_id: ujianId },
        { leaderboard: 1, last_updated: 1 }
      );
      socket.emit("leaderboard", {
        leaderboard: result?.leaderboard || [],
        last_updated: result?.last_updated,
      });
    });
    // Optional: handle leave
    socket.on("unsubscribeLeaderboard", ({ ujianId }) => {
      if (ujianId) socket.leave(ujianId);
    });
    // Otomatis leave semua room saat disconnect
  });
}

// Fungsi untuk broadcast leaderboard ke semua client yang subscribe ujianId tertentu
export async function broadcastLeaderboard(ujianId) {
  if (!io) return;
  const result = await UjianResult.findOne(
    { ujian_id: ujianId },
    { leaderboard: 1, last_updated: 1 }
  );
  io.to(ujianId).emit("leaderboard", {
    leaderboard: result?.leaderboard || [],
    last_updated: result?.last_updated,
  });
}
