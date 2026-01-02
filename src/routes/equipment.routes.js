import express from "express";
import * as equipmentController from "../controllers/equipment.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { equipmentSchema } from "../validators/equipment.validator.js";

const router = express.Router();

router.get("/", equipmentController.getEquipmentList);
router.get("/:id", equipmentController.getEquipment);
router.post("/", validateRequest(equipmentSchema), equipmentController.createEquipment);
router.put("/:id", validateRequest(equipmentSchema), equipmentController.updateEquipment);
router.delete("/:id", equipmentController.deleteEquipment);

export default router;
