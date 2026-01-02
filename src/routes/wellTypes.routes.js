import express from "express";
import {
  getWellTypes,
  getWellType,
  createWellType,
  updateWellType,
  deleteWellType,
} from "../controllers/wellTypes.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { wellTypeSchema } from "../validators/wellTypes.validator.js";

const router = express.Router();

router.get("/", getWellTypes);
router.get("/:id", getWellType);
router.post("/", validateRequest(wellTypeSchema), createWellType);
router.put("/:id", validateRequest(wellTypeSchema), updateWellType);
router.delete("/:id", deleteWellType);

export default router;
