import React from "react";

const InfoCard = ({ icon, title, imageSrc, imageAlt, children }) => {
  return (
    <div className="card border-0 shadow-lg h-100 info-card">
      <div className="info-card-header">
        <i className={`fas ${icon} fa-2x mb-2`}></i>
        <h5 className="fw-bold">{title}</h5>
      </div>
      <img
        src={imageSrc}
        className="card-img-top"
        alt={imageAlt}
      />
      <div className="card-body">
        <p className="card-text text-muted">{children}</p>
      </div>
    </div>
  );
};

export default InfoCard;