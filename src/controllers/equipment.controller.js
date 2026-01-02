import * as equipmentService from "../services/equipment.service.js";

export const getEquipmentList = async (req, res, next) => {
  try {
    const list = await equipmentService.getEquipmentList();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const getEquipment = async (req, res, next) => {
  try {
    const equipment = await equipmentService.getEquipmentById(req.params.id);
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

export const createEquipment = async (req, res, next) => {
  try {
    const equipment = await equipmentService.createEquipment(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    next(err);
  }
};

export const updateEquipment = async (req, res, next) => {
  try {
    const updated = await equipmentService.updateEquipment(req.params.id, req.body);
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

export const deleteEquipment = async (req, res, next) => {
  try {
    const result = await equipmentService.deleteEquipment(req.params.id);
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
