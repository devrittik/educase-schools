import express from "express";
import morgan from "morgan";
import schoolRoutes from "./routes/schoolRoutes.js";
import { configDotenv } from "dotenv";
import { initDB } from "./db.js";

configDotenv();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Health check endpoint
app.get("/status", (req, res) => {
  return res.status(200).json({
    status: "up",
    service: "educase-schools",
    timestamp: new Date().toISOString()
  });
});

app.use("/", schoolRoutes);

// port definition
const port = process.env.PORT;

await initDB();
console.log("Connected to DB");

app.listen(port, () => {
  console.log("Server running on Port:", port);
});