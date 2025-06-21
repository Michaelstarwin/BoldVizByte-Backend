const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.post('/', async (req, res) => {
  try {
    const { name, email, service, message } = req.body;
    const newQuote = new Quote({ name, email, service, message });
    await newQuote.save();
    res.status(201).json({ message: "Quote request submitted!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save quote form" });
  }
});

module.exports = router;
