import {
  createIncidentService,
  deleteIncidentService,
  getIncidentService,
  getIncidentsService,
  updateIncidentService,
} from "../services/incidents.service.js";

// Get all Incidents
export const getIncidentsController = async (req, res, next) => {
  try {
    const list = await getIncidentsService();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Get an Incident by ID
export const getIncidentController = async (req, res, next) => {
  try {
    const incident = await getIncidentService(req.params.id);
    if (!incident) {
      const err = new Error(`Incident with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(incident);
  } catch (err) {
    next(err);
  }
};

// Create a new Incident
export const createIncidentController = async (req, res, next) => {
  try {
    const incident = await createIncidentService(req.body);
    res.status(201).json(incident);
  } catch (err) {
    next(err);
  }
};

// Update an existing Incident
export const updateIncidentController = async (req, res, next) => {
  try {
    const updated = await updateIncidentService(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Incident with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete an Incident
export const deleteIncidentController = async (req, res, next) => {
  try {
    const result = await deleteIncidentService(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Incident with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Incident with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
