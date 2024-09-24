import { Hono } from "hono";
import { appConfig } from "./config/env";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: appConfig.appPort,
  fetch: app.fetch,
};
