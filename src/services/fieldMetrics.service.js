import * as fieldMetricsModel from "../models/fieldMetrics.model.js";

export const getFieldMetricsList = () => fieldMetricsModel.getFieldMetrics();
export const getFieldMetricById = (id) => fieldMetricsModel.getFieldMetric(id);
export const createFieldMetricEntry = (data) => fieldMetricsModel.createFieldMetric(data);
export const updateFieldMetricEntry = (id, data) => fieldMetricsModel.updateFieldMetric(id, data);
export const deleteFieldMetricEntry = (id) => fieldMetricsModel.deleteFieldMetric(id);
