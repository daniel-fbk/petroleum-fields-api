import {
  createWellSpecModel,
  deleteWellSpecModel,
  getWellSpecModel,
  getWellSpecsModel,
  updateWellSpecModel,
} from "../models/wellSpecs.model.js";

export async function getWellSpecsService() {
  return getWellSpecsModel();
}

export async function getWellSpecService(id) {
  return getWellSpecModel(id);
}

export async function createWellSpecService(data) {
  return createWellSpecModel(data);
}

export async function updateWellSpecService(id, data) {
  return updateWellSpecModel(id, data);
}

export async function deleteWellSpecService(id) {
  return deleteWellSpecModel(id);
}
