import { date, pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const sexEnum = pgEnum("sex", ["male", "female"]);

export const applications = pgTable("applicants", {
  id: uuid("applicant_id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  email: varchar("email", { length: 50 }),
  birthdate: date("birth_date").notNull(),
  sex: sexEnum("sex").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  deletedAt: timestamp("deleted_at").defaultNow(),
});
