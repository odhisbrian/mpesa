// backend/index.js
const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Default test route
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
