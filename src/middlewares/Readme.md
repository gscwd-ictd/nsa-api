# Middlewares

`@mapstudio/middlewares`

This is where custom middleware functions are stored and organized. Middlewares are functions that have access to the request, response, and next middleware in the application’s request-response cycle. You can write your own middleware inside `app.use()`

Example: `/src/index.ts`

```
    app.use(async (c, next) => {
        // log request method and url for all api routes
        console.log(`[${c.req.method}] ${c.req.url}`);
        await next();
    })
```

To create a middleware in a separate file, in this case, `@mapstudio/middlewares`, use the `createMiddleware()` function provided by hono.

Example: `@mapstudio/middlewares/custom-middleware.ts`

```
    import { createMiddleware } from "hono/factory";

    export const myMiddleware = createMiddleware(async (c, next) => {
        // log request method and url for all api routes
        console.log(`[${c.req.method}] ${c.req.url}`);
        await next();
    });
```

`src/index.ts`

```
    import { myMiddleware } from "@mapstudio/middlewares/myMiddleware"

    app.use("*", myMiddleware);
```

To learn more, please visit hono's official docs:
https://hono.dev/docs/
