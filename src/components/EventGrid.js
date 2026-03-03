import React from 'react';
import EventCard from './EventCard';
import './EventGrid.css';

export default function EventGrid({query, events}) {
    const safeQuery = query?.toLowerCase() || '';
    const safeEvents = Array.isArray(events) ? events : [];
    const filteredEvents = safeEvents.filter((event) => {
        const combined = (event.title + ' ' + event.location).toLowerCase();
        return combined.includes(safeQuery);
    });

    return (
        <div className="event-grid"> 
        {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
            ))
        ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>
                No events match your search.
            </p>
        )
        }
        </div>
    );

}
