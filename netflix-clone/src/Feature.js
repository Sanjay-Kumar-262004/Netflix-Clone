import React from 'react';
import './Feature.css'; // Extract feature-specific styles if needed

const Feature = ({ title, description, image, isImageFirst }) => {
  return (
    <div className="feature">
      <div className="row">
        {isImageFirst && (
          <div className="img-col">
            <img src={image} alt="Feature" />
          </div>
        )}
        <div className="text-col">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {!isImageFirst && (
          <div className="img-col">
            <img src={image} alt="Feature" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
