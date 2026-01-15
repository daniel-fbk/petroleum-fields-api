import pool from "../config/database.js";

// Get Well Specs
export async function getWellSpecsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM well_specs
   `
  );
  return rows;
}

// Get Well Spec by id
export async function getWellSpecModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM well_specs
      WHERE id = ?
   `,
    [id]
  );
  return rows[0];
}

// Create Well Spec
export async function createWellSpecModel(data) {
  const { well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir } = data;

  const [result] = await pool.query(
    `
    INSERT INTO well_specs
      (well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
   `,
    [well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir]
  );

  return getWellSpecModel(result.insertId);
}

// Update Well Spec
export async function updateWellSpecModel(id, data) {
  const { well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir } = data;

  await pool.query(
    `
    UPDATE well_specs
    SET well_id = ?, total_depth = ?, tvd = ?, elevation_kb = ?, elevation_seabed = ?, tubing_size = ?, casing_size = ?, reservoir = ?
      WHERE id = ?
   `,
    [well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir, id]
  );

  return getWellSpecModel(id);
}

// Delete Well Spec by id
export async function deleteWellSpecModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM well_specs
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
