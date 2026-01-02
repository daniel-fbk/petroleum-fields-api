import * as z from "zod";

export const equipmentSchema = z.object({
  well_id: z.number().int().min(1),
  type: z.string().min(1),
  model: z.string().min(1),
  serial_number: z.string().min(1).max(50),
  install_date: z.string().optional().nullable(),
  last_maintenance: z.string().optional().nullable(),
  manufacturer: z.string().max(100).optional().nullable(),
  subsystem: z.string().max(50).optional().nullable(),
  status: z.enum(["pending", "operational", "broken", "maintenance"]),
});
