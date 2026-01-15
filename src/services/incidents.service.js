import {
  createIncidentModel,
  deleteIncidentModel,
  getIncidentModel,
  getIncidentsModel,
  updateIncidentModel,
} from "../models/incidents.model.js";

export async function getIncidentsService() {
  return getIncidentsModel();
}

export async function getIncidentService(id) {
  return getIncidentModel(id);
}

export async function createIncidentService(data) {
  return createIncidentModel(data);
}

export async function updateIncidentService(id, data) {
  updateIncidentModel(id, data);
}

export async function deleteIncidentService(id) {
  deleteIncidentModel(id);
}
