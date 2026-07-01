const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

// GET /users - Get all users
router.get('/', (req, res) => {
    const users = userService.getAllUsers();

    res.status(200).json({
      success : true,
      message : "Users retrieved successfully",
      data : users
    });
});

// GET /users/:id - Get a user by ID
router.get('/:id', (req, res) => {
  const userId = Number(req.params.id);

  const user = userService.getUserById(userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      data: null
    });
  }

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user
  });
});

module.exports = router;