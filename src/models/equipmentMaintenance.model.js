import pool from "../config/database.js";

// Get all maintenance records
export const getMaintenanceList = async () => {
  const [rows] = await pool.query("SELECT * FROM equipment_maintenance");
  return rows;
};

// Get maintenance record by id
export const getMaintenanceById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM equipment_maintenance WHERE id = ?", [id]);
  return rows[0];
};

// Create maintenance record
export const createMaintenance = async (data) => {
  const { equipment_id, maintenance_date, notes } = data;
  const [result] = await pool.query(
    "INSERT INTO equipment_maintenance (equipment_id, maintenance_date, notes) VALUES (?, ?, ?)",
    [equipment_id, maintenance_date, notes]
  );
  return getMaintenanceById(result.insertId);
};

// Update maintenance record
export const updateMaintenance = async (id, data) => {
  const { equipment_id, maintenance_date, notes } = data;
  await pool.query("UPDATE equipment_maintenance SET equipment_id = ?, maintenance_date = ?, notes = ? WHERE id = ?", [
    equipment_id,
    maintenance_date,
    notes,
    id,
  ]);
  return getMaintenanceById(id);
};

// Delete maintenance record
export const deleteMaintenance = async (id) => {
  const [result] = await pool.query("DELETE FROM equipment_maintenance WHERE id = ?", [id]);
  return result;
};
