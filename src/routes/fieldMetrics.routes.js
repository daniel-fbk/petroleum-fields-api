import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { fieldMetricsSchema } from "../validators/fieldMetrics.validator.js";
import {
  createFieldMetricController,
  deleteFieldMetricController,
  getFieldMetricController,
  getFieldMetricsController,
  updateFieldMetricController,
} from "../controllers/fieldMetrics.controller.js";

const router = express.Router();

router.get("/", getFieldMetricsController);
router.get("/:id", getFieldMetricController);
router.post("/", validateRequest(fieldMetricsSchema), createFieldMetricController);
router.put("/:id", validateRequest(fieldMetricsSchema), updateFieldMetricController);
router.delete("/:id", deleteFieldMetricController);

export default router;
