import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventGrid from './components/EventGrid';
import AddEventForm from './components/AddEventForm';
import './App.css';
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query';

// Note you will have to update this env variable in your Frontend/buildspec.yml with your created beanstalk URL.
const API_BASE = process.env.REACT_APP_API_BASE_URL;

// use this endpoints URLs for your fetching and adding logic that you will implement.
const FETCH_EVENTS_URL = `${API_BASE}/data`;
const ADD_EVENT_URL = `${API_BASE}/events`;


// TODO: Implement this function to fetch event data from your backend. Return the parsed JSON (an array of event objects)
// HINT: Use the `fetch()` API and handle errors appropriately.
const fetchEvents = async () => {};


function App({}) {
  const queryClient = useQueryClient(); 
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  // TODO: Use TanStack Query's `useQuery` hook to fetch events from your backend.
  // HINT: `queryKey` and a `queryFn`
  const { data: events = [], isLoading, error } = useQuery({});

  // TODO: Implement this function to send a POST request to your backend to add a new event.
  // HINT: Use the `fetch()` API and implement error handling.
  const addEvent = async (newEvent) => {};

  // TODO: Use `useMutation` from TanStack Query to call your `addEvent` function.
  // HINT: On success, invalidate the query (so 'events' can be refeteched and updated) and close the form pop-up.
  const mutation = useMutation({});

  // TODO: Call your mutation function to trigger the event addition.
  // HINT: Use `mutation.mutate()`.
  const handleAddEvent = (newEvent) => {};


  return (
    <div className="App">
      <Header />

      <div className="search-plus-bar">
        <SearchBar query={query} setQuery={setQuery} />
        <button className="plus-button" onClick={() => setShowForm(true)}>+</button>
      </div>

      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Loading events...</p>
      ) : error ? (
        <p style={{ textAlign: 'center' }}>Error loading events: {error.message}</p>
      ) : (
        <EventGrid query={query} events={events} />
      )}

      {/* Add-New-Event Popup */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddEventForm onAddEvent={handleAddEvent} />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

