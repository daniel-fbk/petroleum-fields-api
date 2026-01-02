import * as equipmentModel from "../models/equipment.model.js";

export const getEquipmentList = async () => equipmentModel.getEquipmentList();
export const getEquipmentById = async (id) => equipmentModel.getEquipmentById(id);
export const createEquipment = async (data) => equipmentModel.createEquipment(data);
export const updateEquipment = async (id, data) => equipmentModel.updateEquipment(id, data);
export const deleteEquipment = async (id) => equipmentModel.deleteEquipment(id);
