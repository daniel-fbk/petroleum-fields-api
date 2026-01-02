import pool from "../config/database.js";

// Get all Well Types
export async function getWellTypes() {
  const [rows] = await pool.query(`
    SELECT *
    FROM well_types
  `);
  return rows;
}

// Get Well Type by id
export async function getWellType(id) {
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
export async function createWellType(data) {
  const { name } = data;

  const [result] = await pool.query(
    `
    INSERT INTO well_types (name)
    VALUES (?)
  `,
    [name]
  );

  return getWellType(result.insertId);
}

// Update Well Type
export async function updateWellType(id, data) {
  const { name } = data;

  await pool.query(
    `
    UPDATE well_types
    SET name = ?
    WHERE id = ?
  `,
    [name, id]
  );

  return getWellType(id);
}

// Delete Well Type by id
export async function deleteWellType(id) {
  const [result] = await pool.query(
    `
    DELETE FROM well_types
    WHERE id = ?
  `,
    [id]
  );
  return result;
}
