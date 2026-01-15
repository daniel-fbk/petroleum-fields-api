import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { equipmentSchema } from "../validators/equipment.validator.js";
import {
  createEquipmentController,
  deleteEquipmentController,
  getEquipmentController,
  getEquipmentsController,
  updateEquipmentController,
} from "../controllers/equipment.controller.js";

const router = express.Router();

router.get("/", getEquipmentsController);
router.get("/:id", getEquipmentController);
router.post("/", validateRequest(equipmentSchema), createEquipmentController);
router.put("/:id", validateRequest(equipmentSchema), updateEquipmentController);
router.delete("/:id", deleteEquipmentController);

export default router;
