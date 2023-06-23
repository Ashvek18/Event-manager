import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurringDays, setRecurringDays] = useState([]);

  const [events, setEvents] = useState([]);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRecurringDayChange = (day) => {
    if (recurringDays.includes(day)) {
      setRecurringDays(recurringDays.filter((d) => d !== day));
    } else {
      setRecurringDays([...recurringDays, day]);
    }
  };

  const handleAddEvent = () => {
    const newEvent = {
      eventName,
      startDate,
      endDate,
      recurringDays,
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div className='container text-center '>
      <h2 className=''>Create Event</h2>
      <label >
        Event Name:
        <input className='mx-4' type="text" value={eventName} onChange={handleEventNameChange} />
      </label>
      <br />
      <label>
        Start Date:
        <input className='mx-4'  type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />
      <label>
        End Date:
        <input className='mx-4'  type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />
      <label>
        Recurring Days:
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Monday')} onChange={() => handleRecurringDayChange('Monday')} />
        Monday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Tuesday')} onChange={() => handleRecurringDayChange('Tuesday')} />
        Tuesday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Wednesday')} onChange={() => handleRecurringDayChange('Wednesday')} />
        Wednesday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Thursday')} onChange={() => handleRecurringDayChange('Thursday')} />
        Thursday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Friday')} onChange={() => handleRecurringDayChange('Friday')} />
        Friday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Saturday')} onChange={() => handleRecurringDayChange('Saturday')} />
        Saturday
      </label>
      <br />
      <label>
        <input type="checkbox" checked={recurringDays.includes('Sunday')} onChange={() => handleRecurringDayChange('Sunday')} />
        Sunday
      </label>
      <br />
      <button className='btn btn-primary' onClick={handleAddEvent}>Add Event</button>
<br/><br/>
<br/><br/>

      <h2>Added Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong>
            <br />
            Start Date: {event.startDate}
            <br />
            End Date: {event.endDate}
            <br />
            Recurring Days: {event.recurringDays.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventForm;
