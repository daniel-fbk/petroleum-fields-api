import * as wellsService from "../services/wells.service.js";

// Get all wells
export const getWells = async (req, res, next) => {
  try {
    const wells = await wellsService.listWells();
    res.json(wells);
  } catch (err) {
    next(err);
  }
};

// Get a single well by ID
export const getWell = async (req, res, next) => {
  try {
    const well = await wellsService.getWellById(req.params.id);
    if (!well) {
      const err = new Error(`Well with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(well);
  } catch (err) {
    next(err);
  }
};

// Create a new well
export const createWell = async (req, res, next) => {
  try {
    const well = await wellsService.createNewWell(req.body);
    res.status(201).json(well);
  } catch (err) {
    next(err);
  }
};

// Update an existing well
export const updateWell = async (req, res, next) => {
  try {
    const updated = await wellsService.updateWellById(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Well with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a well
export const deleteWell = async (req, res, next) => {
  try {
    const result = await wellsService.deleteWellById(req.params.id);
    if (!result || result.affectedRows === 0) {
      const err = new Error(`Well with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Well with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
