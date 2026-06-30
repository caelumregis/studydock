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

module.exports = router;