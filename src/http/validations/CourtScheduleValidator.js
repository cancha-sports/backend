import { z } from "zod";

export const createCourtScheduleSchema = z.object({
  court_id: z
    .number({
      required_error: "Court ID is required.",
      invalid_type_error: "Court ID must be a number.",
    })
    .int("Court ID must be an integer.")
    .positive("Court ID must be a positive number."),

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

  game_duration: z
    .number({
      required_error: "Game duration is required.",
      invalid_type_error: "Game duration must be a number.",
    })
    .int("Game duration must be an integer.")
    .positive("Game duration must be a positive number."),

  price: z
    .number({
      required_error: "Price is required.",
      invalid_type_error: "Price must be a number.",
    })
    .min(0, "Price must be a non-negative number."),
});

export const updateCourtScheduleSchema = z.object({
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

  game_duration: z
    .number({
      invalid_type_error: "Game duration must be a number.",
    })
    .int("Game duration must be an integer.")
    .positive("Game duration must be a positive number.")
    .optional(),

  price: z
    .number({
      invalid_type_error: "Price must be a number.",
    })
    .min(0, "Price must be a non-negative number.")
    .optional(),
});
