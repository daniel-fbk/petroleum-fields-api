import * as wellTypesService from "../services/wellTypes.service.js";

// Get all well types
export const getWellTypes = async (req, res, next) => {
  try {
    const wellTypes = await wellTypesService.listWellTypes();
    res.json(wellTypes);
  } catch (err) {
    next(err);
  }
};

// Get a single well type by ID
export const getWellType = async (req, res, next) => {
  try {
    const wellType = await wellTypesService.getWellTypeById(req.params.id);
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
export const createWellType = async (req, res, next) => {
  try {
    const newWellType = await wellTypesService.createWellType(req.body);
    res.status(201).json(newWellType);
  } catch (err) {
    next(err);
  }
};

// Update an existing well type
export const updateWellType = async (req, res, next) => {
  try {
    const updatedWellType = await wellTypesService.updateWellType(req.params.id, req.body);
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
export const deleteWellType = async (req, res, next) => {
  try {
    const result = await wellTypesService.deleteWellType(req.params.id);
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
