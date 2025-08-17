import { z } from "zod";

export const createRecreationAreaSchema = z.object({
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
  recreation_area_type_id: z
    .number({
      required_error: "Recreation Area Type ID is required.",
      invalid_type_error: "Recreation Area Type ID must be a number.",
    })
    .int("Recreation Area Type ID must be an integer.")
    .positive("Recreation Area Type ID must be a positive number."),
});

export const updateRecreationAreaSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters."),
  recreation_area_type_id: z
    .number({
      required_error: "Recreation Area Type ID is required.",
      invalid_type_error: "Recreation Area Type ID must be a number.",
    })
    .int("Recreation Area Type ID must be an integer.")
    .positive("Recreation Area Type ID must be a positive number."),
});
