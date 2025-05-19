const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create new user
router.post('/register', async (req, res) => {
  const { username, relationshipStatus } = req.body;
  try {
    const newUser = await User.create({ username, relationshipStatus });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
