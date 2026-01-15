import {
  createWellTypeService,
  deleteWellTypeService,
  getWellTypeService,
  getWellTypesService,
  updateWellTypeService,
} from "../services/wellTypes.service.js";

// Get all well types
export const getWellTypesController = async (req, res, next) => {
  try {
    const wellTypes = await getWellTypesService();
    res.json(wellTypes);
  } catch (err) {
    next(err);
  }
};

// Get a single well type by ID
export const getWellTypeController = async (req, res, next) => {
  try {
    const wellType = await getWellTypeService(req.params.id);
    if (!wellType) {
      const err = new Error(`Well type with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(wellType);
  } catch (err) {
    next(err);
  }
};

// Create a new well type
export const createWellTypeController = async (req, res, next) => {
  try {
    const newWellType = await createWellTypeService(req.body);
    res.status(201).json(newWellType);
  } catch (err) {
    next(err);
  }
};

// Update an existing well type
export const updateWellTypeController = async (req, res, next) => {
  try {
    const updatedWellType = await updateWellTypeService(req.params.id, req.body);
    if (!updatedWellType) {
      const err = new Error(`Well type with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updatedWellType);
  } catch (err) {
    next(err);
  }
};

// Delete a well type
export const deleteWellTypeController = async (req, res, next) => {
  try {
    const result = await deleteWellTypeService(req.params.id);
    if (!result || result.affectedRows === 0) {
      const err = new Error(`Well type with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Well type with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
