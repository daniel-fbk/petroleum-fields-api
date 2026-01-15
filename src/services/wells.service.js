import {
  createWellModel,
  deleteWellModel,
  getWellModel,
  getWellsModel,
  updateWellModel,
} from "../models/wells.model.js";

export async function getWellsService() {
  return getWellsModel();
}

export async function getWellService(id) {
  return getWellModel(id);
}

export async function createWellService(data) {
  return createWellModel(data);
}

export async function updateWellService(id, data) {
  return updateWellModel(id, data);
}

export async function deleteWellService(id) {
  return deleteWellModel(id);
}
