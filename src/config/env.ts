import { EnvSchema } from "../types/env-schema";
import { validateEnv } from "../utils/validate-env";

const env = {
  dbHost: process.env.DB_HOST!,
  dbPort: parseInt(process.env.DB_PORT!),
  dbUser: process.env.DB_USER!,
  dbPassword: process.env.DB_PASS!,
  dbName: process.env.DB_NAME!,
  redisHost: process.env.REDIS_HOST!,
  redisPort: parseInt(process.env.REDIS_PORT!),
  redisUser: process.env.REDIS_USER,
  redisPassword: process.env.REDIS_PASS,
};

export const appConfig = validateEnv<typeof EnvSchema>(env, EnvSchema);
