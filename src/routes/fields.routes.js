import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { fieldsSchema } from "../validators/fields.validator.js";
import {
  getFieldsController,
  getFieldController,
  createFieldController,
  updateFieldController,
  deleteFieldController,
} from "../controllers/fields.controller.js";

const router = express.Router();

router.get("/", getFieldsController);
router.get("/:id", getFieldController);
router.post("/", validateRequest(fieldsSchema), createFieldController);
router.put("/:id", validateRequest(fieldsSchema), updateFieldController);
router.delete("/:id", deleteFieldController);

export default router;
