import * as productionModel from "../models/production.model.js";

export const getProductionList = async () => productionModel.getProduction();
export const getProductionById = async (id) => productionModel.getProductionById(id);
export const createProductionEntry = async (data) => productionModel.createProduction(data);
export const updateProductionEntry = async (id, data) => productionModel.updateProduction(id, data);
export const deleteProductionEntry = async (id) => productionModel.deleteProduction(id);
