import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CreateEvent from './components/CreateEvent';  // Import CreateEvent
import EventList from './components/EventList';      // Import EventList

function App() {
  const [events, setEvents] = useState([]); // State to store events

  // Function to handle new event creation
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]); // Add new event to the list
  };

  // Function to handle event deletion
  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId)); // Remove event by ID
  };

  return (
    <div className="App">
      <header>
        <h1>Event Planner</h1>
      </header>
      <main>
        <CreateEvent addEvent={addEvent} /> {/* Pass addEvent to CreateEvent */}
        <EventList events={events} deleteEvent={deleteEvent} /> {/* Pass deleteEvent to EventList */}
      </main>
      <footer>
        <p>© 2024 Event Planner</p>
      </footer>
    </div>
  );
}

export default App;
