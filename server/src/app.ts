import { setTimeout } from "node:timers/promises";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export const app = new Hono();
app.use(logger());
app.use(cors({
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    origin(origin, _c) {
        return origin;
    },
}));

const list: string[] = [];
app.all("/foo", async (c) => {
    const now = new Date().toISOString();
    if (c.req.method === "POST") {
        list.push(now);
    }

    await setTimeout(1000);

    c.res.headers.set("Cache-Control", "no-store");
    return c.json({ status: "ok", now: now, list });
});
