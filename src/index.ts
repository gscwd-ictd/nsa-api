import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { RegExpRouter } from "hono/router/reg-exp-router";
import { prettyJSON } from "hono/pretty-json";
import { appConfig } from "./config/env";
import { showRoutes } from "hono/dev";
import applicants from "./handlers/applicants";

const app = new Hono({
  router: new RegExpRouter(),
  strict: false,
}).basePath("/api");

app.use(logger());
app.use(prettyJSON());

const whitelist = ["http://localhost:3100"];

app.use(
  "/api/*",
  cors({
    origin: whitelist,
    maxAge: 600,
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(csrf());

app.route("applicants", applicants);

showRoutes(app, {
  colorize: true,
});

export default {
  port: appConfig.appPort,
  fetch: app.fetch,
};
