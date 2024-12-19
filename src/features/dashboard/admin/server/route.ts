import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { addApkFormSchema, editApkFormSchema } from "../schema";
import { db } from "@/lib/db";

import { SessionMiddleware } from "@/lib/middleware";
import { createApplication, updateApplication } from "@/data/application";

const app = new Hono()
  .post(
    "/create",
    zValidator("json", addApkFormSchema),
    SessionMiddleware,
    async (c) => {
      const v = c.req.valid("json");
      const data = await createApplication(v);
      if (!data) return c.json({ error: "Unable to create Application" }, 500);

      return c.json({ success: "App Created Successfully" }, 200);
    }
  )
  .patch(
    "/edit/:id",
    zValidator("json", editApkFormSchema),
    SessionMiddleware,
    async (c) => {
      const v = c.req.valid("json");
      const { id } = c.req.param();
      const data = await updateApplication(v, id);
      if (!data) return c.json({ error: "Unable to Update Application" }, 500);

      return c.json({ success: "App Update Successfully", data }, 200);
    }
  )
  .get("/:search", SessionMiddleware, async (c) => {
    const { search } = c.req.param();

    try {
      if (search !== "null") {
        const data = await db.application.findMany({
          take: 1000,
          where: {
            OR: [
              { name: { contains: search } },
              { id: { contains: search } },
              { developer: { contains: search } },
            ],
          },
          orderBy: {
            updatedAt: "desc",
          },
        });

        return c.json({ success: "Request was success", data }, 200);
      }

      const data = await db.application.findMany({
        take: 1000,
        orderBy: {
          updatedAt: "desc",
        },
      });

      return c.json({ success: "Request was success", data }, 200);
    } catch (error) {
      return c.json({ error }, 500);
    }
  })
  .delete("/:id", SessionMiddleware, async (c) => {
    const { id } = c.req.param();

    try {
      await db.application.delete({
        where: { id },
      });

      return c.json({ success: "Application Delete" }, 200);
    } catch (error) {
      return c.json({ error }, 500);
    }
  });

export default app;
