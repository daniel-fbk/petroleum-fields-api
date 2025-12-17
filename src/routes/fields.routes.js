import express from "express";
import {
  getFields,
  getField,
  createField,
  deleteField,
  updateField,
} from "../models/fields.model.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Fields
 *   description: Petroleum fields API
 */

/**
 * @swagger
 * /fields:
 *   get:
 *     summary: Get all petroleum fields
 *     tags: [Fields]
 *     responses:
 *       200:
 *         description: List of fields
 */
router.get("/", async (req, res, next) => {
  try {
    const fields = await getFields();
    res.json(fields);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /fields/{id}:
 *   get:
 *     summary: Get a field by ID
 *     tags: [Fields]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Field object
 */
router.get("/:id", async (req, res, next) => {
  try {
    const field = await getField(req.params.id);
    res.json(field);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /fields:
 *   post:
 *     summary: Create a new field
 *     tags: [Fields]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Field'
 *     responses:
 *       201:
 *         description: Created field
 */
router.post("/", async (req, res, next) => {
  try {
    const field = await createField(
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
});

/**
 * @swagger
 * /fields/{id}:
 *   delete:
 *     summary: Delete a field
 *     tags: [Fields]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Field deleted
 */
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteField(req.params.id);
    res.status(200).json({ message: `Field with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /fields/{id}:
 *   put:
 *     summary: Update a field
 *     tags: [Fields]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Field'
 *     responses:
 *       200:
 *         description: Updated field
 */
router.put("/:id", async (req, res, next) => {
  try {
    const updatedField = await updateField(
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
    res.status(200).json(updatedField);
  } catch (err) {
    next(err);
  }
});

export default router;
