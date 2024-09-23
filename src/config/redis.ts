import { appConfig } from "@mapstudio/config/env";
import { Redis } from "ioredis";

export const redis = new Redis(appConfig.redisPort, appConfig.redisHost, {
  username: appConfig.redisUser,
  password: appConfig.redisPassword,
  enableReadyCheck: true,
  maxRetriesPerRequest: 5,
  retryStrategy: (times) => Math.min(times * 50, 500),
});

redis.on("error", (err) => console.log(err));
