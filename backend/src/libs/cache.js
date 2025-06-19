import { createClient } from "redis";

let redis;

export async function connectCache() {
  if (!redis) {
    const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

    redis = createClient({
      url: redisUrl,
    });

    redis.on("error", (err) => console.error("Redis Client Error", err));
    redis.on("connect", () => console.log("Redis connecting..."));
    redis.on("ready", () => {
      const url = new URL(redisUrl);
      console.log(`Redis ready ${url.hostname}:${url.port}`);
    });
    redis.on("end", () => console.log("Redis connection closed."));
    redis.on("reconnecting", () => console.log("Redis reconnecting..."));

    await redis.connect();
  }
  return redis;
}

export function getCache() {
  if (!redis) throw new Error("Redis not connected!");
  return redis;
}
