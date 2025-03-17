const router = require('express').Router();
const User = require('../models/User');
const Thought = require("../models/Thought")


router.get('/', async (_req, res) => {
  try {
    const users = await User.find().populate('thoughts friends');
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:userId', async (req, res) => {
  try { 
  const user = await User.findById(req.params.userId).populate('thoughts friends');
  res.json(user);
} catch (err) {
  res.status(500).json(err);
}
});



router.post('/', async (req, res) => {
  try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
  } catch (err) {
      res.status(500).json(err);
  }
});


router.put('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)

    await Thought.deleteMany({ username: user.username });

    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User and associated thoughts deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friend = await User.findById(req.params.friendId);
    
    if (!user || !friend) {
      return res.status(404).json({ message: 'User or friend not found' });
    }

    user.friends.push(friend._id);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.friends.pull(req.params.friendId);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;