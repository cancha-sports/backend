import { z } from "zod";

export const sportSchema = z.object({
  name: z.string().min(1, "Sport name is required.").max(50),
});
