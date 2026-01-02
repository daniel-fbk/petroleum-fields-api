import * as fieldsService from "../services/fields.service.js";

// Get all fields
export const getFields = async (req, res, next) => {
  try {
    const fields = await fieldsService.listFields();
    res.json(fields);
  } catch (err) {
    next(err);
  }
};

// Get a single field by ID
export const getField = async (req, res, next) => {
  try {
    const field = await fieldsService.getFieldById(req.params.id);
    if (!field) {
      const err = new Error(`Field with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(field);
  } catch (err) {
    next(err);
  }
};

// Create a new field
export const createField = async (req, res, next) => {
  try {
    const field = await fieldsService.createNewField(req.body);
    res.status(201).json(field);
  } catch (err) {
    next(err);
  }
};

// Update an existing field
export const updateField = async (req, res, next) => {
  try {
    const updatedField = await fieldsService.updateFieldById(req.params.id, req.body);
    if (!updatedField) {
      const err = new Error(`Field with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.status(200).json(updatedField);
  } catch (err) {
    next(err);
  }
};

// Delete a field
export const deleteField = async (req, res, next) => {
  try {
    const result = await fieldsService.deleteFieldById(req.params.id);
    if (!result || result.affectedRows === 0) {
      const err = new Error(`Field with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Field with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
