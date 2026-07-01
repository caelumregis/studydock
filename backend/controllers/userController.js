const userService = require('../services/userService'); 
const APIResponse = require('../utils/APIResponse');

function getAllUsers(req, res) {
    const users = userService.getAllUsers();

    return APIResponse.success(
      res,
      users,
      "Users retrieved successfully"
    );
}

function getUserById(req, res) {
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
}

module.exports = {
    getAllUsers,
    getUserById
};