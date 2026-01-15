import pool from "../config/database.js";

// Get production entries
export async function getProductionsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM production
    `
  );
  return rows;
}

// Get production entry by id
export async function getProductionModel(id) {
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
export async function createProductionModel(data) {
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

  return getProductionModel(result.insertId);
}

// Update production entry
export async function updateProductionModel(id, data) {
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

  return getProductionModel(id);
}

// Delete production entry by id
export async function deleteProductionModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM production
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
