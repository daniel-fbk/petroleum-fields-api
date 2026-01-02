import * as incidentsModel from "../models/incidents.model.js";

export const getIncidentsList = async () => incidentsModel.getIncidents();
export const getIncidentById = async (id) => incidentsModel.getIncident(id);
export const createIncidentEntry = async (data) => incidentsModel.createIncident(data);
export const updateIncidentEntry = async (id, data) => incidentsModel.updateIncident(id, data);
export const deleteIncidentEntry = async (id) => incidentsModel.deleteIncident(id);
