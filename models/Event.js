const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  participants: [{ type: String }],
  rsvps: [{ email: String, status: String }], // e.g., "accepted", "declined"
});

module.exports = mongoose.model('Event', eventSchema);
