const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

// Test database connection
async function connectDB() {
    try {
        const connection = await pool.getConnection();

        console.log("Database connected successfully!");

        connection.release();
    } catch (error) {
        console.error("Database connection failed!");
        console.error(error.message);

        await pool.end().catch(() => { });
        process.exit(1);
    }
}

module.exports = { pool, connectDB };