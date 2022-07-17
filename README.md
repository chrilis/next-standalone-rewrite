# Next.js Standalone Rewrites including `index`

This repo reproduces a strange behaviour of the Next.js [`standalone`](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) mode. Rewrites with destination `/index/` do not work as expected, however rewrites with other destinations (e.g. `/test/`) do work.

The same behavior occurs in combination with a `middleware.js` file. The rewrite is executed but the query param is not set (`/test-middleware/` should redirect to `/index/` too).

## Expected behaviour
- `/` should rewrite to `/index/` and the query params should be set accordingly.
- `/test-middleware` should rewrite to `/index/` and the query params should be set accordingly.

## Actual behaviour
 - `npm run dev` or `npm run build && npm run start`: The rewrite works: The query params for `slug` are set correctly.
 - `npm run build && cp -r public .next/standalone && cp -r .next/static .next/standalone/.next && node .next/standalone/server.js`: The rewrite does not work, the query param for `slug` does not exist.

 ## Steps to reproduce
 - Visit [http://localhost:3000/](http://localhost:3000/) the query should contain the slug `index` as seen below.
 ```json
{
  "query": {
    "slug": [
      "index"
    ]
  },
  "resolvedUrl": "/index"
}
```
 - Visit [http://localhost:3000/test-middleware/](http://localhost:3000/test-middleware/) the query should contain the slug `index`.
 ```json
{
  "query": {
    "slug": [
      "index"
    ]
  },
  "resolvedUrl": "/index"
}
```
