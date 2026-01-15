import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { equipmentMaintenanceSchema } from "../validators/equipmentMaintenance.validator.js";
import {
  createMaintenanceController,
  deleteMaintenanceController,
  getMaintenanceController,
  getMaintenancesController,
  updateMaintenanceController,
} from "../controllers/equipmentMaintenance.controller.js";

const router = express.Router();

router.get("/", getMaintenancesController);
router.get("/:id", getMaintenanceController);
router.post("/", validateRequest(equipmentMaintenanceSchema), createMaintenanceController);
router.put("/:id", validateRequest(equipmentMaintenanceSchema), updateMaintenanceController);
router.delete("/:id", deleteMaintenanceController);

export default router;
