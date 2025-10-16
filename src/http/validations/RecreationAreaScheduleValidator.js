import { z } from "zod";

export const createRecreationAreaScheduleSchema = z.object({
  recreation_area_id: z
    .number({
      required_error: "Recreation Area ID is required.",
      invalid_type_error: "Recreation Area ID must be a number.",
    })
    .int("Recreation Area ID must be an integer.")
    .positive("Recreation Area ID must be a positive number."),

  opening_time: z
    .string({
      required_error: "Opening time is required.",
      invalid_type_error: "Opening time must be a string.",
    })
    .regex(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/,
      "Invalid time format. Use HH:MM or HH:MM:SS."
    ),

  closing_time: z
    .string({
      required_error: "Closing time is required.",
      invalid_type_error: "Closing time must be a string.",
    })
    .regex(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/,
      "Invalid time format. Use HH:MM or HH:MM:SS."
    ),

  usage_duration: z
    .number({
      required_error: "Usage duration is required.",
      invalid_type_error: "Usage duration must be a number.",
    })
    .int("Usage duration must be an integer.")
    .positive("Usage duration must be a positive number."),

  price_brl: z
    .number({
      required_error: "Price in BRL is required.",
      invalid_type_error: "Price in BRL must be a number.",
    })
    .min(0, "Price in BRL must be a non-negative number."),

  price_uyu: z
    .number({
      required_error: "Price in UYU is required.",
      invalid_type_error: "Price in UYU must be a number.",
    })
    .min(0, "Price in UYU must be a non-negative number."),
});

export const updateRecreationAreaScheduleSchema = z.object({
  opening_time: z
    .string({
      invalid_type_error: "Opening time must be a string.",
    })
    .regex(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/,
      "Invalid time format. Use HH:MM or HH:MM:SS."
    )
    .optional(),

  closing_time: z
    .string({
      invalid_type_error: "Closing time must be a string.",
    })
    .regex(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/,
      "Invalid time format. Use HH:MM or HH:MM:SS."
    )
    .optional(),

  usage_duration: z
    .number({
      invalid_type_error: "Usage duration must be a number.",
    })
    .int("Usage duration must be an integer.")
    .positive("Usage duration must be a positive number.")
    .optional(),

  price_brl: z
    .number({
      invalid_type_error: "Price in BRL must be a number.",
    })
    .min(0, "Price in BRL must be a non-negative number.")
    .optional(),

  price_uyu: z
    .number({
      invalid_type_error: "Price in UYU must be a number.",
    })
    .min(0, "Price in UYU must be a non-negative number.")
    .optional(),
});
