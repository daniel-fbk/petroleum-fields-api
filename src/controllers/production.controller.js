import {
  createProductionService,
  deleteProductionService,
  getProductionService,
  getProductionsService,
  updateProductionService,
} from "../services/production.service.js";

// Get all Production entries
export const getProductionsController = async (req, res, next) => {
  try {
    const list = await getProductionsService();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Get a Production entry by ID
export const getProductionController = async (req, res, next) => {
  try {
    const entry = await getProductionService(req.params.id);
    if (!entry) {
      const err = new Error(`Production entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(entry);
  } catch (err) {
    next(err);
  }
};

// Create a new Production entry
export const createProductionController = async (req, res, next) => {
  try {
    const entry = await createProductionService(req.body);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

// Update an existing Production entry
export const updateProductionController = async (req, res, next) => {
  try {
    const updated = await updateProductionService(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Production entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a Production entry
export const deleteProductionController = async (req, res, next) => {
  try {
    const result = await deleteProductionService(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Production entry with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Production entry with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
