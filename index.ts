import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import authRouter from "./resources/auth/auth.router.ts";

const app = new Application();
const ENV = config();

const server = async () => {

    addMiddleware();
    addRouter();

    const PORT = ENV.PORT;
    console.log(`Listen to port ${PORT}.`);
    await app.listen(`0.0.0.0:${PORT}`);

};

const addMiddleware = () => {

    // Log
    app.use((context, next) => {
        console.log(context.request.method, context.request.url);
        next();
    });

    // Error Handler

};

const addRouter = () => {

    const router = new Router();

    router.get("/", (context) => {
        context.response.body = { hello: "Deno API" };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.use(authRouter.routes());
    app.use(authRouter.allowedMethods());

};

server();
