import { EnvSchema } from "../types/env-schema";
import { validateEnv } from "../utils/validate-env";

const env = {
  dbHost: Bun.env.DB_HOST!,
  dbPort: parseInt(Bun.env.DB_PORT!),
  dbUser: Bun.env.DB_USER!,
  dbPassword: Bun.env.DB_PASS!,
  dbName: Bun.env.DB_NAME!,
  redisHost: Bun.env.REDIS_HOST!,
  redisPort: parseInt(Bun.env.REDIS_PORT!),
  redisUser: Bun.env.REDIS_USER,
  redisPassword: Bun.env.REDIS_PASS,
};

export const appConfig = validateEnv<typeof EnvSchema>(env, EnvSchema);
