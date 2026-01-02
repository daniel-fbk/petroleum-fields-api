import pool from "../config/database.js";

// Get all Well Specs
export async function getWellSpecs() {
  const [rows] = await pool.query(`
    SELECT *
    FROM well_specs
  `);
  return rows;
}

// Get Well Spec by id
export async function getWellSpec(id) {
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
export async function createWellSpec(data) {
  const { well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir } = data;

  const [result] = await pool.query(
    `
    INSERT INTO well_specs
      (well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir]
  );

  return getWellSpec(result.insertId);
}

// Update Well Spec
export async function updateWellSpec(id, data) {
  const { well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir } = data;

  await pool.query(
    `
    UPDATE well_specs
    SET well_id = ?, total_depth = ?, tvd = ?, elevation_kb = ?, elevation_seabed = ?, tubing_size = ?, casing_size = ?, reservoir = ?
    WHERE id = ?
  `,
    [well_id, total_depth, tvd, elevation_kb, elevation_seabed, tubing_size, casing_size, reservoir, id]
  );

  return getWellSpec(id);
}

// Delete Well Spec by id
export async function deleteWellSpec(id) {
  const [result] = await pool.query(
    `
    DELETE FROM well_specs
    WHERE id = ?
  `,
    [id]
  );
  return result;
}
