import express from "express";
import * as equipmentMaintenanceController from "../controllers/equipmentMaintenance.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { equipmentMaintenanceSchema } from "../validators/equipmentMaintenance.validator.js";

const router = express.Router();

router.get("/", equipmentMaintenanceController.getMaintenanceList);
router.get("/:id", equipmentMaintenanceController.getMaintenance);
router.post("/", validateRequest(equipmentMaintenanceSchema), equipmentMaintenanceController.createMaintenance);
router.put("/:id", validateRequest(equipmentMaintenanceSchema), equipmentMaintenanceController.updateMaintenance);
router.delete("/:id", equipmentMaintenanceController.deleteMaintenance);

export default router;
