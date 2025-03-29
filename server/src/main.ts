import { createServer } from "node:http";

import { getRequestListener } from "@hono/node-server";

import { app } from "./app.ts";

const requestListener = getRequestListener(app.fetch);

const server = createServer(requestListener);

server.listen({ host: "0.0.0.0", port: 3000 });
console.log("server started");

const signal = await new Promise<string>((resolve) => {
    ["SIGINT", "SIGTERM"].forEach(signal => {
        process.on(signal, resolve);
    });
});
console.log(`stop by ${signal}`);

server.close();
console.log("server closed");
