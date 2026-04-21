import mysql from "mysql2/promise";
import { configDotenv } from "dotenv";
import demoSchools from "./demo/demoSchools.js";

configDotenv();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined
});

export const initDB = async() => {

  // create table "schools" if doesn't exist
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude DECIMAL(10,8) NOT NULL,
      longitude DECIMAL(11,8) NOT NULL
    )
  `);

  const [rows] = await pool.query("SELECT COUNT(*) as count FROM schools");
  
  // seeding demo data for empty table
  if (rows[0].count === 0) {
    for (const school of demoSchools) {
      await pool.query(
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
        [school.name, school.address, school.latitude, school.longitude]
      );
    }
  }
}