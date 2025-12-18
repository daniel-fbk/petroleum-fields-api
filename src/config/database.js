import mysql from "mysql2";
import appConfig from "../../config.js";

const pool = mysql
  .createPool({
    host: appConfig.DB_HOST,
    database: appConfig.DB_NAME,
    user: appConfig.DB_USER,
    password: appConfig.DB_PASSWORD,
  })
  .promise();

export default pool;
