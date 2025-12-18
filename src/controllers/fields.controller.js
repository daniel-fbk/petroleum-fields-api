import * as fieldsModel from "../models/fields.model.js";

export const getFields = async (req, res, next) => {
  try {
    const fields = await fieldsModel.getFields();
    res.json(fields);
  } catch (err) {
    next(err);
  }
};

export const getField = async (req, res, next) => {
  try {
    const field = await fieldsModel.getField(req.params.id);
    res.json(field);
  } catch (err) {
    next(err);
  }
};

export const createField = async (req, res, next) => {
  try {
    const field = await fieldsModel.createField(
      req.body.name,
      req.body.region,
      req.body.block,
      req.body.operator,
      req.body.partners,
      req.body.status,
      req.body.discovery_year,
      req.body.onstream_date,
      req.body.abandonment_date,
      req.body.reservoir,
      req.body.water_depth,
      req.body.latitude,
      req.body.longitude,
      req.body.field_type
    );
    res.status(201).json(field);
  } catch (err) {
    next(err);
  }
};

export const updateField = async (req, res, next) => {
  try {
    const updatedField = await fieldsModel.updateField(
      req.params.id,
      req.body.name,
      req.body.region,
      req.body.block,
      req.body.operator,
      req.body.partners,
      req.body.status,
      req.body.discovery_year,
      req.body.onstream_date,
      req.body.abandonment_date,
      req.body.reservoir,
      req.body.water_depth,
      req.body.latitude,
      req.body.longitude,
      req.body.field_type
    );
    res.json(updatedField);
  } catch (err) {
    next(err);
  }
};

export const deleteField = async (req, res, next) => {
  try {
    await fieldsModel.deleteField(req.params.id);
    res.json({ message: `Field with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
