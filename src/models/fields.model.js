import pool from "../config/database.js";

// Get Fields
export async function getFields() {
  // Brackets around rows for destructuring
  const [rows] = await pool.query("SELECT * FROM fields");
  return rows;
}

// Get Field
export async function getField(id) {
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
export async function createField(
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
  field_type
) {
  const [result] = await pool.query(
    `
        INSERT INTO fields (name, region, block, operator, partners, status, discovery_year, onstream_date, abandonment_date, reservoir, water_depth, latitude, longitude, field_type)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
  return getField(id);
}

// Delete Field
export async function deleteField(id) {
  const [result] = await pool.query("DELETE FROM fields WHERE id = ?", [id]);
  return result;
}

// Update Field
export async function updateField(
  id,
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
  field_type
) {
  const [result] = await pool.query(
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
  return getField(id);
}
