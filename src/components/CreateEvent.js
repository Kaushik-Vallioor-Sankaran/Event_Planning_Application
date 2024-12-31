import React, { useState } from 'react';

function CreateEvent({ addEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate && eventDescription) {
      const newEvent = {
        id: Date.now(), // Unique ID for the event
        name: eventName,
        date: eventDate,
        description: eventDescription,
      };
      addEvent(newEvent);  // Send new event to App.js
      setEventName('');     // Clear form fields
      setEventDate('');
      setEventDescription('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Event Date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <textarea
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default CreateEvent;
