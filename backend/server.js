// backend/server.js
import express from "express";
import cors from "cors";
import db from "./config/Database.js";

// Routes
import RoomRoute from "./routes/RoomRoute.js";
import StuffRoute from "./routes/StuffRoute.js";
import TagRoute from "./routes/TagRoute.js";

const app = express();

// CORS supaya frontend bisa akses
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middleware JSON
app.use(express.json());

// Serve file gambar
app.use(express.static("public"));

// Test koneksi db
(async () => {
  try {
    await db.authenticate();
    console.log("✅ Database connected...");
  } catch (error) {
    console.error("❌ Database error:", error);
  }
})();

// Routes
app.use(RoomRoute);
app.use(StuffRoute);
app.use(TagRoute);

// Root
app.get("/", (req, res) => {
  res.json({ message: "MHC Virtual Tour API" });
});

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
