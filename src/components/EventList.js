import React from 'react';
import DeleteEvent from './DeleteEvent';  // Import DeleteEvent component

function EventList({ events, deleteEvent }) {
  return (
    <div>
      {events.length === 0 ? (
        <p>No events added yet. Start planning!</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
            <DeleteEvent eventId={event.id} deleteEvent={deleteEvent} /> {/* Add delete button */}
          </div>
        ))
      )}
    </div>
  );
}

export default EventList;
