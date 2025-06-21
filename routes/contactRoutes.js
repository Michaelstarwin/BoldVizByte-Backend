const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Message received successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save contact form" });
  }
});

module.exports = router;
