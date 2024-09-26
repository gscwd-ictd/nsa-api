import { Hono } from "hono";
import { logger } from "hono/logger";
import { appConfig } from "./config/env";
import applicants from "./handlers/applicants";

const app = new Hono({
  strict: false,
});

app.use(logger());

app.route("/applicants", applicants);

export default {
  port: appConfig.appPort,
  fetch: app.fetch,
};
