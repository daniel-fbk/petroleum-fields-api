import * as z from "zod";

export const wellTypesSchema = z.object({
  name: z.string().min(1).max(100),
});
