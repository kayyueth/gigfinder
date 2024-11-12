import React from "react";
import { useLocation } from "react-router-dom";
import './event-details-page.css';
import Navbar from "../../components/navbar/navbar";

function EventDetailsPage() {
  const location = useLocation();
  const { event } = location.state;

  if (!event) return <p>Event details not available.</p>;

  return (
    <div className="page">
      <Navbar />
      <div className="event-details-page">
        <h1 className="event-details-name">{event.name}</h1>
        <img src={event.images[0].url} alt={event.name} className="event-details-image" />
        <p className="event-details-date">Date: {event.dates.start.localDate}</p>
        <p className="event-details-time">Time: {event.dates.start.localTime}</p>
        <p className="event-details-venue">Venue: {event._embedded.venues[0].name}</p>
        <p className="event-details-venue-address">
          Address: {event._embedded.venues[0].address.line1}, {event._embedded.venues[0].city.name}, {event._embedded.venues[0].country.name}
        </p>
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="tickets-link">
          Buy Tickets
        </a>
      </div>
    </div>
  );
}

export default EventDetailsPage;