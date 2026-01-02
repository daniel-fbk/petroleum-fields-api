import * as productionService from "../services/production.service.js";

export const getProduction = async (req, res, next) => {
  try {
    const list = await productionService.getProductionList();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getProductionEntry = async (req, res, next) => {
  try {
    const entry = await productionService.getProductionById(req.params.id);
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

export const createProductionEntry = async (req, res, next) => {
  try {
    const entry = await productionService.createProductionEntry(req.body);
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

export const updateProductionEntry = async (req, res, next) => {
  try {
    const updated = await productionService.updateProductionEntry(req.params.id, req.body);
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

export const deleteProductionEntry = async (req, res, next) => {
  try {
    const result = await productionService.deleteProductionEntry(req.params.id);
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
