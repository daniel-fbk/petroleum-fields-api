import pool from "../config/database.js";

// Get field metrics
export async function getFieldMetricsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM field_metrics
    `
  );
  return rows;
}

// Get field metric by id
export async function getFieldMetricModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM field_metrics
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create field metric
export async function createFieldMetricModel(data) {
  const {
    field_id,
    year,
    estimated_oil_reserves,
    estimated_gas_reserves,
    production_capacity_oil,
    production_capacity_gas,
  } = data;

  const [result] = await pool.query(
    `
    INSERT INTO field_metrics
      (field_id, year, estimated_oil_reserves, estimated_gas_reserves, production_capacity_oil, production_capacity_gas)
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [field_id, year, estimated_oil_reserves, estimated_gas_reserves, production_capacity_oil, production_capacity_gas]
  );

  return getFieldMetricModel(result.insertId);
}

// Update field metric
export async function updateFieldMetricModel(id, data) {
  const {
    field_id,
    year,
    estimated_oil_reserves,
    estimated_gas_reserves,
    production_capacity_oil,
    production_capacity_gas,
  } = data;

  await pool.query(
    `
    UPDATE field_metrics
    SET field_id = ?, year = ?, estimated_oil_reserves = ?, estimated_gas_reserves = ?, production_capacity_oil = ?, production_capacity_gas = ?
      WHERE id = ?
    `,
    [
      field_id,
      year,
      estimated_oil_reserves,
      estimated_gas_reserves,
      production_capacity_oil,
      production_capacity_gas,
      id,
    ]
  );

  return getFieldMetricModel(id);
}

// Delete field metric by id
export async function deleteFieldMetricModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM field_metrics
      WHERE id = ?
   `,
    [id]
  );
  return result;
}
