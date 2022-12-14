import React, { useRef } from "react";
import { Link } from "react-router-dom";

const MissionCard = ({ mission }) => {
  const Icon = mission.icon;
  return (
    <div className="card">
      <div className="card-icon">
        <Icon />
      </div>
      <div className="card-title">
        <h3>{mission.title}</h3>
      </div>
      <div className="card-des">
        <p>{mission.description}</p>
      </div>
      <Link>read more &rarr;</Link>
    </div>
  );
};

export default MissionCard;
