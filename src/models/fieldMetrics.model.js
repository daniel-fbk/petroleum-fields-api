import pool from "../config/database.js";

// Get all field metrics
export async function getFieldMetrics() {
  const [rows] = await pool.query(`
    SELECT *
    FROM field_metrics
  `);
  return rows;
}

// Get field metric by id
export async function getFieldMetric(id) {
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
export async function createFieldMetric(data) {
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

  return getFieldMetric(result.insertId);
}

// Update field metric
export async function updateFieldMetric(id, data) {
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

  return getFieldMetric(id);
}

// Delete field metric
export async function deleteFieldMetric(id) {
  const [result] = await pool.query(
    `
    DELETE FROM field_metrics
    WHERE id = ?
  `,
    [id]
  );
  return result;
}
