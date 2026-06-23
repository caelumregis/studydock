const express = require("express");
const userRoutes = require("./routes/userRoutes");

// Create the Express application instance.
const app = express();

// Apply middleware globally.
// Middleware sits between the request and route handlers.
app.use(express.json());

// Health-check endpoint.
//
// Browsers issue a GET request when visiting localhost:4100.
// This route confirms that the backend is alive and responding.
app.get("/", (req, res) => {
  res.send("StudyDock Backend Running");
});

const PORT = 4100;

// Start listening for incoming HTTP requests.
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});