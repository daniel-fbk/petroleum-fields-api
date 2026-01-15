import pool from "../config/database.js";

// Get Well Types
export async function getWellTypesModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM well_types
    `
  );
  return rows;
}

// Get Well Type by id
export async function getWellTypeModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM well_types
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create Well Type
export async function createWellTypeModel(data) {
  const { name } = data;

  const [result] = await pool.query(
    `
    INSERT INTO well_types (name)
    VALUES (?)
    `,
    [name]
  );

  return getWellTypeModel(result.insertId);
}

// Update Well Type
export async function updateWellTypeModel(id, data) {
  const { name } = data;

  await pool.query(
    `
    UPDATE well_types
    SET name = ?
      WHERE id = ?
    `,
    [name, id]
  );

  return getWellTypeModel(id);
}

// Delete Well Type by id
export async function deleteWellTypeModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM well_types
      WHERE id = ?
   `,
    [id]
  );
  return result;
}
