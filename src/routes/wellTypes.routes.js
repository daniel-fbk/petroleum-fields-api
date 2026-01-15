import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { wellTypesSchema } from "../validators/wellTypes.validator.js";
import {
  getWellTypesController,
  getWellTypeController,
  createWellTypeController,
  updateWellTypeController,
  deleteWellTypeController,
} from "../controllers/wellTypes.controller.js";

const router = express.Router();

router.get("/", getWellTypesController);
router.get("/:id", getWellTypeController);
router.post("/", validateRequest(wellTypesSchema), createWellTypeController);
router.put("/:id", validateRequest(wellTypesSchema), updateWellTypeController);
router.delete("/:id", deleteWellTypeController);

export default router;
