import * as fieldsModel from "../models/fields.model.js";
import * as z from "zod";

// Zod schema for fields
const fieldSchema = z.object({
  name: z.string().min(1),
  region: z.string().min(1),
  block: z.string().max(50).optional().nullable(),
  operator: z.string().min(1),
  partners: z.string().max(255).optional().nullable(),
  status: z.enum(["producing", "shut-in", "development", "abandoned"]),
  discovery_year: z.number().int().min(1900).max(new Date().getFullYear()),
  onstream_date: z.string().optional().nullable(),
  abandonment_date: z.string().optional().nullable(),
  reservoir: z.string().max(100).optional().nullable(),
  water_depth: z.number().optional().nullable(),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  field_type: z.enum(["oil", "gas", "oil & gas"]),
});

// Validate body
function validateField(reqBody) {
  const parsed = fieldSchema.safeParse(reqBody);
  if (!parsed.success) {
    const errors = parsed.error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join("; ");
    const err = new Error(`Validation failed: ${errors}`);
    err.status = 400;
    throw err;
  }
  return parsed.data;
}

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

export const createField = async (req, res, next) => {
  try {
    const validData = validateField(req.body);
    const field = await fieldsModel.createField(validData);
    res.status(201).json(field);
  } catch (err) {
    next(err);
  }
};

export const updateField = async (req, res, next) => {
  try {
    const validData = validateField(req.body);
    const updatedField = await fieldsModel.updateField(req.params.id, validData);
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

export const deleteField = async (req, res, next) => {
  try {
    const result = await fieldsModel.deleteField(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Field with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Field with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
