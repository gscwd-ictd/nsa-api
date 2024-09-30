import { db } from "@nsa/config/postgres";
import { Hono } from "hono";
import { applicants } from "@nsa/db/schema/applicants";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { ApplicantSchema } from "@nsa/types/applicant.schema";

const app = new Hono();

app
  .get("/", async (c) => {
    try {
      const prepare = db.select().from(applicants).prepare("applicant");
      const result = await prepare.execute();
      return c.json(result, 200);
    } catch (error) {
      console.error("Error fetching applicants: ", error);
      return c.json({ error: "Failed to fetch applicants." }, 500);
    }
  })

  .get("/:id", async (c) => {
    try {
      const id = c.req.param("id");

      const prepare = db.select().from(applicants).where(eq(applicants.id, id)).prepare("applicant");

      const result = await prepare.execute();

      if (result.length === 0) {
        return c.json({ error: "Applicant not found." }, 404);
      }

      return c.json(result[0], 200);
    } catch (error) {
      console.error("Error fetching applicant: ", error);
      return c.json({ error: "Failed to fetch applicant." }, 404);
    }
  })

  .post("/", zValidator("json", ApplicantSchema), async (c) => {
    try {
      const data = c.req.valid("json");

      const prepare = db.insert(applicants).values(data).returning({ id: applicants.id }).prepare("applicant");

      const result = await prepare.execute();

      return c.json(result[0], 201);
    } catch (error) {
      console.error("Error creating applicant: ", error);
      return c.json({ error: "Failed to create applicant." }, 409);
    }
  })

  .put("/:id", async (c) => {
    const id = c.req.param("id");
    return c.json(`update applicant details by id: ${id}`, 200);
  })

  .delete("/:id", async (c) => {
    try {
      const id = c.req.param("id");

      const findById = db.select().from(applicants).where(eq(applicants.id, id)).prepare("applicant");

      const applicantId = await findById.execute();

      if (applicantId.length === 0) {
        return c.json({ error: "Applicant not found." }, 404);
      }

      const prepare = db
        .delete(applicants)
        .where(eq(applicants.id, id))
        .returning({ id: applicants.id })
        .prepare("applicants");

      const result = await prepare.execute();
      return c.json(result[0], 204);
    } catch (error) {
      console.error("Error deleting applicant: ", error);
      return c.json({ error: "Failed to remove applicant." }, 404);
    }
  });

export default app;
