import { z } from "zod";

export const createRecreationAreaBookingSchema = z.object({
  recreation_area_id: z
    .number({
      required_error: "Recreation area ID is required.",
      invalid_type_error: "Recreation area ID must be a number.",
    })
    .int("Recreation area ID must be an integer.")
    .positive("Recreation area ID must be a positive number."),

  user_id: z
    .number({
      required_error: "User ID is required.",
      invalid_type_error: "User ID must be a number.",
    })
    .int("User ID must be an integer.")
    .positive("User ID must be a positive number."),

  start_time: z
    .string({
      required_error: "Start time is required.",
      invalid_type_error: "Start time must be a string.",
    })
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid datetime format. Use YYYY-MM-DD HH:MM:SS."
    ),

  end_time: z
    .string({
      required_error: "End time is required.",
      invalid_type_error: "End time must be a string.",
    })
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid datetime format. Use YYYY-MM-DD HH:MM:SS."
    ),

  amount_paid: z
    .number({
      required_error: "Amount paid is required.",
      invalid_type_error: "Amount paid must be a number.",
    })
    .min(0, "Amount paid must be a non-negative number."),

  status: z.enum(["confirmed", "canceled"], {
    required_error: "Status is required.",
    invalid_type_error: "Status must be either 'confirmed' or 'canceled'.",
  }),
});

export const updateRecreationAreaBookingSchema = z.object({
  start_time: z
    .string({
      required_error: "Start time is required.",
      invalid_type_error: "Start time must be a string.",
    })
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid datetime format. Use YYYY-MM-DD HH:MM:SS."
    ),

  end_time: z
    .string({
      required_error: "End time is required.",
      invalid_type_error: "End time must be a string.",
    })
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid datetime format. Use YYYY-MM-DD HH:MM:SS."
    ),

  amount_paid: z
    .number({
      required_error: "Amount paid is required.",
      invalid_type_error: "Amount paid must be a number.",
    })
    .min(0, "Amount paid must be a non-negative number."),

  status: z.enum(["confirmed", "canceled"], {
    required_error: "Status sssssis required.",
    invalid_type_error: "Status must be either 'confirmed' or 'canceled'.",
  }),
});
