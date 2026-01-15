import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { wellsSchema } from "../validators/wells.validator.js";
import {
  getWellsController,
  getWellController,
  createWellController,
  updateWellController,
  deleteWellController,
} from "../controllers/wells.controller.js";

const router = express.Router();

router.get("/", getWellsController);
router.get("/:id", getWellController);
router.post("/", validateRequest(wellsSchema), createWellController);
router.put("/:id", validateRequest(wellsSchema), updateWellController);
router.delete("/:id", deleteWellController);

export default router;
