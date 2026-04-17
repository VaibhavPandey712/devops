const express = require("express");

const app = express();
const PORT = 3000;

// Health route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});