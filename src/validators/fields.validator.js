import * as z from "zod";

export const fieldsSchema = z.object({
  name: z.string().min(1),
  region: z.string().min(1),
  block: z.string().max(50).optional().nullable(),
  operator: z.string().min(1),
  partners: z.string().max(255).optional().nullable(),
  status: z.enum(["producing", "shut-in", "development", "abandoned"]),
  discovery_year: z.number().int().min(1900).max(new Date().getFullYear()),
  onstream_date: z.string().optional().nullable(),
  abandonment_date: z.string().optional().nullable(),
  reservoir: z.string().max(100).optional().nullable(),
  water_depth: z.number().optional().nullable(),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  field_type: z.enum(["oil", "gas", "oil & gas"]),
});
