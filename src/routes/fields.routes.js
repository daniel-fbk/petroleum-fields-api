import express from "express";
import { getFields, getField, createField, updateField, deleteField } from "../controllers/fields.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { fieldsSchema } from "../validators/fields.validator.js";

const router = express.Router();

router.get("/", getFields);
router.get("/:id", getField);
router.post("/", validateRequest(fieldsSchema), createField);
router.put("/:id", validateRequest(fieldsSchema), updateField);
router.delete("/:id", deleteField);

export default router;
