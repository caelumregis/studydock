const express = require("express");
const userRoutes = require("./routes/userRoutes");
const appConfig = require("./config/appConfig");


const app = express();


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

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});