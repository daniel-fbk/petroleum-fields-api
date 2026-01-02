import * as z from "zod";

export const fieldMetricsSchema = z.object({
  field_id: z.number().int().min(1),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  estimated_oil_reserves: z.number().optional().nullable(),
  estimated_gas_reserves: z.number().optional().nullable(),
  production_capacity_oil: z.number().optional().nullable(),
  production_capacity_gas: z.number().optional().nullable(),
});
