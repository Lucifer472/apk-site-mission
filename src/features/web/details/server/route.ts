import { db } from "@/lib/db";
import { Hono } from "hono";

const app = new Hono().post("/:applicationId", async (c) => {
  const { applicationId } = c.req.param();
  try {
    await db.application.update({
      where: {
        id: applicationId,
      },
      data: {
        clicked: {
          increment: 1,
        },
      },
    });
    return c.json({ success: "Request was success" }, 200);
  } catch (error) {
    return c.json({ error }, 500);
  }
});

export default app;
