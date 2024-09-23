# Handlers

`@mapstudio/handlers`

This is where the route handlers or controllers are organized. These route handlers define the logic for responding to different HTTP requests (`GET`, `POST`, `PUT`, `DELETE`, etc.) based on specific routes (URLs) in the application.

Example: `GET: /api/hello`

```
    import { Hono } from 'hono';

    const app = new Hono().basePath("/api);

    app.get("/hello", async (c) => {
        c.text("world!")
    });
```

For building larger applications, separate files from `index.ts`, and create separate files for each route handlers.

Example:

`/src/handlers/authors.ts`

```
    import { Hono } from 'hono';

    const app = new Hono();

    app.get('/', (c) => c.json('list authors'));
    app.post('/', (c) => c.json('create an author', 201));
    app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`));

    export default app;
```

`/src/handlers/books.ts`

```
    import { Hono } from 'hono';

    const app = new Hono();

    app.get('/', (c) => c.json('list books'));
    app.post('/', (c) => c.json('create a book', 201));
    app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`));

    export default app;
```

`/src/index.ts`

```
    import { Hono } from 'hono';
    import authors from './authors';
    import books from './books';

    const app = new Hono();

    app.route('/authors', authors);
    app.route('/books', books);

    export default app;
```

To learn more, please visit hono's official docs:
https://hono.dev/docs/
