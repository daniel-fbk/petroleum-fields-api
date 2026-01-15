import pool from "../config/database.js";

// Get maintenance records
export async function getMaintenancesModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM equipment_maintenance
    `
  );
  return rows;
}

// Get maintenance record by id
export async function getMaintenanceModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM equipment_maintenance
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create maintenance record
export async function createMaintenanceModel(data) {
  const { equipment_id, maintenance_date, notes } = data;
  const [result] = await pool.query(
    `
    INSERT INTO equipment_maintenance
      (equipment_id, maintenance_date, notes)
    VALUES (?, ?, ?)
    `,
    [equipment_id, maintenance_date, notes]
  );
  return getMaintenancesModel(result.insertId);
}

// Update maintenance record
export async function updateMaintenanceModel(id, data) {
  const { equipment_id, maintenance_date, notes } = data;
  await pool.query(
    `
    UPDATE equipment_maintenance
    SET equipment_id = ?, maintenance_date = ?, notes = ?
      WHERE id = ?
    `,
    [equipment_id, maintenance_date, notes, id]
  );
  return getMaintenancesModel(id);
}

// Delete maintenance record by id
export async function deleteMaintenanceModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM equipment_maintenance
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
