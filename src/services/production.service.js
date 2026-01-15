import {
  createProductionModel,
  deleteProductionModel,
  getProductionModel,
  getProductionsModel,
  updateProductionModel,
} from "../models/production.model.js";

export async function getProductionsService() {
  return getProductionsModel();
}

export async function getProductionService(id) {
  return getProductionModel(id);
}

export async function createProductionService(data) {
  return createProductionModel(data);
}

export async function updateProductionService(id, data) {
  return updateProductionModel(id, data);
}

export async function deleteProductionService(id) {
  return deleteProductionModel(id);
}
