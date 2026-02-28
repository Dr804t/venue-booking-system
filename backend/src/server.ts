// backend/src/server.ts
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Booking API running" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});