import React, { useState } from 'react';
import { rsvpEvent } from '../api';

const RSVPForm = ({ eventId }) => {
  const [form, setForm] = useState({ email: '', status: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await rsvpEvent(eventId, form);
    setForm({ email: '', status: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
        required
      >
        <option value="">Select RSVP</option>
        <option value="accepted">Accepted</option>
        <option value="declined">Declined</option>
      </select>
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;
