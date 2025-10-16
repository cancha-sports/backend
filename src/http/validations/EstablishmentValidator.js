import { z } from "zod";

export const createEstablishmentSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters."),

  latitude: z
    .number({
      required_error: "Latitude is required.",
      invalid_type_error: "Latitude must be a number.",
    })
    .min(-90, "Latitude must be between -90 and 90.")
    .max(90, "Latitude must be between -90 and 90."),

  longitude: z
    .number({
      required_error: "Longitude is required.",
      invalid_type_error: "Longitude must be a number.",
    })
    .min(-180, "Longitude must be between -180 and 180.")
    .max(180, "Longitude must be between -180 and 180."),

  owner_id: z
    .number({
      required_error: "Owner ID is required.",
      invalid_type_error: "Owner ID must be a number.",
    })
    .int("Owner ID must be an integer.")
    .positive("Owner ID must be a positive number."),

  working_days: z
    .array(
      z
        .number({
          required_error: "Working day is required.",
          invalid_type_error: "Working day must be a number.",
        })
        .int("Working day must be an integer.")
        .min(0, "Working day must be between 0 (Sunday) and 6 (Saturday).")
        .max(6, "Working day must be between 0 (Sunday) and 6 (Saturday).")
    )
    .min(1, "At least one working day is required.")
    .refine(
      (days) => {
        const uniqueDays = [...new Set(days)];
        return uniqueDays.length === days.length;
      },
      { message: "Working days must be unique." }
    ),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});

export const updateEstablishmentSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be at most 100 characters.")
    .optional(),

  latitude: z
    .number({
      invalid_type_error: "Latitude must be a number.",
    })
    .min(-90, "Latitude must be between -90 and 90.")
    .max(90, "Latitude must be between -90 and 90.")
    .optional(),

  longitude: z
    .number({
      invalid_type_error: "Longitude must be a number.",
    })
    .min(-180, "Longitude must be between -180 and 180.")
    .max(180, "Longitude must be between -180 and 180.")
    .optional(),

  working_days: z
    .array(
      z
        .number({
          invalid_type_error: "Working day must be a number.",
        })
        .int("Working day must be an integer.")
        .min(0, "Working day must be between 0 (Sunday) and 6 (Saturday).")
        .max(6, "Working day must be between 0 (Sunday) and 6 (Saturday).")
    )
    .min(1, "At least one working day is required.")
    .refine(
      (days) => {
        const uniqueDays = [...new Set(days)];
        return uniqueDays.length === days.length;
      },
      { message: "Working days must be unique." }
    )
    .optional(),

  photo: z
    .string()
    .max(255, "Photo must be at most 255 characters.")
    .optional(),
});
