import { z } from "zod";

export const ApplicantSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  birthdate: z.string().date(),
  sex: z.enum(["male", "female"]),
});
