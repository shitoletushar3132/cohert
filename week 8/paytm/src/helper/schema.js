import { z } from "zod";

export const signUpSchema = z
  .object({
    userName: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    firstName: z.string().nonempty("First Name is a required field."),
    lastName: z.string().nonempty("Last Name is a required field."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set error for the confirmPassword field
  });
