import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
const prefix = "/auth";

router.get(`${prefix}`, (context) => {
    context.response.body = "Hello world!";
});

export default router;
