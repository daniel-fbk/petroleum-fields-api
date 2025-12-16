import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getFields() {
  // brackets around rows for destructuring
  const [rows] = await pool.query("SELECT * FROM fields");
  return rows;
}

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

const fields = await getFields();
const field = await getField(1);

console.log(field);
