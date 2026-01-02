import * as incidentsService from "../services/incidents.service.js";

export const getIncidents = async (req, res, next) => {
  try {
    const list = await incidentsService.getIncidentsList();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getIncident = async (req, res, next) => {
  try {
    const incident = await incidentsService.getIncidentById(req.params.id);
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

export const createIncident = async (req, res, next) => {
  try {
    const incident = await incidentsService.createIncident(req.body);
    res.status(201).json(incident);
  } catch (err) {
    next(err);
  }
};

export const updateIncident = async (req, res, next) => {
  try {
    const updated = await incidentsService.updateIncident(req.params.id, req.body);
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

export const deleteIncident = async (req, res, next) => {
  try {
    const result = await incidentsService.deleteIncident(req.params.id);
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
