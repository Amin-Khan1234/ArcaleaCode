require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Create a table during application startup
const createTable = async () => {
  try {
    await pool.promise().query(`
        CREATE TABLE IF NOT EXISTS tbltimetracker (
          id INT AUTO_INCREMENT PRIMARY KEY,
          userId INT NOT NULL,
          task VARCHAR(255) NOT NULL,
          startTime DATETIME NOT NULL,
          endTime DATETIME NOT NULL
        );
      `);
    console.log("Table created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

createTable(); // Call the function to create the table

module.exports = pool.promise();
