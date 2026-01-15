import express from "express";
import { validateRequest } from "../middleware/validate.request.js";
import { incidentsSchema } from "../validators/incidents.validator.js";
import {
  createIncidentController,
  deleteIncidentController,
  getIncidentController,
  getIncidentsController,
  updateIncidentController,
} from "../controllers/incidents.controller.js";

const router = express.Router();

router.get("/", getIncidentsController);
router.get("/:id", getIncidentController);
router.post("/", validateRequest(incidentsSchema), createIncidentController);
router.put("/:id", validateRequest(incidentsSchema), updateIncidentController);
router.delete("/:id", deleteIncidentController);

export default router;
