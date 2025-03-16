const router = require('express').Router();
const Thought = require('../models/Thought.js');

router.get('/', async (_req, res) => {
  try {
    const thoughts = await Thought.find().populate('username');
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id).populate('username');
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
  const newThought = await Thought.create(req.body);
  res.status(201).json(newThought);
  } catch (err) {
      res.status(500).json(err);
    }
});


router.put('/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted' }); // Corrected message
  } catch (err) {
    res.status(500).json(err);
  }
});  

module.exports = router; 