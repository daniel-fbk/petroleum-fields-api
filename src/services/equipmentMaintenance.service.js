import {
  createMaintenanceModel,
  deleteMaintenanceModel,
  getMaintenanceModel,
  getMaintenancesModel,
  updateMaintenanceModel,
} from "../models/equipmentMaintenance.model.js";

export async function getMaintenancesService() {
  return getMaintenancesModel();
}

export async function getMaintenanceService(id) {
  return getMaintenanceModel(id);
}

export async function createMaintenanceService(data) {
  return createMaintenanceModel(data);
}

export async function updateMaintenanceService(id, data) {
  return updateMaintenanceModel(id, data);
}

export async function deleteMaintenanceService(id) {
  return deleteMaintenanceModel(id);
}
