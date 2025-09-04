import React, { useState } from 'react';

interface CampusTime {
  morningStart: string;
  morningEnd: string;
  eveningStart: string;
  eveningEnd: string;
  intervalStart: string;
  intervalEnd: string;
}

const App: React.FC = () => {
  const [campusTime, setCampusTime] = useState<CampusTime>({
    morningStart: '08:00',
    morningEnd: '12:00',
    eveningStart: '14:00',
    eveningEnd: '18:00',
    intervalStart: '10:00',
    intervalEnd: '10:30',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCampusTime({ ...campusTime, [name]: value });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Smart Campus Management System</h1>

      <h2>Morning Session</h2>
      <label>
        Start Time: 
        <input
          type="time"
          name="morningStart"
          value={campusTime.morningStart}
          onChange={handleChange}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        End Time: 
        <input
          type="time"
          name="morningEnd"
          value={campusTime.morningEnd}
          onChange={handleChange}
        />
      </label>

      <h2>Evening Session</h2>
      <label>
        Start Time: 
        <input
          type="time"
          name="eveningStart"
          value={campusTime.eveningStart}
          onChange={handleChange}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        End Time: 
        <input
          type="time"
          name="eveningEnd"
          value={campusTime.eveningEnd}
          onChange={handleChange}
        />
      </label>

      <h2>Interval</h2>
      <label>
        Start Time: 
        <input
          type="time"
          name="intervalStart"
          value={campusTime.intervalStart}
          onChange={handleChange}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        End Time: 
        <input
          type="time"
          name="intervalEnd"
          value={campusTime.intervalEnd}
          onChange={handleChange}
        />
      </label>

      <h2>Summary</h2>
      <p>Morning: {campusTime.morningStart} - {campusTime.morningEnd}</p>
      <p>Evening: {campusTime.eveningStart} - {campusTime.eveningEnd}</p>
      <p>Interval: {campusTime.intervalStart} - {campusTime.intervalEnd}</p>
    </div>
  );
};

export default App;
