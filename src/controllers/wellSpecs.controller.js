import {
  createWellSpecService,
  deleteWellSpecService,
  getWellSpecService,
  getWellSpecsService,
  updateWellSpecService,
} from "../services/wellSpecs.service.js";

// Get all Well Specs entries
export const getWellSpecsController = async (req, res, next) => {
  try {
    const specs = await getWellSpecsService();
    res.json(specs);
  } catch (err) {
    next(err);
  }
};

// Get a Well Spec entry by ID
export const getWellSpecController = async (req, res, next) => {
  try {
    const spec = await getWellSpecService(req.params.id);
    if (!spec) {
      const err = new Error(`Well spec with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(spec);
  } catch (err) {
    next(err);
  }
};

// Create a new Well Spec
export const createWellSpecController = async (req, res, next) => {
  try {
    const spec = await createWellSpecService(req.body);
    res.status(201).json(spec);
  } catch (err) {
    next(err);
  }
};

// Update an existing Well Spec entry
export const updateWellSpecController = async (req, res, next) => {
  try {
    const updated = await updateWellSpecService(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Well spec with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete a Well Spec entry
export const deleteWellSpecController = async (req, res, next) => {
  try {
    const result = await deleteWellSpecService(req.params.id);
    if (!result || result.affectedRows === 0) {
      const err = new Error(`Well spec with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Well spec with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
