import React from 'react';
import './EventCard.css';

export default function EventCard({ event }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  }
  return (
    <div className="event-card">
      <img src={event.image_url} alt={event.title} className="event-image" />
      <div className="event-info">
        <h3 className="event-name">{event.title}</h3>
        <p className="event-details">{event.location}</p>
        <p className="event-details">{formatDate(event.date)}</p>
      </div>
    </div>
  );
}
