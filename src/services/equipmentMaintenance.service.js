import * as equipmentMaintenanceModel from "../models/equipmentMaintenance.model.js";

export const getMaintenanceList = async () => equipmentMaintenanceModel.getMaintenanceList();
export const getMaintenanceById = async (id) => equipmentMaintenanceModel.getMaintenanceById(id);
export const createMaintenance = async (data) => equipmentMaintenanceModel.createMaintenance(data);
export const updateMaintenance = async (id, data) => equipmentMaintenanceModel.updateMaintenance(id, data);
export const deleteMaintenance = async (id) => equipmentMaintenanceModel.deleteMaintenance(id);
