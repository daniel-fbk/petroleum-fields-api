import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { wellSpecsSchema } from "../validators/wellSpecs.validator.js";
import {
  getWellSpecsController,
  getWellSpecController,
  createWellSpecController,
  updateWellSpecController,
  deleteWellSpecController,
} from "../controllers/wellSpecs.controller.js";

const router = express.Router();

router.get("/", getWellSpecsController);
router.get("/:id", getWellSpecController);
router.post("/", validateRequest(wellSpecsSchema), createWellSpecController);
router.put("/:id", validateRequest(wellSpecsSchema), updateWellSpecController);
router.delete("/:id", deleteWellSpecController);

export default router;
