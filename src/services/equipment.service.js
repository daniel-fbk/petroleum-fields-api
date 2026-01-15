import {
  createEquipmentModel,
  deleteEquipmentModel,
  getEquipmentModel,
  getEquipmentsModel,
  updateEquipmentModel,
} from "../models/equipment.model.js";

export async function getEquipmentsService() {
  return getEquipmentsModel();
}

export async function getEquipmentService(id) {
  return getEquipmentModel(id);
}

export async function createEquipmentService(data) {
  return createEquipmentModel(data);
}

export async function updateEquipmentService(id, data) {
  return updateEquipmentModel(id, data);
}

export async function deleteEquipmentService(id) {
  return deleteEquipmentModel(id);
}
