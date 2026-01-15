import {
  createEquipmentService,
  deleteEquipmentService,
  getEquipmentService,
  getEquipmentsService,
  updateEquipmentService,
} from "../services/equipment.service.js";

// Get all equipments
export const getEquipmentsController = async (req, res, next) => {
  try {
    const list = await getEquipmentsService();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

// Get a single equipment by ID
export const getEquipmentController = async (req, res, next) => {
  try {
    const equipment = await getEquipmentService(req.params.id);
    if (!equipment) {
      const err = new Error(`Equipment with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(equipment);
  } catch (err) {
    next(err);
  }
};

// Create a new equipment
export const createEquipmentController = async (req, res, next) => {
  try {
    const equipment = await createEquipmentService(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    next(err);
  }
};

// Update an existing equipment
export const updateEquipmentController = async (req, res, next) => {
  try {
    const updated = await updateEquipmentService(req.params.id, req.body);
    if (!updated) {
      const err = new Error(`Equipment with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete an equipment
export const deleteEquipmentController = async (req, res, next) => {
  try {
    const result = await deleteEquipmentService(req.params.id);
    if (result.affectedRows === 0) {
      const err = new Error(`Equipment with id ${req.params.id} not found`);
      err.status = 404;
      throw err;
    }
    res.json({ message: `Equipment with id ${req.params.id} deleted` });
  } catch (err) {
    next(err);
  }
};
