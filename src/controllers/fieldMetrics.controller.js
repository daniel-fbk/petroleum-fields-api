import * as fieldMetricsService from "../services/fieldMetrics.service.js";

export const getFieldMetrics = async (req, res, next) => {
  try {
    const list = await fieldMetricsService.getFieldMetricsList();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getFieldMetric = async (req, res, next) => {
  try {
    const metric = await fieldMetricsService.getFieldMetricById(req.params.id);
    if (!metric) {
      const err = new Error(`Field metric with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(metric);
  } catch (err) {
    next(err);
  }
};

export const createFieldMetric = async (req, res, next) => {
  try {
    const metric = await fieldMetricsService.createFieldMetricEntry(req.body);
    res.status(201).json(metric);
  } catch (err) {
    next(err);
  }
};

export const updateFieldMetric = async (req, res, next) => {
  try {
    const updated = await fieldMetricsService.updateFieldMetricEntry(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Field metric with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteFieldMetric = async (req, res, next) => {
  try {
    const result = await fieldMetricsService.deleteFieldMetricEntry(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Field metric with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Field metric with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
