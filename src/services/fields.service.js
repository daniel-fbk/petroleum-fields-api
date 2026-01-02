import * as fieldsModel from "../models/fields.model.js";

export async function listFields() {
  return fieldsModel.getFields();
}

export async function getFieldById(id) {
  return fieldsModel.getField(id);
}

export async function createNewField(data) {
  return fieldsModel.createField(data);
}

export async function updateFieldById(id, data) {
  return fieldsModel.updateField(id, data);
}

export async function deleteFieldById(id) {
  return fieldsModel.deleteField(id);
}
