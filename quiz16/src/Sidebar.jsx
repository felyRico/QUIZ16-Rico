import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="menu-item active">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <span>Notification</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCommentAlt} className="icon" />
          <span>Messages</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Profile</span>
        </div>
        <div className="menu-item">
        <button className="trending-button">Trending</button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
