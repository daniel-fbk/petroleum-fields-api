import {
  createFieldMetricService,
  deleteFieldMetricService,
  getFieldMetricService,
  getFieldMetricsService,
  updateFieldMetricService,
} from "../services/fieldMetrics.service.js";

// Get all Field Metric records
export const getFieldMetricsController = async (req, res, next) => {
  try {
    const list = await getFieldMetricsService();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Get a single Field Metric record
export const getFieldMetricController = async (req, res, next) => {
  try {
    const metric = await getFieldMetricService(req.params.id);
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

// Create a new Field Metric record
export const createFieldMetricController = async (req, res, next) => {
  try {
    const metric = await createFieldMetricService(req.body);
    res.status(201).json(metric);
  } catch (err) {
    next(err);
  }
};

// Update an exisiting Field Metric record
export const updateFieldMetricController = async (req, res, next) => {
  try {
    const updated = await updateFieldMetricService(req.params.id, req.body);
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

// Delete a Field Metric record
export const deleteFieldMetricController = async (req, res, next) => {
  try {
    const result = await deleteFieldMetricService(req.params.id);
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
