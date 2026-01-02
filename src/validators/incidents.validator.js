import * as z from "zod";

export const incidentsSchema = z.object({
  well_id: z.number().int().min(1),
  incident_date: z.string(),
  type: z.string().min(1).max(100),
  severity: z.enum(["low", "medium", "high"]),
  status: z.enum(["open", "closed", "investigating"]).optional().default("open"),
  description: z.string().optional().nullable(),
  resolution_date: z.string().optional().nullable(),
  resolution_notes: z.string().optional().nullable(),
});
