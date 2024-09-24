import { pgTable, uuid } from "drizzle-orm/pg-core";

export const applications = pgTable("applicants", {
  id: uuid("applicant_id").defaultRandom(),
});
