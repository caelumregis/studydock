const express = require('express');
const userService = require('../services/userService');
const APIResponse = require('../utils/APIResponse');

const router = express.Router();

// GET /users - Get all users
router.get('/', (req, res) => {
    const users = userService.getAllUsers();

    return APIResponse.success(
      res,
      users,
      "Users retrieved successfully"
    );
});

// GET /users/:id - Get a user by ID
router.get('/:id', (req, res) => {
  const userId = Number(req.params.id);

  const user = userService.getUserById(userId);

  if (!user) {
    return APIResponse.error(
      res,
      "User not found",
      404
    );
  }

  return APIResponse.success(
    res,
    user,
    "User retrieved successfully"
  );
});

module.exports = router;