import "../styles/homeitem.css";

import { Link } from "react-router-dom";

const HomeItem = ({ title, description, link }) => {
  const icon = {
    "Open Source": "icon-code",
    Community: "community-icon",
    Mobile: "mobile-icon",
  };

  return (
    <Link to={link}>
      <div className="home-item">
        <div className="icon-item-content">
          <div className={"home-item-icon " + icon[title]}></div>
        </div>
        <div className="home-item-title">{title}</div>
        <div className="home-item-description">{description}</div>
      </div>
    </Link>
  );
};

export default HomeItem;
