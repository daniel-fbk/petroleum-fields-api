import * as wellSpecsService from "../services/wellSpecs.service.js";

export const getWellSpecs = async (req, res, next) => {
  try {
    const specs = await wellSpecsService.listWellSpecs();
    res.json(specs);
  } catch (err) {
    next(err);
  }
};

export const getWellSpec = async (req, res, next) => {
  try {
    const spec = await wellSpecsService.getWellSpecById(req.params.id);
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

export const createWellSpec = async (req, res, next) => {
  try {
    const spec = await wellSpecsService.createNewWellSpec(req.body);
    res.status(201).json(spec);
  } catch (err) {
    next(err);
  }
};

export const updateWellSpec = async (req, res, next) => {
  try {
    const updated = await wellSpecsService.updateWellSpecById(req.params.id, req.body);
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

export const deleteWellSpec = async (req, res, next) => {
  try {
    const result = await wellSpecsService.deleteWellSpecById(req.params.id);
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
