import { z } from "zod";

export const createUserSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters."),

  birth_date: z.string().refine(
    (val) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(val)) return false;

      const date = new Date(val);
      return !isNaN(date) && date <= new Date();
    },
    {
      message:
        "Birth date must be a valid date in ISO format (YYYY-MM-DD) and cannot be in the future.",
    }
  ),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address format."),

  phone: z
    .string()
    .min(1, "Phone number is required.")
    .min(8, "Phone number must contain at least 8 characters.")
    .max(20, "Phone number must be at most 20 characters."),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters.")
    .max(64, "Password must be at most 64 characters.")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter (A-Z).",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number (0-9).",
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Password must contain at least one special character.",
    }),

  role_id: z
    .number({
      required_error: "Role ID is required.",
      invalid_type_error: "Role ID must be a number.",
    })
    .int("Role ID must be an integer.")
    .positive("Role ID must be a positive number."),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters.")
    .optional(),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters.")
    .max(64, "Password must be at most 64 characters.")
    .refine((val) => !val || /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter (A-Z).",
    })
    .refine((val) => !val || /[0-9]/.test(val), {
      message: "Password must contain at least one number (0-9).",
    })
    .refine((val) => !val || /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Password must contain at least one special character.",
    })
    .optional(),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});
