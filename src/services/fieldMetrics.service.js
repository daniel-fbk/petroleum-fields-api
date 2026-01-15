import {
  createFieldMetricModel,
  deleteFieldMetricModel,
  getFieldMetricModel,
  getFieldMetricsModel,
  updateFieldMetricModel,
} from "../models/fieldMetrics.model.js";

export async function getFieldMetricsService() {
  return getFieldMetricsModel();
}

export async function getFieldMetricService(id) {
  return getFieldMetricModel(id);
}

export async function createFieldMetricService(data) {
  return createFieldMetricModel(data);
}

export async function updateFieldMetricService(id, data) {
  return updateFieldMetricModel(id, data);
}

export async function deleteFieldMetricService(id) {
  return deleteFieldMetricModel(id);
}
