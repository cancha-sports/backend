import { z } from "zod";

export const recreationAreaTypeSchema = z.object({
  name: z.string().min(1, "Recreation area type name is required.").max(50),
});
