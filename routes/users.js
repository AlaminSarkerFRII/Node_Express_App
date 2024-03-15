// routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Create a new user
router.post('/', usersController.createUser);

// Get all users
router.get('/', usersController.getAllUsers);

// Get user by username
router.get('/:username', usersController.getUserByUsername);

// Update user by username
router.put('/:username', usersController.updateUserByUsername);

// Delete user by username
router.delete('/:username', usersController.deleteUserByUsername);

module.exports = router;
