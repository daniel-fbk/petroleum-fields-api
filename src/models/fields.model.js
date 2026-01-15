import pool from "../config/database.js";

// Get Fields
export async function getFieldsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM fields
    `
  );
  return rows;
}

// Get Field by id
export async function getFieldModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM fields
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create Field
export async function createFieldModel(fieldData) {
  const {
    name,
    region,
    block = null,
    operator,
    partners = null,
    status,
    discovery_year,
    onstream_date = null,
    abandonment_date = null,
    reservoir = null,
    water_depth = null,
    latitude,
    longitude,
    field_type,
  } = fieldData;

  const [result] = await pool.query(
    `
    INSERT INTO fields
      (name, region, block, operator, partners, status, discovery_year, onstream_date, abandonment_date, reservoir, water_depth, latitude, longitude, field_type)
    VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      region,
      block,
      operator,
      partners,
      status,
      discovery_year,
      onstream_date,
      abandonment_date,
      reservoir,
      water_depth,
      latitude,
      longitude,
      field_type,
    ]
  );

  const id = result.insertId;
  return getFieldModel(id);
}

// Update Field
export async function updateFieldModel(id, fieldData) {
  const {
    name,
    region,
    block = null,
    operator,
    partners = null,
    status,
    discovery_year,
    onstream_date = null,
    abandonment_date = null,
    reservoir = null,
    water_depth = null,
    latitude,
    longitude,
    field_type,
  } = fieldData;

  await pool.query(
    `
    UPDATE fields
    SET name = ?, region = ?, block = ?, operator = ?, partners = ?, status = ?, discovery_year = ?, onstream_date = ?, abandonment_date = ?, reservoir = ?, water_depth = ?, latitude = ?, longitude = ?, field_type = ?
      WHERE id = ?
    `,
    [
      name,
      region,
      block,
      operator,
      partners,
      status,
      discovery_year,
      onstream_date,
      abandonment_date,
      reservoir,
      water_depth,
      latitude,
      longitude,
      field_type,
      id,
    ]
  );

  return getFieldModel(id);
}

// Delete Field by id
export async function deleteFieldModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM fields
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
