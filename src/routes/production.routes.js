import express from "express";
import * as productionController from "../controllers/production.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { productionSchema } from "../validators/production.validator.js";

const router = express.Router();

router.get("/", productionController.getProduction);
router.get("/:id", productionController.getProductionEntry);
router.post("/", validateRequest(productionSchema), productionController.createProductionEntry);
router.put("/:id", validateRequest(productionSchema), productionController.updateProductionEntry);
router.delete("/:id", productionController.deleteProductionEntry);

export default router;
