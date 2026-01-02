import * as z from "zod";

export const wellsSchema = z.object({
  name: z.string().min(1),
  wellbore_id: z.string().max(50).optional().nullable(),
  field_id: z.number().int().min(1),
  type_id: z.number().int().min(1),
  status: z.enum(["production", "shut-in", "drilling", "p&a"]),
  completion_type: z.enum(["vertical", "horizontal", "multilateral"]).optional().nullable(),
  spud_date: z.string().min(1),
  completion_date: z.string().optional().nullable(),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});
