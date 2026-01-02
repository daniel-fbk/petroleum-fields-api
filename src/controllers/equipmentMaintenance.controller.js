import * as equipmentMaintenanceService from "../services/equipmentMaintenance.service.js";

export const getMaintenanceList = async (req, res, next) => {
  try {
    const list = await equipmentMaintenanceService.getMaintenanceList();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getMaintenance = async (req, res, next) => {
  try {
    const entry = await equipmentMaintenanceService.getMaintenanceById(req.params.id);
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

export const createMaintenance = async (req, res, next) => {
  try {
    const entry = await equipmentMaintenanceService.createMaintenance(req.body);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

export const updateMaintenance = async (req, res, next) => {
  try {
    const updated = await equipmentMaintenanceService.updateMaintenance(req.params.id, req.body);
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

export const deleteMaintenance = async (req, res, next) => {
  try {
    const result = await equipmentMaintenanceService.deleteMaintenance(req.params.id);
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
