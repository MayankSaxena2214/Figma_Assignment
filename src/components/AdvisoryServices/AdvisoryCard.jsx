import React from 'react';
import "./AdvisoryCard.css";

const AdvisoryCard = ({ heading, image, item }) => {
  return (
    <div className="advisory-card">
      <div className="advisory-imgsection" style={{ backgroundImage: `url(${image})` }}>
        <div className="advisory-img-heading">{heading}</div>
      </div>
      <div className="advisory-content-section">
        <ul>
          {item && item.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvisoryCard;
