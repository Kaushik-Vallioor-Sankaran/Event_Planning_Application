import React from 'react';

function DeleteEvent({ eventId, deleteEvent }) {
  const handleDelete = () => {
    deleteEvent(eventId);  // Call deleteEvent function with the event ID
  };

  return (
    <button className="delete-btn" onClick={handleDelete}>
      Delete Event
    </button>
  );
}

export default DeleteEvent;
