import * as z from "zod";

export const productionSchema = z.object({
  well_id: z.number().int().min(1),
  production_date: z.string(),
  oil_volume: z.number(),
  gas_volume: z.number(),
  watercut: z.number(),
  water_volume: z.number(),
  on_stream_hours: z.number(),
  off_stream_hours: z.number().optional().nullable(),
  gas_flare: z.number(),
  downhole_pressure: z.number().optional().nullable(),
  downhole_temp: z.number().optional().nullable(),
  wellhead_pressure: z.number().optional().nullable(),
  choke_pct: z.number().optional().nullable(),
});
