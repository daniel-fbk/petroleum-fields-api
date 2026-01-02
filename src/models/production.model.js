import pool from "../config/database.js";

// Get all production entries
export async function getProductionList() {
  const [rows] = await pool.query(`
    SELECT *
    FROM production
  `);
  return rows;
}

// Get a single production entry by id
export async function getProductionById(id) {
  const [rows] = await pool.query(
    `
    SELECT *
    FROM production
    WHERE id = ?
  `,
    [id]
  );
  return rows[0];
}

// Create production entry
export async function createProductionEntry(data) {
  const {
    well_id,
    production_date,
    oil_volume,
    gas_volume,
    watercut,
    water_volume,
    on_stream_hours,
    off_stream_hours,
    gas_flare,
    downhole_pressure,
    downhole_temp,
    wellhead_pressure,
    choke_pct,
  } = data;

  const [result] = await pool.query(
    `
    INSERT INTO production
      (well_id, production_date, oil_volume, gas_volume, watercut, water_volume, on_stream_hours, off_stream_hours, gas_flare, downhole_pressure, downhole_temp, wellhead_pressure, choke_pct)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [
      well_id,
      production_date,
      oil_volume,
      gas_volume,
      watercut,
      water_volume,
      on_stream_hours,
      off_stream_hours,
      gas_flare,
      downhole_pressure,
      downhole_temp,
      wellhead_pressure,
      choke_pct,
    ]
  );

  return getProductionById(result.insertId);
}

// Update production entry
export async function updateProductionEntry(id, data) {
  const {
    well_id,
    production_date,
    oil_volume,
    gas_volume,
    watercut,
    water_volume,
    on_stream_hours,
    off_stream_hours,
    gas_flare,
    downhole_pressure,
    downhole_temp,
    wellhead_pressure,
    choke_pct,
  } = data;

  await pool.query(
    `
    UPDATE production
    SET well_id = ?, production_date = ?, oil_volume = ?, gas_volume = ?, watercut = ?, water_volume = ?, on_stream_hours = ?, off_stream_hours = ?, gas_flare = ?, downhole_pressure = ?, downhole_temp = ?, wellhead_pressure = ?, choke_pct = ?
    WHERE id = ?
  `,
    [
      well_id,
      production_date,
      oil_volume,
      gas_volume,
      watercut,
      water_volume,
      on_stream_hours,
      off_stream_hours,
      gas_flare,
      downhole_pressure,
      downhole_temp,
      wellhead_pressure,
      choke_pct,
      id,
    ]
  );

  return getProductionById(id);
}

// Delete production entry
export async function deleteProductionEntry(id) {
  const [result] = await pool.query(
    `
    DELETE FROM production
    WHERE id = ?
  `,
    [id]
  );
  return result;
}
