import * as z from "zod";

export const wellSpecsSchema = z.object({
  well_id: z.number().int().min(1),
  total_depth: z.number().min(0),
  tvd: z.number().min(0).optional().nullable(),
  elevation_kb: z.number().optional().nullable(),
  elevation_seabed: z.number().optional().nullable(),
  tubing_size: z.number().min(0),
  casing_size: z.number().min(0).optional().nullable(),
  reservoir: z.string().max(100).optional().nullable(),
});
