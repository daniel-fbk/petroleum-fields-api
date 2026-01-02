import * as z from "zod";

export const equipmentMaintenanceSchema = z.object({
  equipment_id: z.number().int().min(1),
  maintenance_date: z.string(),
  notes: z.string().optional().nullable(),
});
