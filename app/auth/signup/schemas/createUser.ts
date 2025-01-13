import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email().trim(),
  name: z.string().trim(),
  phone_number: z.string().trim(),
  password: z.string().trim(),
});
export type CreateUserInput = z.infer<typeof createUserSchema>;
