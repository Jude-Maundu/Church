import React, { useContext } from 'react';
import { ContentContext } from '../ContentContext';

const DailyReadings = () => {
  const { getText } = useContext(ContentContext);
  const title = getText('dailyReadings','title','DAILY READINGS');
  const ctaUrl = getText('dailyReadings','ctaUrl','https://www.vaticannews.va/en/word-of-the-day.html');
  const ctaLabel = getText('dailyReadings','ctaLabel','Click Here');
  return (
    <div className="card h-100 shadow-sm text-center d-flex flex-column justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="card-body">
        <i className="fas fa-book-open fa-3x mb-3 text-secondary"></i>
        <h3 className="card-title fw-bold">{title}</h3>
        <p className="card-text text-muted">
          Reflect on the word of God with today's readings.
        </p>
        <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};

export default DailyReadings;