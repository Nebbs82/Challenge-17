const router = require('express').Router();
const User = require('../../models/User');

router.get('/', async (_req, res) => {
  try {
    const users = await User.find().populate('thoughts friends');
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});