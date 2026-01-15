import {
  createMaintenanceService,
  deleteMaintenanceService,
  getMaintenanceService,
  getMaintenancesService,
  updateMaintenanceService,
} from "../services/equipmentMaintenance.service.js";

// Get all maintenance records
export const getMaintenancesController = async (req, res, next) => {
  try {
    const list = await getMaintenancesService();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Get a maintenance record
export const getMaintenanceController = async (req, res, next) => {
  try {
    const entry = await getMaintenanceService(req.params.id);
    if (!entry) {
      const err = new Error(`Maintenance entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(entry);
  } catch (err) {
    next(err);
  }
};

// Create a new maintenance record
export const createMaintenanceController = async (req, res, next) => {
  try {
    const entry = await createMaintenanceService(req.body);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

// Update an existing maintenance record
export const updateMaintenanceController = async (req, res, next) => {
  try {
    const updated = await updateMaintenanceService(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Maintenance entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a maintenance record
export const deleteMaintenanceController = async (req, res, next) => {
  try {
    const result = await deleteMaintenanceService(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Maintenance entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Maintenance entry with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
