import React from 'react';

const Timetable = ({ timetable = [] }) => (
  <div className="card">
    <div className="card-header">
      <h2>Timetable</h2>
    </div>
    <div className="card-body">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
            <th>Subject</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.hours}</td>
              <td>{entry.subject}</td>
              <td>{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Timetable;
