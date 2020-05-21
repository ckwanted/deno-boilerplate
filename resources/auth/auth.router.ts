import { Router } from "https://deno.land/x/oak/mod.ts";
import AuthController from "./auth.controller.ts";

const router = new Router({ prefix: "/auth" });

router.get("/login", AuthController.login);
router.get("/register", AuthController.register);

export default router;
