import express from "express";
import { getWells, getWell, createWell, updateWell, deleteWell } from "../controllers/wells.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { wellsSchema } from "../validators/wells.validator.js";

const router = express.Router();

router.get("/", getWells);
router.get("/:id", getWell);
router.post("/", validateRequest(wellsSchema), createWell);
router.put("/:id", validateRequest(wellsSchema), updateWell);
router.delete("/:id", deleteWell);

export default router;
