const express = require('express');
const userController = require('../controllers/userController');
const validateIdParam = require('../middleware/validateIdParam');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', validateIdParam, userController.getUserById);

module.exports = router;