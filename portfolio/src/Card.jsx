// src/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, date, description, liveLink, sourceLink }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <small>{date}</small>
      </div>
      <img src="/images/hero1.svg" alt={title} className="card-image" />
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        {liveLink && <a href={liveLink} className="link link-primary">Live Project</a>}
        {sourceLink && <a href={sourceLink} className="link link-secondary">View Source</a>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  sourceLink: PropTypes.string,
};

export default Card;
