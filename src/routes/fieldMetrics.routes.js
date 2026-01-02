import express from "express";
import * as fieldMetricsController from "../controllers/fieldMetrics.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { fieldMetricsSchema } from "../validators/fieldMetrics.validator.js";

const router = express.Router();

router.get("/", fieldMetricsController.getFieldMetrics);
router.get("/:id", fieldMetricsController.getFieldMetric);
router.post("/", validateRequest(fieldMetricsSchema), fieldMetricsController.createFieldMetric);
router.put("/:id", validateRequest(fieldMetricsSchema), fieldMetricsController.updateFieldMetric);
router.delete("/:id", fieldMetricsController.deleteFieldMetric);

export default router;
