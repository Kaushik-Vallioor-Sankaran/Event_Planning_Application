const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create Event
router.post('/create', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RSVP to an Event
router.post('/rsvp/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email, status } = req.body;
    const event = await Event.findById(id);

    if (!event) return res.status(404).json({ error: 'Event not found' });

    const existingRSVP = event.rsvps.find((r) => r.email === email);
    if (existingRSVP) existingRSVP.status = status;
    else event.rsvps.push({ email, status });

    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
