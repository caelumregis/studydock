const express = require("express");
const userService = require("../services/userService");

const router = express.Router();

// Returns all users.
//
// The route delegates data retrieval to the service layer so this file
// stays focused on HTTP routing instead of business/data logic.
router.get("/", (req, res) => {
  const users = userService.getAllUsers();

  res.json(users);
});

// Returns one user by ID
//
// Route parameters come from the URL as strings
// so we convert the ID to a number before searching
router.get("/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = userService.getUserById(userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

module.exports = router;