import { z } from "zod";

export const createCourtSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters."),

  establishment_id: z
    .number({
      required_error: "Establishment ID is required.",
      invalid_type_error: "Establishment ID must be a number.",
    })
    .int("Establishment ID must be an integer.")
    .positive("Establishment ID must be a positive number."),

  sport_id: z
    .number({
      required_error: "Sport ID is required.",
      invalid_type_error: "Sport ID must be a number.",
    })
    .int("Sport ID must be an integer.")
    .positive("Sport ID must be a positive number."),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});

export const updateCourtSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters.")
    .optional(),

  sport_id: z
    .number({
      invalid_type_error: "Sport ID must be a number.",
    })
    .int("Sport ID must be an integer.")
    .positive("Sport ID must be a positive number.")
    .optional(),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});
