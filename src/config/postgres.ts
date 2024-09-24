import { appConfig } from "@nsa/config/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres({
  host: appConfig.dbHost,
  port: appConfig.dbPort,
  username: appConfig.dbUser,
  password: appConfig.dbPassword,
  database: appConfig.dbName,
});

export const db = drizzle(client);
