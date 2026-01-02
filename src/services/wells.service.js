import * as wellsModel from "../models/wells.model.js";

export async function listWells() {
  return wellsModel.getWells();
}

export async function getWellById(id) {
  return wellsModel.getWell(id);
}

export async function createNewWell(data) {
  return wellsModel.createWell(data);
}

export async function updateWellById(id, data) {
  return wellsModel.updateWell(id, data);
}

export async function deleteWellById(id) {
  return wellsModel.deleteWell(id);
}
