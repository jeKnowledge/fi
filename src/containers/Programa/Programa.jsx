import React, { useState } from 'react';
import './Programa.css'


const Programa = () => {
  const [selectedDay, setSelectedDay] = useState('Day 1');
  const [events, setEvents] = useState({
    'Day 1': [
      { title: 'OLAAAAAAAAAAAAAAAAAAAA', start: '14:00', end: '16:00' },
      { title: 'Event 2', start: '15:00', end: '17:00' },
      { title: 'Event 3', start: '16:00', end: '18:00' },
    ],
    'Day 2': [
      { title: 'Another event', start: '10:00', end: '12:00' },
      { title: 'Yet another event', start: '13:00', end: '15:00' },
      { title: 'One more event', start: '16:00', end: '18:00' },
    ],
  });

  
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const generateGrid = (events) => {
    // Define the time slots for the schedule
    const times = [
      
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];

    const eventsForDay = events[selectedDay];

    // Generate the schedule grid
    const grid = times.map((time, index) => {
      // Find the events that start at this time slot
      const eventsAtTime = eventsForDay.filter((event) => event.start === time);

      // Generate the event boxes for this time slot
      const eventBoxes = eventsAtTime.map((event) => {
        const duration = parseInt(event.end.split(':')[0]) - parseInt(event.start.split(':')[0]);
        const height = duration * 50; // 50 pixels per hour

        return (
          <div className="event" style={{ height: `${height}px` }}>
            <p>{event.title}</p>
            
          </div>
        );
      });
      if (eventBoxes.length === 0) {
        eventBoxes.push(
          <div className="empty_event" style={{ height: `100px` }}>
          </div>
        );
      }

      // Generate the time slot and event boxes for this row
      return (
        <div className="row">
          <div className="time">{time}</div>
          <div className="events">{eventBoxes}</div>
        </div>
      );
    });

    return grid;
  };

  return (
    <div className="app_programa">
      <h1>Horário do evento</h1>
      <div className="app_programa_dia">
        <div className={`day-box ${selectedDay === 'Day 1' ? 'selected' : ''}`} onClick={() => handleDayClick('Day 1')}>
            <p>5 Maio</p>
          
        </div>
        <div className={`day-box ${selectedDay === 'Day 2' ? 'selected' : ''}`} onClick={() => handleDayClick('Day 2')}>
          <p>6 Maio</p>
        </div>
      </div>
      <div className="grid">{generateGrid(events)}</div>
      </div>
  );
};


export default Programa