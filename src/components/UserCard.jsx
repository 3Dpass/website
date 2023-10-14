import "../styles/usercard.css";

import React from "react";

const UserCard = ({ name, title, description, image }) => {
  return (
    <React.Fragment>
      <div className="user-card-holder">
        <div className="user-card-image">
          {image && <img src={image} alt={name} />}
        </div>
        <div className="user-info-holder">
          <div className="user-card-name">{name}</div>
          <div className="user-card-title">{title}</div>
          <div className="user-card-description">{description}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCard;
