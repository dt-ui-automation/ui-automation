const express = require("express");
const { pool, connectDB } = require("./db");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function startServer() {
    // Database connect aana mattum next line execute aagum
    await connectDB();

    app.get("/", (req, res) => {
        res.send("Server running and database connected!");
    });

    app.get("/users", async (req, res) => {
        try {
            const [users] = await pool.query(
                "SELECT * FROM users"
            );

            res.json(users);
        } catch (error) {
            console.error("Query failed:", error.message);
            res.status(500).json({
                message: "Database query failed"
            });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();