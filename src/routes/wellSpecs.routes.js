import express from "express";
import {
  getWellSpecs,
  getWellSpec,
  createWellSpec,
  updateWellSpec,
  deleteWellSpec,
} from "../controllers/wellSpecs.controller.js";

const router = express.Router();

router.get("/", getWellSpecs);
router.get("/:id", getWellSpec);
router.post("/", createWellSpec);
router.put("/:id", updateWellSpec);
router.delete("/:id", deleteWellSpec);

export default router;
