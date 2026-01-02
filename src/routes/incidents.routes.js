import express from "express";
import * as incidentsController from "../controllers/incidents.controller.js";
import { validateRequest } from "../middleware/validate.request.js";
import { incidentsSchema } from "../validators/incidents.validator.js";

const router = express.Router();

router.get("/", incidentsController.getIncidents);
router.get("/:id", incidentsController.getIncident);
router.post("/", validateRequest(incidentsSchema), incidentsController.createIncident);
router.put("/:id", validateRequest(incidentsSchema), incidentsController.updateIncident);
router.delete("/:id", incidentsController.deleteIncident);

export default router;
