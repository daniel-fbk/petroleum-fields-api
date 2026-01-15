import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { productionSchema } from "../validators/production.validator.js";
import {
  createProductionController,
  deleteProductionController,
  getProductionController,
  getProductionsController,
  updateProductionController,
} from "../controllers/production.controller.js";

const router = express.Router();

router.get("/", getProductionsController);
router.get("/:id", getProductionController);
router.post("/", validateRequest(productionSchema), createProductionController);
router.put("/:id", validateRequest(productionSchema), updateProductionController);
router.delete("/:id", deleteProductionController);

export default router;
