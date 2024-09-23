import { appConfig } from "@mapstudio/config/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: appConfig.dbHost,
    port: appConfig.dbPort,
    user: appConfig.dbUser,
    password: appConfig.dbPassword,
    database: appConfig.dbName,
  },
});
