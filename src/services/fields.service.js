import {
  createFieldModel,
  deleteFieldModel,
  getFieldModel,
  getFieldsModel,
  updateFieldModel,
} from "../models/fields.model.js";

export async function getFieldsService() {
  return getFieldsModel();
}

export async function getFieldService(id) {
  return getFieldModel(id);
}

export async function createFieldService(data) {
  return createFieldModel(data);
}

export async function updateFieldService(id, data) {
  return updateFieldModel(id, data);
}

export async function deleteFieldService(id) {
  return deleteFieldModel(id);
}
