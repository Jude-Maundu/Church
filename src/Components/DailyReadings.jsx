import React from 'react';

const DailyReadings = () => {
  return (
    <div className="card h-100 shadow-sm text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="card-body">
        <i className="fas fa-book-open fa-3x mb-3 text-secondary"></i>
        <h3 className="card-title fw-bold">DAILY READINGS</h3>
        <p className="card-text text-muted">
          Reflect on the word of God with today's readings.
        </p>
        <a href="https://www.vaticannews.va/en/word-of-the-day.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
          Click Here
        </a>
      </div>
    </div>
  );
};

export default DailyReadings;