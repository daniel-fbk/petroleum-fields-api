import pool from "../config/database.js";

// Get equipments
export async function getEquipmentsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM equipment
    `
  );
  return rows;
}

// Get equipment by id
export async function getEquipmentModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM equipment
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create equipment
export async function createEquipmentModel(data) {
  const { well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status } = data;

  const [result] = await pool.query(
    `
    INSERT INTO equipment
      (well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status]
  );

  return getEquipmentModel(result.insertId);
}

// Update equipment
export async function updateEquipmentModel(id, data) {
  const { well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status } = data;

  await pool.query(
    `
    UPDATE equipment
    SET well_id = ?, type = ?, model = ?, serial_number = ?, install_date = ?, last_maintenance = ?, manufacturer = ?, subsystem = ?, status = ?
      WHERE id = ?
    `,
    [well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status, id]
  );

  return getEquipmentModel(id);
}

// Delete equipment by id
export async function deleteEquipmentModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM equipment
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
