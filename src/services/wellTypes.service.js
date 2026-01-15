import {
  createWellTypeModel,
  deleteWellTypeModel,
  getWellTypeModel,
  getWellTypesModel,
  updateWellTypeModel,
} from "../models/wellTypes.model.js";

export async function getWellTypesService() {
  return getWellTypesModel();
}

export async function getWellTypeService(id) {
  return getWellTypeModel(id);
}

export async function createWellTypeService(data) {
  return createWellTypeModel(data);
}

export async function updateWellTypeService(id, data) {
  return updateWellTypeModel(id, data);
}

export async function deleteWellTypeService(id) {
  return deleteWellTypeModel(id);
}
