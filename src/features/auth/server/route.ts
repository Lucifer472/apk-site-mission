import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { LoginSchema } from "../schema";
import { signIn, signOut } from "@/auth";
import { SessionMiddleware } from "@/lib/middleware";

const app = new Hono()
  .post("/login", zValidator("json", LoginSchema), async (c) => {
    try {
      const { email, password } = c.req.valid("json");

      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      return c.json({ success: "Login" }, 200);
    } catch (error) {
      return c.json({ error: error }, 500);
    }
  })
  .get("/user", SessionMiddleware, async (c) => {
    const user = c.get("user");

    const newUser = { ...user, password: null };

    return c.json({ success: newUser }, 200);
  })
  .get("/logout", SessionMiddleware, async (c) => {
    await signOut({
      redirect: false,
    });
    return c.json({ success: "logout" }, 200);
  });

export default app;
