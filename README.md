# vite-srr-error

## Reproduction steps

Start up the server

```shell
cd server
yarn install
yarn dev
```

In a separate terminal

```shell
curl localhost:5173
```

## Errors

```shell
6:14:12 p.m. [vite] Error when evaluating SSR module /deps/index.ts:
|- TypeError: Cannot redefine property: __esModule
    at Function.defineProperty (<anonymous>)
    at ssrExportAll (file:///Users/chris/github/playground/vite-srr-error/server/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:54322:24)
    at eval (/deps/index.ts:4:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async instantiateModule (file:///Users/chris/github/playground/vite-srr-error/server/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:54346:9)

6:14:12 p.m. [vite] Error when evaluating SSR module ./main.ts: failed to import "/deps/index.ts"
|- TypeError: Cannot redefine property: __esModule
    at Function.defineProperty (<anonymous>)
    at ssrExportAll (file:///Users/chris/github/playground/vite-srr-error/server/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:54322:24)
    at eval (/deps/index.ts:4:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async instantiateModule (file:///Users/chris/github/playground/vite-srr-error/server/node_modules/vite/dist/node/chunks/dep-f7d05e3f.js:54346:9)
```

The error seems to occur because of [ssrExportAll](https://github.com/vitejs/vite/blob/229c5925c8c84709b8e06e8092a255cb820dafc9/packages/vite/src/node/ssr/ssrModuleLoader.ts#L193) tries to copy all of the exports, and the inclusion of `__esModule` causes a clash
