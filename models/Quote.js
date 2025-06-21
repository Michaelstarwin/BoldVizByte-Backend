const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Quote', quoteSchema);
