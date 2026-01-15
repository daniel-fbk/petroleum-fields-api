import pool from "../config/database.js";

// Get incidents
export async function getIncidentsModel() {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM incidents
    `
  );
  return rows;
}

// Get incident by id
export async function getIncidentModel(id) {
  const [rows] = await pool.query(
    `
    SELECT *
      FROM incidents
      WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

// Create incident
export async function createIncidentModel(data) {
  const {
    well_id,
    incident_date,
    type,
    severity,
    status = "open",
    description,
    resolution_date,
    resolution_notes,
  } = data;

  const [result] = await pool.query(
    `
    INSERT INTO incidents
      (well_id, incident_date, type, severity, status, description, resolution_date, resolution_notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [well_id, incident_date, type, severity, status, description, resolution_date, resolution_notes]
  );

  return getIncidentById(result.insertId);
}

// Update incident
export async function updateIncidentModel(id, data) {
  const { well_id, incident_date, type, severity, status, description, resolution_date, resolution_notes } = data;

  await pool.query(
    `
    UPDATE incidents
    SET well_id = ?, incident_date = ?, type = ?, severity = ?, status = ?, description = ?, resolution_date = ?, resolution_notes = ?
      WHERE id = ?
    `,
    [well_id, incident_date, type, severity, status, description, resolution_date, resolution_notes, id]
  );

  return getIncidentById(id);
}

// Delete incident by id
export async function deleteIncidentModel(id) {
  const [result] = await pool.query(
    `
    DELETE FROM incidents
      WHERE id = ?
    `,
    [id]
  );
  return result;
}
