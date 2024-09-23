import { z } from "zod";

export const EnvSchema = z.object({
  dbHost: z.string(),
  dbPort: z.coerce.number(),
  dbUser: z.string(),
  dbPassword: z.string(),
  dbName: z.string(),
  redisHost: z.string(),
  redisPort: z.coerce.number(),
  redisUser: z.string().optional(),
  redisPassword: z.string().optional(),
});
