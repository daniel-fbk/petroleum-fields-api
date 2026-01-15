import pool from "../config/database.js";

// Get Wells
export async function getWellsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM wells
    `
  );
  return rows;
}

// Get Well by id
export async function getWellModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM wells
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create Well
export async function createWellModel(data) {
  const {
    name,
    wellbore_id,
    field_id,
    type_id,
    status,
    completion_type,
    spud_date,
    completion_date,
    latitude,
    longitude,
  } = data;

  const [result] = await pool.query(
    `
    INSERT INTO wells 
      (name, wellbore_id, field_id, type_id, status, completion_type, spud_date, completion_date, latitude, longitude)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [name, wellbore_id, field_id, type_id, status, completion_type, spud_date, completion_date, latitude, longitude]
  );

  return getWell(result.insertId);
}

// Update Well
export async function updateWellModel(id, data) {
  const {
    name,
    wellbore_id,
    field_id,
    type_id,
    status,
    completion_type,
    spud_date,
    completion_date,
    latitude,
    longitude,
  } = data;

  await pool.query(
    `
    UPDATE wells
    SET name = ?, wellbore_id = ?, field_id = ?, type_id = ?, status = ?, completion_type = ?, spud_date = ?, completion_date = ?, latitude = ?, longitude = ?
      WHERE id = ?
     `,
    [name, wellbore_id, field_id, type_id, status, completion_type, spud_date, completion_date, latitude, longitude, id]
  );

  return getWell(id);
}

// Delete Well by id
export async function deleteWellModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM wells
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
