const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 4100;

// Parse incoming JSON payloads before they reach route handlers
app.use(express.json());

// Health-check route used to verfiy that the API service is running
app.get("/", (req, res) => {
    res.json({
        service: "StudyDock API",
        status: "running",
        version: "1.0.0"
    });
});

// Group all user-related endpoints under /users.
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});