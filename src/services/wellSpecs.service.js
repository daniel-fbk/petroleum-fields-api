import * as wellSpecsModel from "../models/wellSpecs.model.js";

export const listWellSpecs = async () => wellSpecsModel.getWellSpecs();
export const getWellSpecById = async (id) => wellSpecsModel.getWellSpec(id);
export const createNewWellSpec = async (data) => wellSpecsModel.createWellSpec(data);
export const updateWellSpecById = async (id, data) => wellSpecsModel.updateWellSpec(id, data);
export const deleteWellSpecById = async (id) => wellSpecsModel.deleteWellSpec(id);
