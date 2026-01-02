import pool from "../config/database.js";

// Get all equipment
export async function getEquipmentList() {
  const [rows] = await pool.query(`
    SELECT *
    FROM equipment
  `);
  return rows;
}

// Get a single equipment by id
export async function getEquipmentById(id) {
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
export async function createEquipment(data) {
  const { well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status } = data;

  const [result] = await pool.query(
    `
    INSERT INTO equipment
      (well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status]
  );

  return getEquipmentById(result.insertId);
}

// Update equipment
export async function updateEquipment(id, data) {
  const { well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status } = data;

  await pool.query(
    `
    UPDATE equipment
    SET well_id = ?, type = ?, model = ?, serial_number = ?, install_date = ?, last_maintenance = ?, manufacturer = ?, subsystem = ?, status = ?
    WHERE id = ?
  `,
    [well_id, type, model, serial_number, install_date, last_maintenance, manufacturer, subsystem, status, id]
  );

  return getEquipmentById(id);
}

// Delete equipment
export async function deleteEquipment(id) {
  const [result] = await pool.query(
    `
    DELETE FROM equipment
    WHERE id = ?
  `,
    [id]
  );
  return result;
}
