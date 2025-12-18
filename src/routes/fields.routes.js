import express from "express";
import { getFields, getField, createField, updateField, deleteField } from "../controllers/fields.controller.js";

const router = express.Router();

router.get("/", getFields);
router.get("/:id", getField);
router.post("/", createField);
router.put("/:id", updateField);
router.delete("/:id", deleteField);

export default router;
