import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://mindlytools.onrender.com",     // backend
      "https://mindlytools1.onrender.com", //  frontend 
      "http://localhost:5173",                // Vite local dev
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MindlyTools API is running...");
});

// API routes
app.use("/api", routes);

export default app;
