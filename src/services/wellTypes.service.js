import * as wellTypesModel from "../models/wellTypes.model.js";

export async function listWellTypes() {
  return wellTypesModel.getWellTypes();
}

export async function getWellTypeById(id) {
  return wellTypesModel.getWellType(id);
}

export async function createWellType(data) {
  return wellTypesModel.createWellType(data);
}

export async function updateWellType(id, data) {
  return wellTypesModel.updateWellType(id, data);
}

export async function deleteWellType(id) {
  return wellTypesModel.deleteWellType(id);
}
